// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Menú responsivo
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            menu.classList.toggle('active');
            menuToggle.querySelector('i').classList.toggle('fa-bars');
            menuToggle.querySelector('i').classList.toggle('fa-times');
        });
    }
    
    // Cerrar menú al hacer clic en un enlace
    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menu.classList.remove('active');
            menuToggle.querySelector('i').classList.add('fa-bars');
            menuToggle.querySelector('i').classList.remove('fa-times');
        });
    });
    
    // Contador de tiempo restante
    const countdownDate = new Date('April 20, 2025 07:00:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countdownDate - now;
        
        // Cálculos de tiempo
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Actualizar elementos del DOM
        document.getElementById('days').innerText = days < 10 ? '0' + days : days;
        document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
        document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;
        
        // Si la cuenta regresiva termina
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById('days').innerText = '00';
            document.getElementById('hours').innerText = '00';
            document.getElementById('minutes').innerText = '00';
            document.getElementById('seconds').innerText = '00';
        }
    }
    
    // Actualizar el contador cada segundo
    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
    
    // Preguntas frecuentes
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Cerrar todas las preguntas abiertas
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Alternar la pregunta actual
            item.classList.toggle('active');
        });
    });
    
    // Botón volver arriba
    const backToTopButton = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    });
    
    backToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Formulario de contacto
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aquí iría la lógica para enviar el formulario
            alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
            contactForm.reset();
        });
    }
    
    // Formulario de newsletter
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aquí iría la lógica para suscribir al newsletter
            alert('¡Gracias por suscribirte a nuestro newsletter!');
            newsletterForm.reset();
        });
    }
    
    // Animaciones al hacer scroll
    const animatedElements = document.querySelectorAll('[data-aos]');
    
    function checkScroll() {
        animatedElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                el.classList.add('aos-animate');
            } else {
                el.classList.remove('aos-animate');
            }
        });
    }
    
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Verificar elementos visibles al cargar la página
    
    // Navegación suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    track.innerHTML += track.innerHTML; // Duplica los logos para efecto continuo
});
document.addEventListener("DOMContentLoaded", function () {
    const text = "ORGANIZADO POR LA LIGA DEL MAGDALENA";
    const typewriterElement = document.getElementById("typewriter");

    if (!typewriterElement) return; // Si no encuentra el elemento, no ejecuta nada.

    function typeWriterEffect() {
        typewriterElement.textContent = ""; // Limpia el texto antes de empezar
        typewriterElement.style.borderRight = "3px solid white"; // Reactiva el cursor
        
        let index = 0;

        function writeLetter() {
            if (index < text.length) {
                typewriterElement.textContent += text[index];
                index++;
                setTimeout(writeLetter, 110); // Ajusta la velocidad aquí
            } else {
                typewriterElement.style.borderRight = "none"; // Elimina el cursor al finalizar
                setTimeout(typeWriterEffect, 2000); // Espera 2 segundos antes de repetir
            }
        }

        writeLetter();
    }

    typeWriterEffect(); // Inicia la animación
});

