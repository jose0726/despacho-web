
document.addEventListener('DOMContentLoaded', () => {
    const proyectosFiltradosContainer = document.getElementById('proyectos-filtrados');

    // Normalizador sencillo para comparar etiquetas (quita acentos, espacios, pasa a lowercase)
    const normalizeString = (s) => String(s || '').normalize('NFD').replace(/\p{Diacritic}/gu, '').replace(/\s+/g,' ').trim().toLowerCase().replace(/\s+/g,'-');

    // --- Abrir/Cerrar subcategorías ---
    const categorias = document.querySelectorAll('.categoria');
    categorias.forEach(categoria => {
        const btn = categoria.querySelector('.categoria-btn');
        const subContainer = categoria.querySelector('.subcategoria-container');

        // Aseguramos atributo aria-expanded y manejador accesible
        if (btn && !btn.hasAttribute('aria-expanded')) btn.setAttribute('aria-expanded','false');

        btn.addEventListener('click', () => {
            const estaAbierto = subContainer.style.display === 'block';
            subContainer.style.display = estaAbierto ? 'none' : 'block';
            btn.setAttribute('aria-expanded', String(!estaAbierto));
            if (estaAbierto) proyectosFiltradosContainer.innerHTML = '';
        });
    });

    // Repositorio de intervalos para rotación de miniaturas
    let intervalos = [];

    // Definir el observador UNA sola vez (se usa más abajo al crear elementos)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animación cada vez que el proyecto entra en pantalla
                anime({
                    targets: entry.target,
                    translateY: [30, 0],
                    opacity: [0, 1],
                    duration: 800,
                    easing: 'easeOutExpo'
                });
            }
        });
    }, { threshold: 0.2 }); // 20% visible para disparar
    const proyectos = [
        // ---- COMERCIAL ----
// Tiendas

        {categoria:'Comercial', sub:'tiendas', titulo:'MAGALI MACA NAILS', imagenes:[
        'img/proyecto/comercial/tiendas/magali_maca_nails/magali_maca_nails_1.webp'
        ], descripcion:'Proyecto comercial de tienda.'},

        {categoria:'Comercial', sub:'tiendas', titulo:'TIENDA IBERO', imagenes:[
        'img/proyecto/comercial/tiendas/tienda_ibero/tienda_ibero_1.webp'
        ], descripcion:'Proyecto comercial de tienda.'},

        {categoria:'Comercial', sub:'tiendas', titulo:'TIENDAS TUMI', imagenes:[
        'img/proyecto/comercial/tiendas/tiendas_tumi/tiendas_tumi_1.webp'
        ], descripcion:'Proyecto comercial de tienda.'},

        // ---- COMERCIAL ----
// Restaurantes

        {categoria:'Comercial', sub:'restaurantes', titulo:'HOYO 19 PARAISO COUNTRY', imagenes:[
        'img/proyecto/comercial/restaurantes/hoyo19_paraiso_country/hoyo19_paraiso_country_1.webp'
        ], descripcion:'Proyecto de restaurante en Paraíso Country Club.'},
                // ---- COMERCIAL ----
        // Oficinas

        {categoria:'Comercial', sub:'oficinas', titulo:'METEPEC', imagenes:[
        'img/proyecto/comercial/oficinas/metepec/metepec_1.webp'
        ], descripcion:'Proyecto de oficinas en Metepec.'},

        {categoria:'Comercial', sub:'oficinas', titulo:'OFICINA PRIVADA LOMA BONITA', imagenes:[
        'img/proyecto/comercial/oficinas/loma_bonita/loma_bonita_1.webp'
        ], descripcion:'Diseño de oficina privada en Loma Bonita.'},

        {categoria:'Comercial', sub:'oficinas', titulo:'NAYARIT YOGA COMERCIAL', imagenes:[
        'img/proyecto/comercial/oficinas/nayarit_yoga/nayarit_yoga_1.webp'
        ], descripcion:'Espacio comercial adaptado para yoga en Nayarit.'},

                // ---- COMERCIAL ----
        // Clínicas

        {categoria:'Comercial', sub:'clinicas', titulo:'DENTISTA NEZAHUALCOYOT', imagenes:[
        'img/proyecto/comercial/clinicas/dentista_nezahualcoyot/dentista_nezahualcoyot_1.webp'
        ], descripcion:'Clínica dental en Nezahualcóyotl.'},

        {categoria:'Comercial', sub:'clinicas', titulo:'SKINAIRE', imagenes:[
        'img/proyecto/comercial/clinicas/skinaire/skinaire_1.webp'
        ], descripcion:'Proyecto de clínica especializada.'},

        {categoria:'Comercial', sub:'clinicas', titulo:'ASA ORGANICS', imagenes:[
        'img/proyecto/comercial/clinicas/asa_organics/asa_organics_1.webp'
        ], descripcion:'Clínica con enfoque en productos orgánicos.'},

        {categoria:'Comercial', sub:'clinicas', titulo:'CONSULTORIOS HOSPITALES ANGELES', imagenes:[
        'img/proyecto/comercial/clinicas/consultorios_angeles/consultorios_angeles_1.webp'
        ], descripcion:'Consultorios médicos en Hospital Ángeles.'},

        {categoria:'Comercial', sub:'clinicas', titulo:'UROLOGO PEDREGAL', imagenes:[
        'img/proyecto/comercial/clinicas/urologo_pedregal/urologo_pedregal_1.webp'
        ], descripcion:'Consultorio de urología en Pedregal.'},

        {categoria:'Comercial', sub:'clinicas', titulo:'MEDICA SUR', imagenes:[
        'img/proyecto/comercial/clinicas/medica_sur/medica_sur_1.webp'

        ], descripcion:'Proyecto de clínica en Médica Sur.'},
            
        // ---- COMERCIAL ----
        // Bodegas

        {categoria:'Comercial', sub:'bodegas', titulo:'SPX FLOW', imagenes:[
        'img/proyectocomercial/bodegas/spx/spx1.webp',
        'img/proyectocomercial/bodegas/spx/spx2.webp',
        'img/proyectocomercial/bodegas/spx/spx3.webp'
        ], descripcion:'Proyecto de bodega industrial SPX Flow.'},

        {categoria:'Comercial', sub:'bodegas', titulo:'RANCHO DE GUADALUPE', imagenes:[
        'img/proyectocomercial/bodegas/guadalupe/guadalupe1.webp',
        'img/proyectocomercial/bodegas/guadalupe/guadalupe2.webp',
        'img/proyectocomercial/bodegas/guadalupe/guadalupe3.webp'
       ], descripcion:'Proyecto de bodega en Rancho de Guadalupe.'},

                // ---- RESIDENCIAL ----
        // Interés social

        {categoria:'Residencial', sub:'Interes social', titulo:'XOXHIMILCO', imagenes:[
        'img/proyectohabitacional/interes-social/xochi/xochimilco.webp',
        'img/proyectohabitacional/interes-social/xochi/xochimilco2.webp',
        'img/proyectohabitacional/interes-social/xochi/xochimilco3.webp',
        'img/proyectohabitacional/interes-social/xochi/xochimilco4.webp'
        
        

        ], descripcion:'Proyecto de vivienda de interés social en Xochimilco.'},

                // ---- RESIDENCIAL ----
        // Interés alto / Residencial

        {categoria:'Residencial', sub:'interes alto', titulo:'TOTOTONTLI', imagenes:[
        'img/proyecto/residencial/interes_alto/tototontli/tototontli_1.webp'
        ], descripcion:'Casa residencial de alto nivel.'},

        {categoria:'Residencial', sub:'interes alto', titulo:'TOHO', imagenes:[
        'img/proyecto/residencial/interes_alto/toho/toho_1.webp'
        ], descripcion:'Casa residencial de alto nivel.'},

        {categoria:'Residencial', sub:'interes alto', titulo:'CASA RESIDENCIAL SANTA CRUZ', imagenes:[
        'img/proyecto/residencial/interes_alto/santa_cruz/santa_cruz_1.webp'
        ], descripcion:'Casa residencial con acabados premium.'},

        {categoria:'Residencial', sub:'interes alto', titulo:'CASA PARAISO 2025', imagenes:[
        'img/proyecto/residencial/interes_alto/paraiso2025/paraiso2025_1.webp'
        ], descripcion:'Casa residencial de alto nivel.'},

        {categoria:'Residencial', sub:'interes alto', titulo:'XAHA', imagenes:[
        'img/proyecto/residencial/interes_alto/xaha/xaha_1.webp'
        ], descripcion:'Casa residencial de alto nivel.'},

        {categoria:'Residencial', sub:'interes alto', titulo:'CASA SANTA CRUZ', imagenes:[
        'img/proyecto/residencial/interes_alto/casa_santa_cruz/casa_santa_cruz_1.webp'
        ], descripcion:'Casa residencial con diseño moderno.'},

        {categoria:'Residencial', sub:'interes alto', titulo:'CHICHEWA', imagenes:[
        'img/proyecto/residencial/interes_alto/chichewa/chichewa_1.webp'
        ], descripcion:'Casa residencial de alto nivel.'},

        {categoria:'Residencial', sub:'interes alto', titulo:'CASA BARRETO', imagenes:[
        'img/proyecto/residencial/interes_alto/casa_barreto/casa_barreto_1.webp'
        ], descripcion:'Casa residencial de alto nivel.'},

        {categoria:'Residencial', sub:'interes alto', titulo:'RESIDENCIAL ARBOLADAS', imagenes:[
        'img/proyecto/residencial/interes_alto/arboladas/arboladas_1.webp'
        ], descripcion:'Residencial de alto nivel.'},

        {categoria:'Residencial', sub:'interes alto', titulo:'CASA PARAISO 2024', imagenes:[
        'img/proyecto/residencial/interes_alto/paraiso2024/paraiso2024_1.webp'
        ], descripcion:'Casa residencial de alto nivel.'},

        {categoria:'Residencial', sub:'interes alto', titulo:'GARCIA DE LEON', imagenes:[
        'img/proyecto/residencial/interes_alto/garcia_leon/garcia_leon_1.webp'
        ], descripcion:'Casa residencial de alto nivel.'},

        {categoria:'Residencial', sub:'interes alto', titulo:'CASA GONZALEZ', imagenes:[
        'img/proyecto/residencial/interes_alto/casa_gonzalez/casa_gonzalez_1.webp'
        ], descripcion:'Casa residencial de alto nivel.'},

        {categoria:'Residencial', sub:'interes alto', titulo:'RESIDENCIAL ACOZAC', imagenes:[
        'img/proyecto/residencial/interes_alto/acozac/acozac_1.webp'
        ], descripcion:'Residencial de alto nivel.'},

        {categoria:'Residencial', sub:'interes alto', titulo:'CABAÑA AMECA', imagenes:[
        'img/proyecto/residencial/interes_alto/cabana_ameca/cabana_ameca_1.webp'
        ], descripcion:'Cabaña residencial en Ameca.'},

                    // ---- RESIDENCIAL ----
        // Edificios

        {categoria:'Residencial', sub:'Multifamiliar', titulo:'CONDOMINIO JOSE DE LA MORA', imagenes:[
        'img/proyecto/residencial/edificios/jose_de_la_mora/jose_de_la_mora_1.webp'
        ], descripcion:'Condominio habitacional José de la Mora.'},

        {categoria:'Residencial', sub:'Multifamiliar', titulo:'CONDOMINIO TIERRA Y LIBERTAD', imagenes:[
        'img/proyecto/residencial/edificios/tierra_y_libertad/tierra_y_libertad_1.webp'
        ], descripcion:'Condominio habitacional Tierra y Libertad.'},

        {categoria:'Residencial', sub:'Multifamiliar', titulo:'LOMAS DE AYOTLA', imagenes:[
        'img/proyecto/residencial/edificios/lomas_de_ayotla/lomas_de_ayotla_1.webp'
        ], descripcion:'Edificio habitacional en Lomas de Ayotla.'},

                // ---- RESIDENCIAL ----
        // Interiorismo

        {categoria:'Residencial', sub:'interiorismo', titulo:'CASA GALLEGOS', imagenes:[
        'img/proyecto/residencial/interiorismo/casa_gallegos/casa_gallegos_1.webp'
        ], descripcion:'Proyecto de interiorismo residencial.'},

        {categoria:'Residencial', sub:'interiorismo', titulo:'JICURI', imagenes:[
        'img/proyecto/residencial/interiorismo/jicuri/jicuri_1.webp'
        ], descripcion:'Proyecto de interiorismo residencial.'},

        {categoria:'Residencial', sub:'interiorismo', titulo:'JUNACATLAN 2024', imagenes:[
        'img/proyecto/residencial/interiorismo/junacatlan2024/junacatlan2024_1.webp'
        ], descripcion:'Proyecto de interiorismo residencial.'},

        {categoria:'Residencial', sub:'interiorismo', titulo:'ADOLFO PRIETO 78º', imagenes:[
        'img/proyecto/residencial/interiorismo/adolfo_prieto_78/adolfo_prieto_78_1.webp'
        ], descripcion:'Proyecto de interiorismo residencial.'},

        {categoria:'Residencial', sub:'interiorismo', titulo:'BAÑO NAYARI', imagenes:[
        'img/proyecto/residencial/interiorismo/bano_nayari/bano_nayari_1.webp'
        ], descripcion:'Proyecto de interiorismo residencial.'},

        {categoria:'Residencial', sub:'interiorismo', titulo:'JUNACATLAN 2025', imagenes:[
        'img/proyecto/residencial/interiorismo/junacatlan2025/junacatlan2025_1.webp'
        ], descripcion:'Proyecto de interiorismo residencial.'},

        {categoria:'Residencial', sub:'interiorismo', titulo:'HERNAN 403 F', imagenes:[
        'img/proyectohabitacional/interior/depahernan/depahernan.webp',
        'img/proyectohabitacional/interior/depahernan/depahernan2.webp',
        'img/proyectohabitacional/interior/depahernan/depahernan3.webp'
        ], descripcion:'Proyecto de interiorismo residencial.'},

        {categoria:'Residencial', sub:'interiorismo', titulo:'VIA ROMA', imagenes:[
        'img/proyecto/residencial/interiorismo/via_roma/via_roma_1.webp'
        ], descripcion:'Proyecto de interiorismo residencial.'},

        {categoria:'Residencial', sub:'interiorismo', titulo:'HERIBERTO FARIAS', imagenes:[
        'img/proyecto/residencial/interiorismo/heriberto_farias/heriberto_farias_1.webp'
        ], descripcion:'Proyecto de interiorismo residencial.'},

                // ---- RESIDENCIAL ----
        // Paisaje

        {categoria:'Residencial', sub:'paisajismo', titulo:'MURO LLORON ACOZAC', imagenes:[
        'img/proyecto/residencial/paisaje/muro_lloron_acozac/muro_lloron_acozac_1.webp'
        ], descripcion:'Proyecto de paisaje con muro llorón en Acozac.'},

        {categoria:'Residencial', sub:'paisajismo', titulo:'PAISAJE CLAUSTRO SOR JUANA', imagenes:[
        'img/proyecto/residencial/paisaje/claustro_sor_juana/claustro_sor_juana_1.webp'
        ], descripcion:'Diseño de paisaje en Claustro Sor Juana.'},

        {categoria:'Residencial', sub:'paisajismo', titulo:'JARDIN VERACRUZ', imagenes:[
        'img/proyecto/residencial/paisaje/jardin_veracruz/jardin_veracruz_1.webp'
        ], descripcion:'Diseño de jardín residencial en Veracruz.'},

 // Continuar con los demás edificios y casas hasta completar los 70 proyectos
];

