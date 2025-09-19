document.addEventListener('DOMContentLoaded', () => {

    // --- 1. THEME TOGGLER ---
    const themeToggler = document.getElementById('checkbox');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.body.classList.add(currentTheme);
        if (currentTheme === 'light-mode') {
            themeToggler.checked = true;
        }
    } else {
        document.body.classList.add('dark-mode'); // Default
    }

    themeToggler.addEventListener('change', () => {
        if (themeToggler.checked) {
            document.body.classList.replace('dark-mode', 'light-mode');
            localStorage.setItem('theme', 'light-mode');
        } else {
            document.body.classList.replace('light-mode', 'dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        }
    });

    // --- 2. PARTICLE.JS BACKGROUND ---
    particlesJS("particles-js", {
        "particles": { "number": { "value": 80, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#ffffff" }, "shape": { "type": "circle" }, "opacity": { "value": 0.5, "random": false }, "size": { "value": 3, "random": true }, "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 6, "direction": "none", "out_mode": "out" } },
        "interactivity": { "events": { "onhover": { "enable": true, "mode": "repulse" } } },
        "retina_detect": true
    });


    // --- 3. ANIMATE ON SCROLL ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));


    // --- 4. CUSTOM CURSOR ---
    const cursor = document.querySelector('.custom-cursor');
    window.addEventListener('mousemove', e => {
        cursor.style.top = e.pageY + 'px';
        cursor.style.left = e.pageX + 'px';
    });


    // --- 5. MOBILE NAVIGATION ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        hamburger.classList.toggle('toggle');
    });


    // --- 6. TESTIMONIAL SLIDER ---
    const slides = document.querySelectorAll('.testimonial-slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    if (slides.length > 0) {
        showSlide(0);
        setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }


    // --- 7. FAQ ACCORDION ---
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            // Close all other items
            faqItems.forEach(i => {
                i.classList.remove('active');
                i.querySelector('.faq-answer').style.maxHeight = null;
            });
            // Open the clicked item if it wasn't already open
            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });

});
