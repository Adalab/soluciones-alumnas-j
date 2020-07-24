'use strict';

// Partimos de un array con los participantes de la carrera y sus tiempos
const runners = [
  { name: 'Gregory Goyle', time: 56 },
  { name: 'Nymphadora Tonks', time: 9 },
  { name: 'Luna Lovegood', time: 45 },
  { name: 'Cedric Diggory', time: 28 },
  { name: 'Cho Chang', time: 35 },
];

// Queremos tener una clasificación de la carrera = ordenar los objetos del array según los tiempos
// Utilizamos los parámetros a y b pero dentro de la función especificamos que queremos ordenar según la propiedad TIME del objeto, por lo que tenemos que escribir a.time y b.time
runners.sort((a, b) => a.time - b.time);

// Si probamos esta (poniendo b.time - a.time), nos daria el orden inverso, de más tiempo a menos:
// runners.sort((a, b) => b.time - a.time);

// 🦊 EMM