// --- Filtrado inicial según parámetro ---
// --- Filtrado inicial según parámetro ---
const params = new URLSearchParams(window.location.search);
    const categoriaParam = params.get("categoria");
    const subParam = params.get("sub");

    if (categoriaParam) {
        const categoriaSeleccionada = normalizeString(categoriaParam);

        categorias.forEach(categoria => {
            categoria.style.display = "none";
        });

        categorias.forEach(categoria => {
            const btn = categoria.querySelector(".categoria-btn");
            if (btn && normalizeString(btn.textContent) === categoriaSeleccionada) {
                categoria.style.display = "block";
                btn.setAttribute('aria-expanded','true');
            }
        });
    }

    if (subParam) {
        const subSeleccionada = normalizeString(subParam);

        // Limpiar contenedor
        proyectosFiltradosContainer.innerHTML = '';

        // Filtrar proyectos por subcategoría (normalizando)
        const filtrados = proyectos.filter(p => normalizeString(p.sub) === subSeleccionada);

        if (filtrados.length === 0) {
            proyectosFiltradosContainer.innerHTML = `<p class="no-proyectos">No hay proyectos en esta subcategoría.</p>`;
        } else {
           const creados = [];
           filtrados.forEach(p => {
                const div = document.createElement('div');
                div.classList.add('proyecto-item');

                const imgEl = document.createElement('img');
                imgEl.alt = p.titulo;
                imgEl.loading = 'lazy';
                imgEl.src = p.imagenes && p.imagenes.length ? p.imagenes[0] : '';

                // Manejo de fallback si la ruta falla: intentar rutas basadas en la categoría
                imgEl.addEventListener('error', function () {
                    const altPrefixes = [
                        `img/proyectocomercial/`,
                        `img/proyectohabitacional/`,
                        `img/proyecto/`,
                        `img/`];
                    const original = this.src;
                    const filename = original.split('/').pop();
                    for (const pref of altPrefixes) {
                        const candidate = pref + filename;
                        if (candidate === original) continue;
                        this.src = candidate;
                        break; // intentamos la primera alternativa útil
                    }
                });

                const descripcion = document.createElement('div');
                descripcion.className = 'descripcion';
                descripcion.innerHTML = `<h4>${p.titulo}</h4><p>${p.descripcion}</p>`;

                // Rotación de miniaturas (si aplica)
                let indice = 0;
                if (p.imagenes && p.imagenes.length > 1) {
                    const id = setInterval(() => {
                        indice = (indice + 1) % p.imagenes.length;
                        imgEl.src = p.imagenes[indice];
                    }, 3000);
                    intervalos.push(id);
                }

                div.appendChild(imgEl);
                div.appendChild(descripcion);

                proyectosFiltradosContainer.appendChild(div);

                // Si el elemento ya está dentro del viewport, no lo observamos
                // (lo animaremos ahora con Anime.js). Si está fuera, lo observamos
                // para que el observer lo anime cuando entre en pantalla.
                const rect = div.getBoundingClientRect();
                const inViewport = rect.top < (window.innerHeight || document.documentElement.clientHeight) * 0.95;
                if (!inViewport) {
                    observer.observe(div);
                }
                creados.push(div);
            });

           // Forzamos un reflow antes de iniciar la animación para asegurar
           // que el navegador haya calculado layout (evita flicker / tamaño pequeño)
           if (creados.length) {
               creados.forEach(el => el.getBoundingClientRect());

               console.debug('[proyectos] iniciando animacion por lote para', creados.length, 'elementos', {timestamp: Date.now()});

               // Ejecutar en el siguiente frame para asegurar pintura inicial
               requestAnimationFrame(() => {
                   anime({
                       targets: creados,
                       translateY: [100, 0],
                       scale: [0.8, 1],
                       opacity: [0, 1],
                       delay: anime.stagger(200),
                       duration: 1000,
                       easing: 'easeOutExpo',
                       begin: () => console.debug('[proyectos] anime.begin', {timestamp: Date.now()}),
                       complete: () => {
                           // Tras animar, aseguramos que los elementos no persistirán
                           // observadores innecesarios (ya animados)
                           creados.forEach(el => observer.unobserve(el));
                           console.debug('[proyectos] animacion completa', {timestamp: Date.now()});
                       }
                   });
               });
           }
        }
    }

