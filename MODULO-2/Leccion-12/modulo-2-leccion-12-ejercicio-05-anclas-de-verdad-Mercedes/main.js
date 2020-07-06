'use strict';

/* EJERCICIO 5 - Anclas de verdad 
Reutilizamos el ejercicio 11 de la leccion 2.5 Eventos*/

const buttonInicio = document.querySelector('.js-click-inicio');
const buttonMedio = document.querySelector('.js-click-medio');
const buttonFin = document.querySelector('.js-click-fin');

//Añadimos atributo a los enlaces
buttonInicio.setAttribute('data-id', 'inicio');
buttonMedio.setAttribute('data-id', 'medio');
buttonFin.setAttribute('data-id', 'fin');

//Recogemos la información de las secciones de los párrafos
const linkInicio = document.querySelector('#inicio');
const linkMedio = document.querySelector('#medio');
const linkFin = document.querySelector('#fin');

//Obtenemos la informacion relativa a la posicion de las secciones
const positionInicio = linkInicio.getBoundingClientRect();
const positionMedio = linkMedio.getBoundingClientRect();
const positionFin = linkFin.getBoundingClientRect();
console.log(positionInicio);
console.log(positionMedio);
console.log(positionFin);

function handleButtonClick(event) {
  event.preventDefault();
  /* console.log('Click menu');
  console.log(event.currentTarget); */
  if (event.currentTarget === buttonInicio) {
    window.scrollTo({
      top: 150 - 190, //¿Cómo hacer sin meter números a fuego en top?
      behavior: 'smooth',
    });
  } else if (event.currentTarget === buttonMedio) {
    window.scrollTo({
      top: 668 - 190,
      behavior: 'smooth',
    });
  } else if (event.currentTarget === buttonFin) {
    window.scrollTo({
      top: 1186 - 190,
      behavior: 'smooth',
    });
  }
}

buttonInicio.addEventListener('click', handleButtonClick);
buttonMedio.addEventListener('click', handleButtonClick);
buttonFin.addEventListener('click', handleButtonClick);
