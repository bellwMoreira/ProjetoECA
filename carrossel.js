const slides = document.querySelectorAll(".slide");
const btnEsquerda = document.querySelector(".seta.esquerda");
const btnDireita = document.querySelector(".seta.direita");
let slideAtual = 0;

function mostrarSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("ativo", i === index);
  });
}

btnEsquerda.addEventListener("click", () => {
  slideAtual = (slideAtual - 1 + slides.length) % slides.length;
  mostrarSlide(slideAtual);
});

btnDireita.addEventListener("click", () => {
  slideAtual = (slideAtual + 1) % slides.length;
  mostrarSlide(slideAtual);
});

setInterval(() => {
  slideAtual = (slideAtual + 1) % slides.length;
  mostrarSlide(slideAtual);
}, 5000);


mostrarSlide(slideAtual);