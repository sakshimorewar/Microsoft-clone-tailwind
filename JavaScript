const slides = document.querySelectorAll(".slide");
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("hidden", i !== index);
  });
}

document.getElementById("next").addEventListener("click", () => {
  current = (current + 1) % slides.length;
  showSlide(current);
});

document.getElementById("prev").addEventListener("click", () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
});

setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 3000);

 document.querySelector('.back-to-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
showSlide(current);
