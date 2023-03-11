let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".menu");

console.log(hamburger);




document.addEventListener("click", (event) => {

    let target = event.target;

    if (!target.closest(".hamburger")) return;

    hamburger.classList.toggle("hamburger_active");
    menu.classList.toggle("menu_active");

})