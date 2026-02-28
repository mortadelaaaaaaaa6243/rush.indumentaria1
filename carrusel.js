let index = 0;
const slides = document.querySelectorAll(".slides img");

setInterval(() => {
    slides[index].classList.remove("activo");
    index = (index + 1) % slides.length;
    slides[index].classList.add("activo");
}, 3000);