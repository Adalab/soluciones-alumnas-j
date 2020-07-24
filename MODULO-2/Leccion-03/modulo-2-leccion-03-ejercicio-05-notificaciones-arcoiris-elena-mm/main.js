'use strict';

// Crear constantes que hagan referencia al div, el título y el texto
const box = document.querySelector('.box');
const title = document.querySelector('h1');
const text = document.querySelector('p');

// Utilizar condicionales para cambiar el texto dependiendo de la clase que tengan

// si tiene clase success
if (box.classList.contains('success')) {
  title.innerHTML = 'CORRECTO';
  text.innerHTML = 'Los datos son correctos';

  // si tiene clase warning
} else if (box.classList.contains('warning')) {
  title.innerHTML = 'AVISO';
  text.innerHTML = 'Tenga cuidado';

  // si tiene clase error
} else if (box.classList.contains('error')) {
  title.innerHTML = 'ERROR';
  text.innerHTML = 'Ha surgido un error';
}

// <3
