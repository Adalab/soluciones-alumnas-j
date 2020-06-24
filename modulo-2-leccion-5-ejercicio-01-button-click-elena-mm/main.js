'use strict';

// Creamos una constante a la que le asignamos de valor el mensaje que vamos a mostrar en pantalla cuando hagamos click en el botón 
const newMessage = 'Mi primer click, ¡ole yo y la mujer que me parió!'

// Creo una constante que hace referencia al botón y otra constante que hace referencia al párrafo cuyo texto queremos cambiar
const button = document.querySelector('.btn');
const message = document.querySelector('.message');

// Le añado al botón el EventListener para que espere a que sea clickeado para ejecutar una función que va a cambiar el texto del párrafo. Esto lo podemos hacer de dos maneras:
// 1. Utilizando una función anónima
// 2. Definiendo una función por separado y llamándola en el eventListener

// 1. Función anónima
button.addEventListener('click', function () {
    message.innerHTML = newMessage;
});

// 2. Definiendo función por separado y llamándola en el eventListener
/* Descomentar esto para probar la segunda opción 
function changeMessage() {
    message.innerHTML = newMessage;
}

button.addEventListener('click', changeMessage);
*/

