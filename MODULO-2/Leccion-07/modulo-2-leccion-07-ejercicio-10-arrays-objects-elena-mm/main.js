'use strict';

// Constante de la que partimos:
const items = [
  'Ada',
  1815,
  ['Informática', 'Matemática', 'Escritora'],
  {
    mother: 'Anna Isabella',
    father: 'Lord Byron',
  },
];

// Función que recorre los datos del array y pinta en consola por cada elemento:
// "El dato VALOR está en la posición X y es de tipo TIPO".
function paintInfo() {
  for (let i = 0; i < items.length; i++) {
    let value = items[i];
    let position = i;
    let type = typeof items[i];
    console.log(
      `El dato ${value} está en la posición ${position} y es de tipo ${type}`
    );
  }
}

// 🦊 EMM
