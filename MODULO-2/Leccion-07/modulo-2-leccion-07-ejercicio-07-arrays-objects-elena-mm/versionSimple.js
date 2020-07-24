'use strict';

/*------------ Parte 1: Crear la estructura de datos -------------*/
// Creamos array llamada adalabers que tiene como elementos objetos que representan a cada adalaber ( con su nombre, edad y trabajo)
const adalaber = [
  {
    name: 'María',
    age: 29,
    job: 'diseñadora',
  },
  {
    name: 'Lucía',
    age: 31,
    job: 'ingeniera química',
  },
  {
    name: 'Susana',
    age: 34,
    job: 'periodista',
  },
  {
    name: 'Rocío',
    age: 25,
    job: 'actriz',
  },
  {
    name: 'Inmaculada',
    age: 21,
    job: 'diseñadora',
  },
];

/*------------ Parte 2: Crear las funciones que calculan estadísitcas -------------*/

// para calcular número de adalabers
function countAdalabers() {
  return adalaber.length;
}

// para calcular media de edad
function averageAge() {
  let acc = 0;

  for (let i = 0; i < adalaber.length; i++) {
    acc += adalaber[i].age;
  }
  return acc / adalaber.length;
}

// para calcular la chica más joven
function theYoungest() {
  let youngestAdalaberName = adalaber[0].name;
  let youngestAdalaberAge = adalaber[0].age;

  for (let i = 0; i < adalaber.length; i++) {
    let option = adalaber[i].age;

    if (option < youngestAdalaberAge) {
      youngestAdalaberAge = option;
      youngestAdalaberName = adalaber[i].name;
    }
  }
  return youngestAdalaberName; // Nos retorna Inmaculada, que tiene 21 años
}

// para calcular el número de adalabers que son diseñadores
function countDesigners() {
  let numberOfDesigners = 0;

  for (let i = 0; i < adalaber.length; i++) {
    if (adalaber[i].job === 'diseñadora') {
      numberOfDesigners++;
    }
  }
  return numberOfDesigners;
}

// 🦊 EMM
