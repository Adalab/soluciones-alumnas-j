'use strict';

// Partimos de array:
const numbers = [1, 2, 3];

// Tenemos que añadir a la lista tres elementos `li` quecorresponden al contenido del array. Tenemos que manipular el DOM (NO innerHTML);

// Vamos a crear  un loop que por cada elemento del array numbers creará un nuevo elemento `li` y un textNode con el elemento del array como contenido.
for (let i = 0; i < numbers.length; i++) {
  // necesitamos referencia al ul
  const list = document.querySelector('ul');

  // Crea elemento li
  const newItem = document.createElement('li');

  // Crea contenido cuyo valor es el elemento del array
  const newContent = document.createTextNode(numbers[i]);

  // Añadimos el contenido al elemento li
  newItem.appendChild(newContent);
  // Añadimos el nuevo li y su contenido a la lista ul
  list.appendChild(newItem);
}

// 🦊 EMM
