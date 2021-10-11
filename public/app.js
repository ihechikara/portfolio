ScrollOut({
  threshold: .2,
})

const btn = document.getElementById("btn-menu");
const menu = document.getElementById("menu");
const links = document.querySelectorAll('.nav-links')

btn.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});

for (var i = 0; i < links.length; i++) {
  
    links[i].addEventListener("click", () => {
      menu.classList.add("hidden");
    });

}


let currentYear = new Date().getFullYear();

document.getElementById("year").textContent = currentYear;

