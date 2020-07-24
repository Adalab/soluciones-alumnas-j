'use strict';

// Referencia a párrafo del HTML donde mostraremos el número
const numberParagraph = document.querySelector('.number');

// Utilizamos el método fetch() para acceder a un integer aleatorio del api de rand.fun
// Recuerda que fetch() toma al menos un parámetro obligatorio, que es la url del resource que intentamos acceder, en este caso: https://api.rand.fun/number/integer

fetch('https://api.rand.fun/number/integer')
  .then((response) => response.json())
  .then((data) => (numberParagraph.innerHTML = data.result));

// 🦊 EMM
