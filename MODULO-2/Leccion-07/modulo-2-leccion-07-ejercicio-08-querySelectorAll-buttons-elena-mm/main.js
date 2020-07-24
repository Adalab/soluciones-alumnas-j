'use strict';

// Crear array que recoja toda las instancias de los botones:
const buttons = document.querySelectorAll('.btn');

// Cramos la función handler que cambia el fondo
function changeBackground(event) {
  event.currentTarget.classList.toggle('alert');
}

// Iteramos sobre todos los botones para añadirles a cada uno un event listener
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', changeBackground);
}

// 🦊 EMM
