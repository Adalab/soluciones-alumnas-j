'use strict';

// Me he cansado de hacer arrays, así que vamos directamente a consolear
function drawTree(height) {
  /*-------------------*
   *      VARIABLES     *
   *-------------------*/
  // triángulo
  let triangle = '▲';

  // variable que guardará los espacios
  let space;

  // el espacio necesario cuando hay sólo un triángulo es igual a height -1 (calculado con dibujillo)

  let spaceNeeded = height - 1;

  // Boolean para condicional -> en caso de que sea la primera vez que corremos el loop, que aparezca estrella
  let isFirstTime = true;

  /*---------------------------*
   *      Poner la estrella     *
   *---------------------------*/
  if (isFirstTime === true) {
    for (let i = 0; i < height; i++) {
      space = '';

      // Este loop básicamente añade tantos espacios como son necesarios (height - 1)
      for (let k = 0; k < spaceNeeded; k++) {
        space += ' ';
      }
      console.log(space + '★');
    }
  }

  /*---------------------------*
   *      Poner el árbol        *
   *---------------------------*/

  // Cada vez que demos una vuelta de loop, restamos uno al valor de spaceNeeded, esto es porque en cada línea necesitamos un espacio menos hasta que llegamos al último, que no necesita espacio
  for (let i = 0; i < height; i++, spaceNeeded--) {
    // Como hemos cambiado el número de espacios anteriormente, lo reseteamos a ninguno
    space = '';

    // Loop que añade tantos espacios como son necesarios
    for (let k = 0; k < spaceNeeded; k++) {
      space += ' ';
    }
    console.log(space + triangle);

    // Al final del loop, aumenta en 2 los triángulos para el próximo loop. Cada fila aumenta en dos los triángulos.
    triangle = triangle + '▲▲';
  }

  /*---------------------------*
   *      Poner el tronco       *
   *---------------------------*/
  // Reseteamos el valor de spaceNeeded, puesto que lo hemos moficiado anteriormente
  spaceNeeded = height - 1;

  // también reseteamos space, igual que antes
  space = '';

  // Calcular espacios y pintarlos
  for (let k = 0; k < spaceNeeded; k++) {
    space += ' ';
  }
  console.log(space + '|');
}

// 🦊 EMM
