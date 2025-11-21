// Cleaned & Enhanced script.js

// Page Loader
window.addEventListener("load", () => {
  const loader = document.getElementById("page-loader");
  loader.style.opacity = "0";
  setTimeout(() => (loader.style.display = "none"), 500);
});

// Mobile Menu
const toggle = document.getElementById("mobile-menu-toggle");
const mobileNav = document.getElementById("mobile-nav");

toggle.addEventListener("click", () => {
  mobileNav.style.display = mobileNav.style.display === "block" ? "none" : "block";
});

mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => (mobileNav.style.display = "none"));
});

// Owl Carousel
$(document).ready(() => {
  $("#projects-carousel").owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      992: { items: 3 }
    },
  });
});
