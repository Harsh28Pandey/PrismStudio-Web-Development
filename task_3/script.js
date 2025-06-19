// Hamburger
document.getElementById("hamburger").addEventListener("click", () => {
    document.getElementById("navLinks").classList.toggle("show");
});

// Theme Toggle
document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const icon = document.getElementById("themeToggle");
    icon.textContent = icon.textContent === "🌙" ? "☀️" : "🌙";
});

// FAQ Accordion
document.querySelectorAll(".question").forEach(item => {
    item.addEventListener("click", () => {
        const answer = item.nextElementSibling;
        const symbol = item.querySelector("span");
        const isVisible = answer.style.display === "block";
        answer.style.display = isVisible ? "none" : "block";
        symbol.textContent = isVisible ? "+" : "−";
    });
});

// Back to Top
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});
backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
