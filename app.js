document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for CTA
    const scrollCta = document.querySelector('.cta-scroll');
    const benefitsSection = document.querySelector('#benefits');

    if (scrollCta && benefitsSection) {
        scrollCta.addEventListener('click', () => {
            benefitsSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Scroll reveal animation
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.benefit-card, .step');
    revealElements.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
});

// Add these styles dynamically for reveal effect
const style = document.createElement('style');
style.textContent = `
    .reveal {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s ease-out;
    }
    .reveal.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);
