const BURGER = document.querySelector(".burger");
const NAV = document.querySelector("nav");
const HEADER = document.querySelector(".header");

BURGER.addEventListener("click", () => {
    BURGER.classList.toggle("active");
    NAV.classList.toggle("active");
    HEADER.classList.toggle("active");
})


document.querySelectorAll(".link").forEach(n => n.addEventListener("click", () => {
    BURGER.classList.remove("active");
    NAV.classList.remove("active");
    HEADER.classList.remove("active");
}))