const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", ()=>{
    navbar.classList.toggle("menu-open");
    menuBtn.classList.toggle("open");
});
