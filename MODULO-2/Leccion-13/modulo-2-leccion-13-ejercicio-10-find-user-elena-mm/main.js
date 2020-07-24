'use strict';

// Partimos de un array con usuarios
const users = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 },
];

// A. Queremos encontrar el usuario que tiene el pin 5232
// Utilizamos método find() y encontramos al user cuyo user.pin === 5232
const userFind = users.find((user) => user.pin === 5232);

// B. Queremos borrar dicho usuario del array users utilizando findIndex y splice
users.splice(
  users.findIndex((user) => user.pin === 5232),
  1
);

// Vamos a verlo por partes:
//
// 1. Aquí decimos, users.splice(INDEX, 1), quítale al array users el elemento en la posición INDEX (el 1 de después indica que sólo quitemos 1 elemento, si lo omitimos, eliminará todos los valores desde el que tiene la posición INDEX)
//
// 2. la parte de INDEX (que calcula la posición del elemento a eliminar es la expresión de findIndex que se aplica sobre el array users y calcula la posición del usuario con el pin 5232)

// 🦊 EMM
