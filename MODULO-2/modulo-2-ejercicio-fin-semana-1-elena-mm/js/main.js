'use strict';

//SELECTORS...

// Hacemos referencia al username, password, button y al mensaje oculto
const username = document.querySelector('.js-user-name');
const password = document.querySelector('.js-user-password');
const button = document.querySelector('.js-login-button');
const errorMsg = document.querySelector('.error-wrapper');

//Number of user attemps
let attemps = 0;

//Object saved in BBDD with user information to compare with my form
const userInfo = {
  name: 'front23',
  password: 'bicicleta',
};

//FUNCTIONS
function checkInfo() {
  // Nada más clickear el botón, se considera un intento, por lo que antes de analizar nada con condicionales, tenemos que incrementar el valor de attempts por 1. Esto lo podemos hacer con dos operadores:
  // attemps += 1;
  // attemps++; -> Escojo esta porque es más corta
  attemps++;

  // ¿Username y password coinciden con los valores del objeto?
  if (
    username.value === userInfo.name &&
    password.value === userInfo.password
  ) {
    alert('Estás dentro 🕺🏻');

    // Si no coinciden y este es el cuarto intento (attemps > 3) -> BLOQUEADO 😈
  } else if (attemps > 3) {
    alert('Estás bloqueado 🙅🏼‍♀️');

    // Si no coinciden los valores pero el intento está por debajo del cuarto, mostrar el mensaje de error
  } else {
    errorMsg.classList.remove('hidden');

    // Puedes añadir este mensaje al final para comprobar cómo cada vez que pulsas al botón de entrar, el valor de attemps incrementa por uno:
    console.log('attempt: ' + attemps);
  }
}

//LISTENERS
button.addEventListener('click', checkInfo);

// <3
