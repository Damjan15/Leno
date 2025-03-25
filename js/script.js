document.addEventListener("DOMContentLoaded", function () {
  // Get hamburger button and mobile menu items
  const toggleButton = document.querySelector(".navbar__mobile-menu-toggle");
  const mobileMenu = document.querySelector(".navbar__mobile-menu-items");

  // Add click event listener to toggle menu visibility
  toggleButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });
});

window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");

  if (window.scrollY > 0) {
    navbar.classList.add("navbar--scroll");
  } else {
    navbar.classList.remove("navbar--scroll");
  }
});
