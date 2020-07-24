'use strict';

// Partimos de un objeto que agrupa a distintos usuarios
const users = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 },
];

// Queremos un nuevo array que sólo contenga a los usuarios cuyo pin sea nº par
// Necesitamos:
// utilizar el método filter()
// una expresión de devuelva un valor boolean --> user.pin % 2 === 0 (¿Es nº par?)
const chosenUsers = users.filter((user) => user.pin % 2 === 0);

// 🦊 EMM
