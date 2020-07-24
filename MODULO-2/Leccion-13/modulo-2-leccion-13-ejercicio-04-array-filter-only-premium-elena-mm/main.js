'use strict';

// Partimos de un array con objetos que repreentan usuarias, su nombre y si son premium o no
const users = [
  { name: 'María', isPremium: false },
  { name: 'Lucía', isPremium: true },
  { name: 'Susana', isPremium: true },
  { name: 'Rocío', isPremium: false },
  { name: 'Inmaculada', isPremium: false },
];

// Queremos un nuevo array que sólo contenga los usuarios que sean premium
// Vamos a necesitar:
// el método filter() que aplicamos a users
// una expresión que nos de un boolean (true/false) --> user.isPremium === true
const premiumUsers = users.filter((user) => user.isPremium === true);

// 🦊 EMM
