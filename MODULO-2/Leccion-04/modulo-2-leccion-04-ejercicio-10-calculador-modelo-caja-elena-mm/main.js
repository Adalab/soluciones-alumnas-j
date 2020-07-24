'use strict';

// Creamos función que acepta 4 parámetros y nos devuelve ancho del contenido y el ancho total de la caja:
function calculator(isBorderBox, width, padding, borderSize) {
  let totalWidth;
  //Para calcular ancho total dependerá de si la caja es border-box o content-box. Para ello  utilizamos un condicional para poder calcular el ancho total en cada caso:

  // Si no es border-box pero content-box, el total del ancho es igual al ancho del contenido + padding (recordemos que hay padding por ambos lados por lo que habría que multiplicar por 2) y el border (mismo caso que con padding)
  if (isBorderBox === false) {
    totalWidth = width + padding * 2 + borderSize * 2;

    // Si es border-box el ancho final incluye paddings y borde
  } else if (isBorderBox === true) {
    totalWidth = width;
  }
  return `El ancho del contenido es:  ${width}px y el ancho total de la caja es: ${totalWidth}px`;
}

// Un resultado con isborderBox = true
var result1 = calculator(true, 200, 20, 10);

// Mismo resultado con isborderBox = false
var result2 = calculator(false, 200, 20, 10);

// <3 EMM
