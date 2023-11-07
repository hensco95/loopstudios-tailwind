let btn = document.querySelector("#menu-btn");

let menu = document.getElementById("menu");

btn.addEventListener("click", navToggle);

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.add("flex");
  menu.classList.toggle("hidden");
}
