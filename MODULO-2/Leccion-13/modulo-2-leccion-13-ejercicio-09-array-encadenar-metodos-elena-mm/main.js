'use strict';

// Partimos de un array con estudiantes
const runners = [
  { name: 'Gregory Goyle', time: 56, student: true },
  { name: 'Nymphadora Tonks', time: 9, student: false },
  { name: 'Luna Lovegood', time: 45, student: true },
  { name: 'Cedric Diggory', time: 28, student: true },
  { name: 'Cho Chang', time: 35, student: true },
];

// Queremos encontrar al ESTUDIANTE que tardó menos tiempo (Cedric Diggory

// Antes de utilizar el método del ejercicio anterior tenemos que FILTRAR (filter()) el array para crear un array nuevo que sólo tenga a los estudiantes y LUEGO aplicar el reduce()

const theWinner = runners
  .filter((runner) => runner.student === true)
  .reduce((winner, runner) => {
    return winner.time < runner.time ? winner : runner;
  });

// Lo he puesto todo junto que básicamente es:
// [runner.filter(obtiene estudiantes)].reduce(obtiene ganador)
// reduce se aplica sobre el nuevo array que crea filter.

// 🦊 EMM
