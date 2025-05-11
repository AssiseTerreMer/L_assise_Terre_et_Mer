let slideIndices = [1, 1, 1, 1, 1]; // Une entrée par carrousel

// Affiche les premières diapositives de chaque carrousel au chargement
window.addEventListener("DOMContentLoaded", () => {
  for (let i = 1; i <= 5; i++) {
    showSlides(1, i);
  }
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
  
  // Réinitialise les indices si le nombre de diapositives dépasse ou est inférieur à la limite
  if (n > slides.length) {
    slideIndices[no - 1] = 1;
  }
  if (n < 1) {
    slideIndices[no - 1] = slides.length;
  }
  
  // Masque toutes les diapositives
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Supprime la classe 'active' des points
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Affiche la diapositive sélectionnée
  slides[slideIndices[no - 1] - 1].style.display = "block";
  
  // Ajoute la classe 'active' au point correspondant
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


