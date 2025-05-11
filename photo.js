let slideIndices = [1, 1, 1, 1]; // Une entrée par carrousel

// Affiche les premières diapositives de chaque carrousel au chargement
window.addEventListener("DOMContentLoaded", () => {
  showSlides(1, 1);
  showSlides(1, 2);
  showSlides(1, 3);
  showSlides(1, 4);
});

function plusSlides(n, no) {
  showSlides(slideIndices[no - 1] += n, no);
}

function currentSlide(n, no) {
  showSlides(slideIndices[no - 1] = n, no);
}

function showSlides(n, no) {
  let i;
  let slides = document.getElementsByClassName("mySlides" + no);
  let dots = document.getElementsByClassName("dot" + no);
  if (n > slides.length) {
    slideIndices[no - 1] = 1;
  }
  if (n < 1) {
    slideIndices[no - 1] = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndices[no - 1] - 1].style.display = "block";
  if (dots.length > 0) {
    dots[slideIndices[no - 1] - 1].className += " active";
  }
}



const header = document.querySelector('header');

function handleScroll() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', handleScroll);


