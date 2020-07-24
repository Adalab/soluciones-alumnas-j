'use strict';

// Cuando el usuario escriba su nombre en el input, guardarlo en el localStorage

const username = document.querySelector('.name');

username.addEventListener('keyup', function () {
  //Pintar en HTML
  const paragraph = document.querySelector('p');
  paragraph.innerHTML = username.value;

  // Guardar en el localstorage
  localStorage.setItem('name', username.value);
});

// 🦊 EMM
