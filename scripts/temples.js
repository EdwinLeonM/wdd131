document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("menu-toggle");
  const closeBtn = document.getElementById("menu-close");
  const navMenu = document.getElementById("nav-menu");

  toggleBtn.addEventListener("click", () => {
    navMenu.classList.add("open");
  });

  closeBtn.addEventListener("click", () => {
    navMenu.classList.remove("open");
  });

  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent =
    "Last Modified: " + document.lastModified;
});
