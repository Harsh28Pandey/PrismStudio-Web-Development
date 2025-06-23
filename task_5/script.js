// Scroll-triggered animations
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-up');

const appearOptions = { threshold: 0.3, rootMargin: "0px 0px -50px 0px" };

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(el => appearOnScroll.observe(el));
sliders.forEach(el => appearOnScroll.observe(el));

// Modal logic
function openModal() {
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}
