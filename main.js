const menuIcon = document.querySelector(".menu-icon");
const mobileMenu = document.querySelector(".mobile-menu");

menuIcon.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});
