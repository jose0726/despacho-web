window.onload = function() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.classList.add('hidden');
    }
};

document.addEventListener('DOMContentLoaded', function() {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        
        threshold: 0.1
    });

    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

    const contactForm = document.getElementById('formulario-contacto');
    if(contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
           
            console.log("Formulario enviado (simulación).");
        });
    }
});
