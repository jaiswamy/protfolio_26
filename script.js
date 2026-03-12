// Smooth scrolling effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple fade-in animation
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (position < screenPosition) {
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
        }
    });
});

window.addEventListener("load", function () {
    const intro = document.getElementById("intro");

    setTimeout(() => {
        intro.style.opacity = "0";
        intro.style.transition = "opacity 0.8s";

        setTimeout(() => {
            intro.style.display = "none";
        }, 800);

    }, 2000); // duration of intro
});