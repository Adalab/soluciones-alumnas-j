'use strict';

// Partimos de un array con tiempos de la carrera
const times = [56, 9, 45, 28, 35];

// Queremos calcular la media de estos tiempos
// Necesitamos:
// utilizar el método reduce()
// La media se calcula sumando todos los valores y dividiendo por el número de items

//..............................|Esto calcula suma total|.....|Esto divide x nº items|
const average = times.reduce((acc, time) => (acc + time), 0) / times.length;
// Básicamente con reduce calculamos la suma total y eso lo dividimos por el nº de items:
// average = (suma total con reduce) / nº items (items.length)
