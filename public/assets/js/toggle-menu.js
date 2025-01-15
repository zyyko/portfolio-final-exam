document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar");

    console.log(menuIcon, navbar);

    menuIcon.onclick = () => {
      menuIcon.classList.toggle("bx-x");
      navbar.classList.toggle("active");
    };
  }, 1000);
});
