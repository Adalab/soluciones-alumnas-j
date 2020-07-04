'use strict';

//Variables y constantes
let input = document.querySelector('.js-name'); //donde introduciremos el valor
const paragraph = document.querySelector('.js-print-name'); //Donde imprimiremos el valor introducido en el input

//Creamos la funcion que imprimirá el valor introducido en el input
function getValue(ev) {
  paragraph.innerHTML = ev.target.value;
  localStorage.setItem('name', ev.target.value);
}

//Listener
input.addEventListener('keyup', getValue);

//Creamos la funcion que recupera los datos del localStore al iniciar la página (Refrescar)
function uploadName() {
  const savedName = localStorage.getItem('name');
  input.value = savedName;
  paragraph.innerHTML = savedName;
}
uploadName();
