'use strict';

// Partimos de un array con los participantes de la carrera y sus tiempos
const runners = [
  { name: 'Gregory Goyle', time: 56 },
  { name: 'Nymphadora Tonks', time: 9 },
  { name: 'Luna Lovegood', time: 45 },
  { name: 'Cedric Diggory', time: 28 },
  { name: 'Cho Chang', time: 35 },
];

// Queremos encontrar a la persona que tardó menos tiempo (Nymphadora Tonks)

// Creamos un reduce y al acumulador (acc) lo voy a llamar winner. Cuando empezamos la primera fase de comparación (runner 1 y runner 2) winner representará al primero (es un objeto!! en este caso es Gregory Goyle) y lo comparamos con el runner 2 (Nymphadora Tonks).

// Utilizo un ternario para cambiar el valor de winner y asegurarme de que winner siempre será la persona con el menor tiempo de entre las dos comparadas (reduce() compara elemento anterior con el siguiente, en ese caso runners)

// Recuerda los ternarios:
// Si numeroA es menor que numero b, number1 = number 1; si no es así --> number1 = number2
//number1 = numberA < numberB ? number1 : number2;

//En este caso: si winner.time es menor que runner.time, winner = winner; si no es así --> winner = runner (que tendría un tiempo menor y se convertiría en nuestro winner, listo para compararse con el siguiente runner en la siguiente vuelta!)
const theWinner = runners.reduce((winner, runner) => {
  return winner.time < runner.time ? winner : runner;
});

// 🦊 EMM
