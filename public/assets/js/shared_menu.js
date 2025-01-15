fetch("menu.html")
  .then((response) => response.text())
  .then((data) => (document.querySelector(".header").innerHTML = data))
  .catch((error) => console.error("Error loading menu:", error));
