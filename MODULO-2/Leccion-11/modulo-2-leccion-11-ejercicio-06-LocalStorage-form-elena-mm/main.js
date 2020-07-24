'use strict';

// Partimos del ejercicio 4 y queremos añadir un campo más para el apellido (hecho en el html) y gurdar los datos a modo de objeto en el localStorage

/*------------------*
/*     ALERTA ⚠️    *
/*------------------*/
// Recuerda que localSotrage NO puede guardar arrays ni objetos
// Tenemos que utilizar el método JSON.stringify para convertir un objeto o array
// en una cadena string.

// Creo constantes que cogen la referencia de los inputs
const username = document.querySelector('.name');
const lastName = document.querySelector('.last-name');

// Creo eventlistener que escucha cuando tecleamos en todo el documento. Hago esto para saltarme el tener que crear varios eventlisteners para cada input
document.addEventListener('keyup', function () {
  //Pintar en HTML
  const paragraph = document.querySelector('p');
  paragraph.innerHTML = username.value + ' ' + lastName.value;

  // Creo objeto con los datos
  const userInfo = {
    name: username.value,
    lastName: lastName.value,
  };

  // Guardar en el localstorage
  // Recuerda hacer stringify!! pasar el objeto a string
  localStorage.setItem('userInfo', JSON.stringify(userInfo));
});

// 🦊 EMM
