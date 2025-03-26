document.addEventListener("DOMContentLoaded", function () {
  // Get hamburger button and mobile menu items
  const toggleButton = document.querySelector(".navbar__mobile-menu-toggle");
  const mobileMenu = document.querySelector(".navbar__mobile-menu-items");

  // Add click event listener to toggle menu visibility
  toggleButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });

  // === Video modal functionality ===
  const modal = document.getElementById("videoModal");
  const videoButton = document.querySelector(".preview__video-button");
  const closeButton = document.querySelector(".modal__close-button");

  // Open the modal when the button is clicked
  videoButton.addEventListener("click", function () {
    modal.style.display = "block";

    document.getElementById("videoPlayer").src =
      "https://www.youtube.com/embed/8sXRyHI3bLw'";
  });

  // Close the modal when the button is clicked
  closeButton.addEventListener("click", function () {
    modal.style.display = "none";

    // Pause the video when the modal is closed
    document.getElementById("videoPlayer").src = "";
  });

  // Close the modal when clicking outside of it
  window.addEventListener("click", function (e) {
    if (e.target == modal) {
      modal.style.display = "none";

      // Pause the video when the modal is closed
      document.getElementById("videoPlayer").src = "";
    }
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
