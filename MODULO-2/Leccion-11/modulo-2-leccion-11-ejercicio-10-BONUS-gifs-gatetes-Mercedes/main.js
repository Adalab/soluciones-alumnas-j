'use strict';

/* BONUS - EJERCICIO 10 - Dame gifs de gatetes */

//Creo una funcion que se ejecuta al cargar la página y al clicar el boton.

//En la documentacion de la api hay un apartado: "search by file type (gifs)" que nos explica como pedir solo gif
function getCatGif(ev) {
  fetch(
    'https://api.thecatapi.com/v1/images/search?format=json&mime_types=gif',
    {
      headers: {
        'x-api-key': 'd59fc1bc-6e11-4aea-b357-0b9e68cc0b60', //Código que nos mandan al email al registarte en la página
        //⚠📢GENERATE EL TUYO yendo a https://thecatapi.com/ y haciendo Signup
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const img = document.querySelector('img');
      img.src = data[0].url;
    });
}

getCatGif(); //Se ejecita al cargar la página
//Listener
const button = document.querySelector('.js-button');
button.addEventListener('click', getCatGif); //Se ejecuta al hacer click
