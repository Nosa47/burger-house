// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Array of animation classes
const animationClasses = [
  ".animation-hero-1",
  ".animation-hero-2",
  ".animation-hero-3",
  ".animation-hero-4",
  ".animation-hero-5"
];

// Loop through each class and apply the animation
animationClasses.forEach(selector => {
  gsap.fromTo(
    selector,
    {
      y: -50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "expo.inOut",
      scrollTrigger: {
        trigger: selector,
        start: "top 80%", // triggers when element is 80% from top of viewport
      }
    }
  );
});

// ================= NAVIGATION MENU =================
document.addEventListener("DOMContentLoaded", function () {
  // Mobile navigation toggle
  const mobileMenuButton = document.querySelector(".md\\:hidden button");
  const mobileMenu = document.createElement("div");
  mobileMenu.className =
    "mobile-menu fixed inset-0 bg-white z-50 transform translate-x-full transition-transform duration-300 ease-in-out";
  mobileMenu.innerHTML = `
    <div class="flex justify-between items-center p-6 border-b">
      <a href="#" class="font-['Pacifico'] text-2xl text-primary">Burger House</a>
      <button class="close-menu text-primary hover:text-primary focus:outline-none w-8 h-8 flex items-center justify-center">
        <i class="ri-close-line ri-lg"></i>
      </button>
    </div>
    <div class="p-6">
      <ul class="space-y-4">
        <li><a href="#home" class="text-gray-700 hover:text-primary font-medium block py-2">Home</a></li>
        <li><a href="#menu" class="text-gray-700 hover:text-primary font-medium block py-2">Menu</a></li>
        <li><a href="#about" class="text-gray-700 hover:text-primary font-medium block py-2">About</a></li>
        <li><a href="#location" class="text-gray-700 hover:text-primary font-medium block py-2">Location</a></li>
        <li><a href="#contact" class="text-gray-700 hover:text-primary font-medium block py-2">Contact</a></li>
        <li><button class="bg-primary text-white px-6 py-2 !rounded-button font-medium hover:bg-opacity-90 transition duration-300 whitespace-nowrap w-full mt-4">Order Online</button></li>
      </ul>
    </div>
  `;
  document.body.appendChild(mobileMenu);

  mobileMenuButton?.addEventListener("click", function () {
    mobileMenu.classList.remove("translate-x-full");
  });

  mobileMenu.querySelector(".close-menu")?.addEventListener("click", function () {
    mobileMenu.classList.add("translate-x-full");
  });

  const mobileMenuLinks = mobileMenu.querySelectorAll("a");
  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileMenu.classList.add("translate-x-full");
    });
  });
});

// ================= SMOOTH SCROLL =================
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const navHeight = document.querySelector("nav")?.offsetHeight || 0;
        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset -
          navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });
      }
    });
  });
});

// ================= MENU TABS =================
document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".inline-flex.bg-gray-100 button");

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      tabButtons.forEach((btn) => {
        btn.classList.remove("bg-primary", "text-white");
        btn.classList.add("text-gray-700", "hover:bg-gray-200");
      });

      this.classList.add("bg-primary", "text-white");
      this.classList.remove("text-gray-700", "hover:bg-gray-200");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const hero = document.querySelector(".hero-section");

  if (!hero) return;

  // Use data attributes for mobile/desktop background image
  const isMobile = window.innerWidth <= 768;
  const imageUrl = isMobile
    ? hero.getAttribute("data-bg-mobile")
    : hero.getAttribute("data-bg");

  if (imageUrl) {
    const bgImage = new Image();
    bgImage.src = imageUrl;

    bgImage.onload = () => {
      hero.style.backgroundImage = `
        linear-gradient(
          to ${isMobile ? "top" : "right"},
          rgba(0, 0, 0, 0.7) 0%,
          rgba(0, 0, 0, 0.5) ${isMobile ? "50%" : "40%"},
          rgba(0, 0, 0, 0) 100%
        ),
        url('${imageUrl}')
      `;
      hero.style.backgroundSize = "cover";
      hero.style.backgroundPosition = "center";
    };
  }
});
