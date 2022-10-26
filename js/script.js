// Riprendiamo l’esercizio carosello e rifacciamolo, questa volta usando un array di oggetti.
// Ogni elemento deve avere un titolo, una descrizione e il riferimento ad una immagine.
// Le immagini devono essere 5 e nella grafica devono essere presenti:
// - immagine in evidenza
// - thumbnail di tutte le immagine con in evidenza l’immagine attiva
// - bottone avanti e indietro
// Lo screenshot allegato è solo dimostrativo ma cercate di mettere le thumb in basso e non laterlamente
// **Bonus 1:**
// Sperimentiamo attraverso l’uso delle timing functions anche una funzionalità di scorrimento al nostro carosello:al click di un bottone o già dall’inizio possiamo far partire, ad intervalli di tempo a piacere, lo scorrimento delle immagini disponibili nel carosello stesso.
// ****
// **Bonus 2:**
// E se volessi un bottone per invertire la “direzione” del carosello?
// ****

const sliderCont = document.querySelector('.slider');
const topSlider = document.querySelector('.top');
const bottomSlider = document.querySelector('.bottom');
const btnNext = document.querySelector('.right');
const btnPrev = document.querySelector('.left');
const btnBottomStop = document.querySelector('.stop');
const btnBottomPlay = document.querySelector('.play');
const btnBottomRewind = document.querySelector('.rewind');
const btnBottomFast = document.querySelector('.fast');

let topImages = '';
let bottomImages = '';
let counterImages = 0;
let clock;


const sliders = [
  {
    title: "Cusco",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, sunt.",
    photo: "/img/1.jpg"
  },
  {
    title: "Salinas",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, sunt.",
    photo: "/img/2.jpg"
  },
  {
    title: "Selva",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, sunt.",
    photo: "/img/3.jpg"
  },
  {
    title: "Pucalpa",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, sunt.",
    photo: "/img/4.jpg"
  },
  {
    title: "Mercado Central",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, sunt.",
    photo: "/img/5.jpg"
  }
];



sliders.forEach(slide => {
  let topImages = `
  <div class="item rel">
    <h2>${slide.title}</h2>
    <p>${slide.description}</p>
    <img src="${slide.photo}" alt="${slide.title}">
  <div>
  `;

  topSlider.innerHTML += topImages;

  let bottomImages = `
    <img class="small" src="${slide.photo}" alt="${slide.title}"> 
  `;

  bottomSlider.innerHTML += bottomImages;
})


//creo una collection di items e thumbs e gli aggiungo a tutti una classe active
const items = document.getElementsByClassName('item');
const thumbs = document.getElementsByClassName('small')

items[counterImages].classList.add('active');
thumbs[counterImages].classList.add('active');

//prendo i miei bottoni 

btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);
btnBottomStop.addEventListener('click', pauseCounter);
btnBottomPlay.addEventListener('click', playCounter);
btnBottomRewind.addEventListener('click', rewindCounter);
btnBottomFast.addEventListener('click', fastCounter);

console.log(btnBottomFast)

//set interval

clock = setInterval(nextSlide, 1000);

function pauseCounter() {
  clearInterval(clock);
}

function playCounter() {
  clock = setInterval(nextSlide, 1000);
}

function fastCounter() {
  clock = setInterval(nextSlide, 200);
}


function rewindCounter() {
  clock = setInterval(prevSlide, 800);
}

//le mie funzioni next e prev

function nextSlide() {
  //rimuovo la classe active e poi la rimetto per poter andare in avanti
  items[counterImages].classList.remove('active');
  thumbs[counterImages].classList.remove('active');
  counterImages++
  if(counterImages === sliders.length) counterImages = 0;
  items[counterImages].classList.add('active');
  thumbs[counterImages].classList.add('active');
}


function prevSlide() {
   //rimuovo la classe active e poi la rimetto per poter andare tornare indietro 
 items[counterImages].classList.remove('active'); 
 thumbs[counterImages].classList.remove('active');
 counterImages--
 if(counterImages < 0 ) counterImages = sliders.length - 1;
 items[counterImages].classList.add('active');
 thumbs[counterImages].classList.add('active');
}