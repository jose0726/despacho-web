document.addEventListener('DOMContentLoaded', () => {
    const precargador = document.getElementById('preloader');
    if (precargador) {
        document.body.classList.add('preloader-active');
        const duracionMinima = parseInt(document.body.dataset.preloaderTime) || 1500;
        const tiempoInicio = new Date().getTime();

        window.addEventListener('load', () => {
            const tiempoCarga = new Date().getTime() - tiempoInicio;
            const retraso = tiempoCarga < duracionMinima ? duracionMinima - tiempoCarga : 0;

            setTimeout(() => {
                precargador.classList.add('hidden');
                document.body.classList.remove('preloader-active');
            }, retraso);
        });
    }

    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) entrada.target.classList.add('is-visible');
        });
    }, { threshold: 0.1 });

    const elementosParaAnimar = document.querySelectorAll('.animate-on-scroll');
    elementosParaAnimar.forEach(elemento => observador.observe(elemento));

    const formularioContacto = document.getElementById('formulario-contacto');
    const mensajeConfirmacion = document.getElementById('mensaje-confirmacion');
    if (formularioContacto) {
        formularioContacto.addEventListener('submit', function(evento) {
            evento.preventDefault();
            if (mensajeConfirmacion) {
                mensajeConfirmacion.textContent = "¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.";
                mensajeConfirmacion.style.color = '#27ae60';
                mensajeConfirmacion.style.display = 'block';
            }
            formularioContacto.reset();
        });
    }

    const modal = document.getElementById("imageModal");
    if (modal) {
        const imagenModal = document.getElementById("modalImage");
        const botonCerrar = document.querySelector(".close-modal");

        const cerrarModal = () => modal.style.display = "none";

        document.querySelectorAll('.proyecto-card img, .highlight-img-container img').forEach(imagen => {
            imagen.addEventListener('click', () => {
                modal.style.display = "flex";
                imagenModal.src = imagen.src;
                imagenModal.alt = imagen.alt;
            });

            imagen.addEventListener('mouseenter', () => imagen.style.transform = 'scale(1.05)');
            imagen.addEventListener('mouseleave', () => imagen.style.transform = 'scale(1)');
        });

        if (botonCerrar) botonCerrar.addEventListener('click', cerrarModal);
        window.addEventListener('click', (evento) => { if (evento.target === modal) cerrarModal(); });
        window.addEventListener('keydown', (evento) => { if (evento.key === 'Escape' && modal.style.display === "flex") cerrarModal(); });
    }
});
