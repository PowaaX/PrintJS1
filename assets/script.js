const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
// Définir l'index du slide actuel à 0 (démarrage à la première image)
let currentSlideIndex = 0;

function showSlide(index) {
    adjustSlideIndexAndUpdateDots(index);
    updateDomElements(currentSlideIndex);
}

function adjustSlideIndexAndUpdateDots(index) {
    const dots = document.querySelectorAll(".dot");
    
    // Supprimer la classe "dot_selected" de l'index actuel
    dots[currentSlideIndex].classList.remove("dot_selected");

    // Ajuster l'index
    if (index >= slides.length) {
        currentSlideIndex = 0; 
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1; 
    } else {
        currentSlideIndex = index;
    }

    // Mettre à jour la classe "dot_selected" pour le nouvel index
    dots[currentSlideIndex].classList.add("dot_selected");
}

function updateDomElements(index) {
    const bannerImage = document.querySelector(".banner-img");
    const bannerTagline = document.querySelector("#banner > p");
    
    // Mettre à jour l'image et le texte du slide en fonction de l'index
    bannerImage.src = slides[index].image;
    bannerTagline.innerHTML = slides[index].tagLine;
}

function ArrowEventListeners() {
    // Ajouter un écouteur d'événements à la flèche gauche pour aller au slide précédent
    document.querySelector(".arrow_left").addEventListener("click", function() {
        showSlide(currentSlideIndex - 1);
    });

    // Ajouter un écouteur d'événements à la flèche droite pour aller au slide suivant
    document.querySelector(".arrow_right").addEventListener("click", function() {
        showSlide(currentSlideIndex + 1);
    });
}


function createDots() {
    const dotsContainer = document.querySelector(".dots");

    for(let i = 0; i < slides.length; i++) {
        const dot = document.createElement("span"); // Créer un élément <span>
        dot.className = "dot"; // Attribuer la classe "dot" au span

        // Si c'est le premier slide, le dot est sélectionné par défaut
        if(i === 0) {
            dot.classList.add("dot_selected");
        }

        // Ajouter un écouteur d'événements au dot pour afficher le slide correspondant lorsqu'il est cliqué
        dot.addEventListener("click", function() {
            showSlide(i);
        });
        
        // Ajouter le dot à la div des dots
        dotsContainer.appendChild(dot);
    }
}


// Afficher le premier slide lors du chargement du script
ArrowEventListeners();
createDots();
showSlide(currentSlideIndex);