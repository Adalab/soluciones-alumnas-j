'use strict';

// Creamos constante que haga referencia al botón
const button = document.querySelector('.btn');

// Le añadimos al botón el eventListener y creamos una función callback anónima que va a crear una constante con el nombre introducido y luego imprimir un mensaje en la consola
button.addEventListener('click', function () {
  const name = document.querySelector('#myInput').value;
  console.log(`Hola ${name}`);
});

// Funciona mejor si recogemos el valor del input una vez ya lo hemos introducido y pulsado al botón de Aceptar, por eso defino la constante dentro de la función. También podemos crear una función fuera del event listener y luego llamarla ahí en vez de utilizar una función anónima.

//    —🦊 EMM
