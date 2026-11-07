
// Mobile Navigation

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close Menu After Clicking a Link

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// Scroll Reveal Animation

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(
    ".section-title, .about-text, .education-card, .skill-card, .project-card"
).forEach(element => {

    element.classList.add("reveal");
    observer.observe(element);

});

// 3D Mouse Movement

const profileCard = document.querySelector(".profile-card");
const heroVisual = document.querySelector(".hero-visual");

if (window.matchMedia("(hover: hover)").matches) {

    heroVisual.addEventListener("mousemove", (e) => {

        const rect = heroVisual.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 25;
        const rotateY = (centerX - x) / 25;

        profileCard.style.animation = "none";

        profileCard.style.transform =
            `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    });

    heroVisual.addEventListener("mouseleave", () => {

        profileCard.style.transform = "";

        profileCard.style.animation =
            "floating 4s ease-in-out infinite";

    });

}

// Footer Year

const footer = document.querySelector("footer");

footer.querySelector("p").textContent =
    `© ${new Date().getFullYear()} Esraa Magdy. All Rights Reserved.`;
