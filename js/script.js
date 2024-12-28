
document.addEventListener("DOMContentLoaded", function () {
    // Stat Item Animation
    const statItems = document.querySelectorAll(".stat-item");
    const statsContainer = document.querySelector(".stats-container");
    let animationTriggered = false;

    if (statsContainer) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !animationTriggered) {
                    statItems.forEach((item, index) => {
                        setTimeout(() => item.classList.add("animate"), index * 150);
                    });
                    animationTriggered = true;
                }
            });
        }, { threshold: 0.3 });

        statsObserver.observe(statsContainer);
    }

    // Scroll Section Visibility
    const scrollSection = document.getElementById("scrollSection");

    window.addEventListener("scroll", () => {
        if (scrollSection) {
            const sectionPosition = scrollSection.getBoundingClientRect().top;
            const viewportHeight = window.innerHeight;
            if (sectionPosition < viewportHeight * 0.7) {
                scrollSection.classList.add("visible");
            }
        }
    });

    // Service Card Slide-In Animation
    const servicesSection = document.querySelector(".services-section");
    const serviceCards = document.querySelectorAll(".service-card");

    if (servicesSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    servicesSection.classList.add("visible");

                    serviceCards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add("slide-in");
                        }, index * 150);
                    });

                    observer.unobserve(servicesSection);
                }
            });
        }, { threshold: 0.3 });

        observer.observe(servicesSection);
    }

    // Factor Section Animation
    const factorSection = document.querySelector(".factor");
    if (factorSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    factorSection.classList.add("visible");
                    observer.unobserve(factorSection);
                }
            });
        }, { threshold: 0.3 });

        observer.observe(factorSection);
    }

    // Partners Carousel Cloning for Seamless Loop
    const carouselInner = document.querySelector(".carousel-inner");
    if (carouselInner) {
        const partnerCards = Array.from(carouselInner.children);
        const cloneCount = 2;

        for (let i = 0; i < cloneCount; i++) {
            partnerCards.forEach((card) => {
                carouselInner.appendChild(card.cloneNode(true));
            });
        }
    }

    // Hamburger Menu Toggle
    const hamburgerButton = document.getElementById("hamburger-button");
    const menuItems = document.getElementById("menu-items");

    if (hamburgerButton && menuItems) {
        hamburgerButton.addEventListener("click", () => {
            menuItems.classList.toggle("show");
        });
    }

    // Submenu Toggle
    const menuItemsWithSubmenu = document.querySelectorAll(".menu-li .has-submenu > a");

    menuItemsWithSubmenu.forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();

            const submenu = item.nextElementSibling;
            submenu.style.display = submenu.style.display === "block" ? "none" : "block";
        });

        const submenu = item.nextElementSibling;
        submenu.addEventListener("mouseleave", () => {
            submenu.style.display = "none";
        });
    });
});

// Utility: Check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Trigger section visibility on scroll
window.addEventListener("scroll", () => {
    const section = document.getElementById("scrollSection");
    if (section && isInViewport(section)) {
        section.classList.add("visible");
    }
});

