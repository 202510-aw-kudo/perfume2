const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".navlinks a");
const navCta = document.querySelector(".nav-cta");
const faqButtons = document.querySelectorAll(".faq-question");

if (navToggle && header) {
    navToggle.addEventListener("click", () => {
        const isOpen = header.classList.toggle("nav-open");
        navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            header.classList.remove("nav-open");
            navToggle.setAttribute("aria-expanded", "false");
        });
    });

    if (navCta) {
        navCta.addEventListener("click", () => {
            header.classList.remove("nav-open");
            navToggle.setAttribute("aria-expanded", "false");
        });
    }
}

faqButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const item = button.closest(".faq-item");
        const isOpen = item.classList.toggle("active");
        button.setAttribute("aria-expanded", String(isOpen));
    });
});
