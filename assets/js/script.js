/* 

Aqui declaramos as variáveis do escopo global do código, 

- Em TotalSlides obtemos a quantidade de slides presentes no código HTML por meio da seleção de todos os slides do projeto. 

- Em currentSlides temos uma variável de controle inicializada em 0 que será utilizada nas funções goPrev e nextPrev para controlar a ida e a  volta de um slide para o outro pelo evento onclick lá no HTML.

- Em sliderWidth obtemos a largura do nosso slider via propriedade 
.clientWidth. 

*/

let totalSlides = document.querySelectorAll('.slider--item').length;
let sliderWidth = document.querySelector('.slider').clientWidth;
let currentSlide = 0;

/* 

- Nesse primeiro seletor, obtivemos a largura dos nossos slides, por meio do produto de sliderWidth por totalSlides;

- Já no segundo, obtivemos a largura dos nossos controles responsáveis por ir e voltar os slides através da variável sliderWidth;

- No último, ajustamos a altura dos controles no meio da tela a partir da seleção da classe slider junto a propriedade .clientHeight.

*/

document.querySelector('.slider--width').style.width = 
    `${sliderWidth * totalSlides}px`;

document.querySelector('.slider--controls').style.width = 
    `${sliderWidth}px`;

document.querySelector('.slider--controls').style.height = 
    `${document.querySelector(".slider").clientHeight}px`;


/* 
- Em goPrev() calculamos a volta de um slide para o outro, da esquerda para a direita;

- Em goNext() calculamos a ida de um slide para o outro, da direita para a esquerda;

- updateMargin() calcula a largura pela quantidade de slides e o quanto de margem esquerda é preciso para fazer a transição entre os slides.

- setInterval funciona como um timer, executando a função goNext após 3 segundos. 
*/
function goPrev() {
  currentSlide--;
  if(currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }
  updateMargin();
}

function goNext() {
  currentSlide++;
  if(currentSlide > (totalSlides - 1)) {
    currentSlide = 0;
  }
  updateMargin();
}

function updateMargin() {
  let sliderItemWidth = document.querySelector('.slider--item').clientWidth;
  let newMargin = (currentSlide * sliderItemWidth);
  document.querySelector('.slider--width').style.marginLeft = 
    `-${newMargin}px`;
}
setInterval(goNext, 3000);

