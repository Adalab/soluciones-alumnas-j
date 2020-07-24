'use strict';

// Creamos una constante haga referencia al botón (tiene clase btn) y al segundo botón (btn-second)
const button = document.querySelector('.btn');
const buttonSecond = document.querySelector('.btn-second');

// Para este ejercicio nos piden reutilizar un HANDLER, por lo que en vez de llamar a una función anónima, crearemos una que llamaremos "handleButtonClick". Esta función tiene que hacer referencia al elemento sobre el que tiene lugar el evento (el click):
// si el evento de hacer click tiene lugar con el primer botón -> hacer target al elemento botón primero
// si el evento de hacer click tiene lugar con el segundo botón -> hacer target al elemento botón segundo
//
// -> para esto utilizaremos event.currentTarget, que identifica al elemento al que le ponemos el listener
function handleButtonClick(event) {
  event.currentTarget.classList.toggle('btn-fancy');
}

// Finalmente le añadimos eventlisteners a ambos botones, llamando al mismo handler que creamos antes! Taráaa!
button.addEventListener('click', handleButtonClick);
buttonSecond.addEventListener('click', handleButtonClick);

//🦊 EMM
