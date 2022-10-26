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
const btnRight = document.querySelector('.right');
const brnLeft = document.querySelector('.left');


let counterImages = 0;


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
  <div class="rel">
    <h2>${slide.title}</h2>
    <p>${slide.description}</p>
    <img src="${slide.photo}" alt="${slide.title}">
  <div>
  `;

  topSlider.innerHTML += topImages;

  let bottomImages = `
    <img src="${slide.photo}" alt="${slide.title}"> 
  `;

  bottomSlider.innerHTML += bottomImages;
})

