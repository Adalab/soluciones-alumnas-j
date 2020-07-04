'use strict';

//Variables y constantes
const radioButtons = document.querySelectorAll('.radiobtn');
const container = document.querySelector('.container');

//Bucle for que ejecuta un evento cuando cambia el ratón
for (const button of radioButtons) {
  button.addEventListener('change', changeTheme);
}

//Funcion que cambia el fondo en funcion del checked
function changeTheme(event) {
  if (event.target === radioButtons[0]) {
    //radioButtons[0] es el light
    container.classList.add('light');
    container.classList.remove('dark');
  } else if (event.target === radioButtons[1]) {
    //radioButtons[1] es el dark
    container.classList.add('dark');
    container.classList.remove('light');
  }

  //Bucle for que guarda en localStorage el valor checkeado del input
  for (const button of radioButtons) {
    if (button.checked) {
      localStorage.setItem('colorTheme', button.value);
    }
    console.log(button.value);
  }
}

//Funcion que recoge los valores guaradados del localStorage al cargar la pagina(refescar)
function uploadTheme() {
  const colorTheme = localStorage.getItem('colorTheme');
  if (colorTheme === 'light') {
    container.classList.add('light');
    container.classList.remove('dark');
  } else {
    container.classList.add('dark');
    container.classList.remove('light');
  }
  console.log(colorTheme);
}
uploadTheme();
