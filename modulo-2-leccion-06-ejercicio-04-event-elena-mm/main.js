'use strict';

// Añadir un listener al botón para loguear el objeto "event" en la consola y verificar si la clave "type" es una propiedad o un método:
const button = document.querySelector('.btn');

// A. Versión función anónima:
// button.addEventListener('click', function (event) {
//     console.log(event);
// });

// B. Versión arrow
button.addEventListener('click', (event) => console.log(event));