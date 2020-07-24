'use strict';

// Creamos una constante que hace referencia a nuestro contenedor de los párrafos cuya clase es "box"
const box = document.querySelector('.box');

// Hacemos que la ventana esté escuchando el evento scroll
window.addEventListener('scroll', function () {
  // // Creamos una variable que recoja el número de pixels que la ventana ha hecho scroll. Para ello utilizamos "window.scrollY" que nos devuelve el número de píxeles que el documento se ha desplazado verticalmente:
  let scrollValue = window.scrollY;

  // Para aplicar un color de fondo según el scroll vamos a utilizar condicionales:
  if (scrollValue > 250) {
    //En el caso de que el scroll sea mayor a 250px, le vamos añadir la clase blue para que el fondo sea azul, y quitarle la verde, por si la tuviera
    box.classList.add('blue');
    box.classList.remove('green');

    //En el caso de que el scroll sea menor de 250px, le vamos añadir la clase green para que el fondo sea verde, y quitarle la blue, por si la tuviera
  } else {
    box.classList.add('green');
    box.classList.remove('blue');
  }
});

// 🦊 EMM
