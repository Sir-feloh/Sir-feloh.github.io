// ==============================
// ANIMATED TYPING EFFECT
// ==============================

const typingText = document.getElementById("typing-text");

const words = [
    "Cybersecurity.",
    "Web Development.",
    "Computer Networking.",
    "Software Development."
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex = (wordIndex + 1) % words.length;

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 110);
}

if (typingText) {
    typeEffect();
}


// ==============================
// MOBILE NAVIGATION MENU
// ==============================

const menuToggle = document.getElementById("menu-toggle");

const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuToggle.textContent = isOpen ? "✕" : "☰";

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

    });


    // Close menu after clicking a navigation link

    navLinks.querySelectorAll("a").forEach(function(link) {

        link.addEventListener("click", function() {

            navLinks.classList.remove("active");

            menuToggle.textContent = "☰";

            menuToggle.setAttribute("aria-expanded", "false");

        });

    });

}


// ==============================
// SMOOTH SCROLLING
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(function(link) {

    link.addEventListener("click", function(event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});