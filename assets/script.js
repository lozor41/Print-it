const slides = [
  {
    "image": "slide1.jpg",
    "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
  },
  {
    "image": "slide2.jpg",
    "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
  },
  {
    "image": "slide3.jpg",
    "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
  },
  {
    "image": "slide4.png",
    "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
  }
]

const left = document.querySelector('.arrow_left')
const right = document.querySelector('.arrow_right')
const imgBanner = document.querySelector('.banner-img')
const nameBanner = document.querySelector('name-banner')
const dots = document.querySelector('.dots')

let numberDot = 0;

const updateSlide = () => {
  // Supprimer tout le contenu du container .dots
  dots.innerHTML = ''

  for (let pas = 0; pas < slides.length; pas++) {
    const dot = document.createElement('span')

    // if (pas === numberDot) {
    //   dot.setAttribute('class', 'dot dot_selected')
    // } else {
    //   dot.setAttribute('class', 'dot')
    // }
    dot.setAttribute('class', pas === numberDot ? 'dot dot_selected' : 'dot')

    dots.appendChild(dot)
    
    // TODO mettre à jour l'image en fonction de la position de numberDot

    // TODO mettre à jour le tagLine en fonction de la position de numberDot

  }
}

updateSlide()

// for (const slide of slides) {
//   console.log(slide)
// }

function changeSlide(sens) {
  document.getElementById("slide").src="./assets/images/slideshow/"+slides[numberDot].image
  document.getElementById("tag").innerHTML=slides[numberDot].tagLine
}

left.addEventListener("click", () => {
  if (numberDot <= 0) {
    numberDot = slides.length - 1;
  } else {
    numberDot--;
  }

  updateSlide()
  console.log('click gauche:', numberDot)
  changeSlide()
});

right.addEventListener("click", () => {
  if (numberDot >= slides.length - 1) {
    numberDot = 0;
  } else {
    numberDot++;
  }

  updateSlide()
  console.log('click droite:', numberDot)
  changeSlide()
});