const path = require('path');
const fs = require('fs');
const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;

const DATA_DIR = path.join(__dirname, 'data');
const CONTACTS_FILE = path.join(DATA_DIR, 'contacts.json');
const STATIC_DIR = path.join(__dirname, 'arquitectura');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
if (!fs.existsSync(CONTACTS_FILE)) fs.writeFileSync(CONTACTS_FILE, JSON.stringify([]), 'utf8');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static site
app.use(express.static(STATIC_DIR));

// Configuración de Nodemailer con SendGrid
const transporter = nodemailer.createTransport({
  service: 'SendGrid',
  auth: {
    user: 'apikey',  // siempre literal
    pass: process.env.SENDGRID_API_KEY // ⚠️ leída desde .env
  }
});

// POST /contact endpoint
app.post('/contact', async (req, res) => {
  try {
    const { nombre, correo, mensaje, hp } = req.body || {};

    // Normalizar y validar correo
    const email = String(correo || '').trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Anti-spam y campos obligatorios
    if (hp) return res.status(400).json({ ok: false, error: 'spam detected' });
    if (!nombre || !email || !mensaje) {
      return res.status(400).json({ ok: false, error: 'missing fields' });
    }
    if (!emailRegex.test(email)) {
      return res.status(400).json({ ok: false, error: 'invalid email' });
    }
    // Aviso especial si el dominio parece un typo común
    if (email.toLowerCase().endsWith('@gmai.com')) {
      return res.status(400).json({ ok: false, error: '¿Quisiste decir @gmail.com?' });
    }

    const entry = {
      nombre: String(nombre).trim(),
      correo: email,
      mensaje: String(mensaje).trim(),
      date: new Date().toISOString(),
      ip: req.ip
    };

    // Límites de longitud para evitar mensajes gigantes / abuso
    const MAX_NOMBRE = 100;
    const MAX_CORREO = 254;
    const MAX_MENSAJE = 2000;

    if (
      entry.nombre.length > MAX_NOMBRE ||
      entry.correo.length > MAX_CORREO ||
      entry.mensaje.length > MAX_MENSAJE
    ) {
      return res.status(400).json({
        ok: false,
        error: 'Tu mensaje es demasiado largo. Por favor, reduce el texto.'
      });
    }

    // Filtro básico de palabras prohibidas (puedes ajustar la lista)
    const textoComb = `${entry.nombre} ${entry.mensaje}`.toLowerCase();
    const palabrasProhibidas = [
      // ejemplos genéricos, edita esta lista según tus necesidades reales
      'amenaza',
      'matar',
      'golpear',
      'violencia',
      'extorsión',
      'extorsion',
      'insulto',
      'ofensa',
      'grosería',
      'groseria',
      'spam',
      'pendejos',
      'idiotas',
      'estupidos',
      'estúpidos',
      'chinga tu madre',
      'chingatu madre',
      'puto',
      'puta',
      'cabron',
      'cabrón',
      'hijo de puta',
      'hijo de la chingada',
      'maldito',
      'maldita',
      'terrorista',
      'bombazo',
      'bomba',
      // puedes agregar más palabras o frases completas
    ];

    const contieneProhibidas = palabrasProhibidas.some(p => p && textoComb.includes(p));
    if (contieneProhibidas) {
      return res.status(400).json({
        ok: false,
        error: 'Tu mensaje contiene contenido inapropiado. Por favor, modifica el texto.'
      });
    }

    // Guardar en archivo
    const content = fs.readFileSync(CONTACTS_FILE, 'utf8');
    let arr = [];
    try { arr = JSON.parse(content); } catch (e) { arr = []; }
    arr.push(entry);
    fs.writeFileSync(CONTACTS_FILE, JSON.stringify(arr, null, 2), 'utf8');

    // Enviar correo SIEMPRE a tu dirección fija
    const mailOptions = {
      from: 'ccjose088@gmail.com',       // remitente verificado en SendGrid
      to: 'ccjose088@gmail.com',        // destinatario fijo (tu correo)
      subject: 'Nuevo mensaje del formulario',
      text: `Nombre: ${entry.nombre}
Correo del cliente: ${entry.correo}
Mensaje: ${entry.mensaje}
Fecha: ${entry.date}`
    };

    await transporter.sendMail(mailOptions);

    console.log('[contact] correo enviado a', mailOptions.to);
    return res.json({ ok: true, message: 'Formulario guardado y correo enviado' });
  } catch (err) {
    console.error('Error en /contact:', err);
    return res.status(500).json({ ok: false, error: 'server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT} — serving ${STATIC_DIR}`);
});
