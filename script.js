// ==============================
// MODU/TABLE Website
// Phase 1 JavaScript
// ==============================

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Header shadow on scroll
const header = document.querySelector('header');

window.addEventListener('scroll', () => {

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 8px 24px rgba(0,0,0,.15)";
    } else {
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,.08)";
    }

});

// Fade-in animation
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll("section, .card, .collection").forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});

console.log("MODU/TABLE Website Loaded");