// `intervalos` y `observer` se declaran arriba para que estén disponibles
// tanto en la carga inicial (`subParam`) como en los clicks de subcategoría.

  const subBtns = document.querySelectorAll('.subcategoria-btn');  
    subBtns.forEach(btn => {
    btn.addEventListener('click', async () => {
        const sub = btn.textContent.trim().toLowerCase();


        // 🔥 Animación de salida antes de limpiar
        if (proyectosFiltradosContainer.children.length > 0) {
          await anime({
            targets: '.proyecto-item',
            translateY: [0, -30],
            opacity: [1, 0],
            duration: 400,
            easing: 'easeInExpo'
           }).finished;
        }

        intervalos.forEach(id => clearInterval(id));
        intervalos = [];

        proyectosFiltradosContainer.innerHTML = '';

        const filtrados = proyectos.filter(p => p.sub.toLowerCase() === sub);

        if (filtrados.length === 0) {
            proyectosFiltradosContainer.innerHTML = `<p class="no-proyectos">No hay proyectos en esta subcategoría.</p>`;
            return;
        }

        filtrados.forEach(p => {
        const div = document.createElement('div');
        div.classList.add('proyecto-item');

        const imgEl = document.createElement('img');
        imgEl.alt = p.titulo;
        imgEl.loading = 'lazy';
        imgEl.src = p.imagenes && p.imagenes.length ? p.imagenes[0] : '';

        // Fallback simple por si ruta no existe
        imgEl.addEventListener('error', function () {
            const original = this.src;
            const filename = original.split('/').pop();
            const candidates = [
                `img/proyectocomercial/${filename}`,
                `img/proyectohabitacional/${filename}`,
                `img/${filename}`
            ];
            for (const c of candidates) {
                if (c !== original) { this.src = c; break; }
            }
        });

        const descripcion = document.createElement('div');
        descripcion.className = 'descripcion';
        descripcion.innerHTML = `<h4>${p.titulo}</h4><p>${p.descripcion}</p>`;

        // Rotación de miniaturas
        let indice = 0;
        const id = setInterval(() => {
            if (!p.imagenes || p.imagenes.length <= 1) return;
            indice = (indice + 1) % p.imagenes.length;
            imgEl.src = p.imagenes[indice];
        }, 3000);
        intervalos.push(id);

        div.appendChild(imgEl);
        div.appendChild(descripcion);

        proyectosFiltradosContainer.appendChild(div);

        observer.observe(div);

        div.addEventListener('click', () => abrirModal(p));
        });

        // Selecciona solo los proyectos recién creados
    const nuevos = proyectosFiltradosContainer.querySelectorAll('.proyecto-item');

    // 🔥 Animación escalonada con Anime.js
    anime({
    targets: nuevos,
    translateY: [100, 0],
    scale: [0.8, 1],
    opacity: [0, 1],
    delay: anime.stagger(200), // escalonado
    duration: 1000,
    easing: 'easeOutExpo'
    });
    });
    });




        // --- Modal de información ---
    const modal = document.createElement('div');
    modal.id = 'modal-proyecto';
    modal.innerHTML = `
        <div class="modal-contenido">
            <span class="close-modal">&times;</span>
            <h3 id="modal-titulo"></h3>
            <div class="modal-galeria">
                <button id="prev-img" class="nav-btn">&#10094;</button>
                <img id="modal-img" src="" alt="" style="max-width:90%; border-radius:8px;">
                <button id="next-img" class="nav-btn">&#10095;</button>
            </div>
            <p id="modal-descripcion"></p>
        </div>
    `;
    document.body.appendChild(modal);

    // Referencias a elementos del modal
    const modalTitulo = document.getElementById('modal-titulo');
    const modalImg = document.getElementById('modal-img');
    const modalDesc = document.getElementById('modal-descripcion');
    const closeModalBtn = modal.querySelector('.close-modal');
    const prevBtn = document.getElementById('prev-img');
    const nextBtn = document.getElementById('next-img');

    // Variables de control del carrusel
    let imagenesProyecto = [];
    let indiceActual = 0;

    // Función para abrir el modal
    const abrirModal = (proyecto) => {
        modalTitulo.textContent = proyecto.titulo;
        modalDesc.textContent = proyecto.descripcion;

        // Guardamos las imágenes del proyecto
        imagenesProyecto = proyecto.imagenes;
        indiceActual = 0;

        // Mostramos la primera imagen
        modalImg.src = imagenesProyecto[indiceActual];
        modalImg.alt = proyecto.titulo;

        modal.style.display = 'flex';
    };

    // Función para mostrar imagen según índice
    const mostrarImagen = (indice) => {
        modalImg.src = imagenesProyecto[indice];
        modalImg.alt = modalTitulo.textContent;
    };

    // Navegación con flechas
    prevBtn.addEventListener('click', () => {
        indiceActual = (indiceActual - 1 + imagenesProyecto.length) % imagenesProyecto.length;
        mostrarImagen(indiceActual);
    });

    nextBtn.addEventListener('click', () => {
        indiceActual = (indiceActual + 1) % imagenesProyecto.length;
        mostrarImagen(indiceActual);
    });

    // Cerrar modal
    closeModalBtn.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', e => { if (e.target === modal) modal.style.display = 'none'; });

    // Opcional: navegación con teclado
    window.addEventListener('keydown', (e) => {
        if (modal.style.display === 'flex') {
            if (e.key === 'ArrowLeft') {
                indiceActual = (indiceActual - 1 + imagenesProyecto.length) % imagenesProyecto.length;
                mostrarImagen(indiceActual);
            }
            if (e.key === 'ArrowRight') {
                indiceActual = (indiceActual + 1) % imagenesProyecto.length;
                mostrarImagen(indiceActual);
            }
            if (e.key === 'Escape') {
                modal.style.display = 'none';
            }
        }
    });


    // --- Tooltip imagen ---
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip-imagen');
    const tooltipImg = document.createElement('img');
    tooltip.appendChild(tooltipImg);
    document.body.appendChild(tooltip);

    document.addEventListener('mouseover', e => {
        const imgTarget = e.target.closest('.proyecto-item img');
        if (imgTarget) {
            tooltipImg.src = imgTarget.src;
            tooltip.style.display = 'block';
        }
    });

    document.addEventListener('mousemove', e => {
        tooltip.style.left = e.pageX + 20 + 'px';
        tooltip.style.top = e.pageY + 20 + 'px';
    });

    document.addEventListener('mouseout', e => {
        if (e.target.closest('.proyecto-item img')) {
            tooltip.style.display = 'none';
        }
    });
});
