'use strict';

//Recogemos datos
const resultElement = document.querySelector('.container');

//Añadimos combo
let content2 = '<select name="color" id="select-color" class="select-color">';
content2 += '<option value="blanco" class="js-color">Blanco</option>';
content2 += '<option value="azul" class="js-color">Azul</option>';
content2 += '<option value="verde" class="js-color">Verde</option>';
content2 += '<option value="amarillo" class="js-color">Amarillo</option>';
content2 += '<option value="rosa" class="js-color">Rosa</option>';
content2 += '</select>';
resultElement.innerHTML = content2;

//Funcion que escribe 100 veces la frase
function copy100() {
  let content = `<li>Copia 100 veces`;
  for (let i = 0; i < 100; i++) {
    content += `<p class="text">He aprendido bien cómo funcionan los bucles</p>`;
  }
  content += `</li>`;
  resultElement.innerHTML = content2 + content;
}
copy100(); //se ejecuta alcargar la página

const select = document.querySelector('.select-color');
const options = document.querySelectorAll('.js-color');
const body = document.querySelector('#body');
// console.log(options);
options[0].selected = true;
// console.log(options[0].value);
// console.log(options[1].value);
// console.log(options[2].value);
// console.log(options[3].value);
// console.log(options[4].value);

//Funcion que actualiza el texto al color seleccionado
function changeColor(ev) {
  if (ev.target.value === 'blanco') {
    body.style.color = 'white';
  } else if (ev.target.value === 'azul') {
    body.style.color = 'blue';
  } else if (ev.target.value === 'verde') {
    body.style.color = 'green';
  } else if (ev.target.value === 'amarillo') {
    body.style.color = 'yellow';
  } else if (ev.target.value === 'rosa') {
    body.style.color = 'pink';
  }
}
//Listener
select.addEventListener('change', changeColor);
