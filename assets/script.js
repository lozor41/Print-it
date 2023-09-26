const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const left = document.querySelector('.arrow_left')
const right = document.querySelector('arrow_right')
const imgBanner = document.querySelector('nameBanner')
const nameBanner = document.querySelector('.tagLine')
const dots = document.querySelector('.dots')

let numberSlide = slides.length -1;
let srcImage = "./assets/images/slideshow/";
let numberDot = 0;

const dotsList = document.querySelectorAll(".dots")

console.log(numberSlide)

for (let pas = 0; pas <= numberSlide; pas++) {
    dots.innerHTML +=
      '<span id="dot' +
      pas +
      '" class="dot" title="Image ' +
      (pas + 1) +
      '"></span>';
  }

const addSelected = () => {
    for (let pas = 0; pas <= numberSlide; pas++) {
      if (pas === numberDot) {
        dotsList[pas].classList.add("dot_selected");
      } else {
        dotsList[pas].classList.remove("dot_selected");
      }
    }
  };

for(const slide of slides)
console.log(slide)


const slide = {
	prop: slides,
	func:function() {
		return this.prop;
	},
};

console.log(slide.func())


left.addEventListener("click", () => {
    if (numberDot <= 0) {
      numberDot = numberSlide;
    } else {
      numberDot--;
    }
  });