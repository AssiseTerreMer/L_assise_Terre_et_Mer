let slideIndex = 1;

function showSlides(n, slideType) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1; // Si on dépasse, revenir au début
  }
  if (n < 1) {
    slideIndex = slides.length; // Si on est avant le premier, aller au dernier
  }

  // Masquer toutes les diapositives
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Enlever la classe 'active' des points
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Afficher la diapositive courante
  slides[slideIndex - 1].style.display = "block";

  // Activer le point de navigation correspondant
  dots[slideIndex - 1].className += " active";
}

// Fonction pour avancer ou reculer les diapositives
function plusSlides(n, slideType) {
  showSlides(slideIndex += n, slideType);
}

// Fonction pour aller à la diapositive spécifique
function currentSlide(n, slideType) {
  showSlides(slideIndex = n, slideType);
}

// Initialisation de la première diapositive
showSlides(slideIndex);

// Affichage automatique des diapositives toutes les 5 secondes
setInterval(function() {
  plusSlides(1, 2);
}, 5000);








const header = document.querySelector('header');

function handleScroll() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', handleScroll);
