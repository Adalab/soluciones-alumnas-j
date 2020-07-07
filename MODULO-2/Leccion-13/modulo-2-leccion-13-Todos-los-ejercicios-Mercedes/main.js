'use strict';

//-------------- map ------------------------------------------
/* EJERCICIO 1 - Inflar las notas */
const marks = [5, 4, 6, 7, 9];

const inflatedMarks = marks.map((mark) => mark + 1);
console.log('1. Notas infladas +1:');
console.log(inflatedMarks);

/* EJERCICIO 2 - Saludas es de buena educacion */
const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];

const hello = names.map((name) => `Bienvenida ${name}.`);
console.log('2. Saludos:');
console.log(hello);

/* EJERCICIO 3 - Gracias por confiar en nosotros */
const users = [
  { name: 'María', isPremium: false },
  { name: 'Lucía', isPremium: true },
  { name: 'Susana', isPremium: true },
  { name: 'Rocío', isPremium: false },
  { name: 'Inmaculada', isPremium: false },
];

const helloPremium = users.map((user) => {
  if (user.isPremium === true) {
    return `Bienvenida ${user.name}. Gracias por confiar en nosotros.`;
  } else {
    return `Bienvenida ${user.name}.`;
  }
});
console.log('3. Saludos diferenciados:');
console.log(helloPremium);

//-------------- filter ------------------------------------------

/* EJERCICIO 4 - Solo los premium */
//Utilizando el array del ejercicio 3 (users)
const prmiumUsers = users.filter((user) => user.isPremium === true);
console.log('4. Los usuarios premiun son:');
console.log(prmiumUsers);

/* EJERCICIO 5 - Los pares pueden entrar */

const pins = [2389, 2384, 2837, 5232, 8998];
const evenPins = pins.filter((pin) => pin % 2 === 0);
console.log('5. Los pares que pueden entrar son:');
console.log(evenPins);

/* EJERCICIO 6 - Los usuarios que pueden entrar */

const users2 = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 },
];

const enterUser = users2.filter((user) => user.pin % 2 === 0);
console.log('6. Los usuarios de pin par son:');
console.log(enterUser);

//-------------- reduce ------------------------------------------

/* EJERCICIO 7 - La media de la carrera */
const times = [56, 9, 45, 28, 35];
const media = times.reduce((acc, time) => (acc + time) / times.length);
console.log(`7. La media es ${media}`);

/* EJERCICIO 8 - El ganador de la carrera */
const runners = [
  { name: 'Gregory Goyle', time: 56 },
  { name: 'Nymphadora Tonks', time: 9 },
  { name: 'Luna Lovegood', time: 45 },
  { name: 'Cedric Diggory', time: 28 },
  { name: 'Cho Chang', time: 35 },
];
const theWinner = runners.reduce((winner, runner) => {
  if (winner.time < runner.time) {
    return winner;
  } else {
    return runner;
  }
});

console.log(`8. El ganador es:`);
console.log(theWinner);

/* EJERCICIO 9 - El ganador de los estudiantes */

const runners2 = [
  { name: 'Gregory Goyle', time: 56, student: true },
  { name: 'Nymphadora Tonks', time: 9, student: false },
  { name: 'Luna Lovegood', time: 45, student: true },
  { name: 'Cedric Diggory', time: 28, student: true },
  { name: 'Cho Chang', time: 35, student: true },
];

const theWinnerTwo = runners2
  .filter((runner) => runner.student === true)
  .reduce((winner, runner) => {
    if (winner.time < runner.time) {
      return winner;
    } else {
      return runner;
    }
  });
console.log(`9. El ganador es:`);
console.log(theWinnerTwo);

//-------------- find/findIndex ------------------------------------------

/* EJERCICIO 10 - ENcuentra el usuario */

const users3 = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 },
];

/* a) Incidencia asociada al PIN 5232. ¿Podrías encontrar el usuario que 
corresponde a ese PIN para poder contactarle? Usa el método find para conseguirlo. */

const findUser = users3.find((user) => user.pin === 5232);
console.log(`10.a. El usuario con la incidencia es:`);
console.log(findUser);

/* b) Resulta que el usuario se ha dado de baja por la incidencia :( 
¿Podrías borrarlo del array de usuarios? Usa el método findIndex para 
encontrar su posición y bórralo usando splice. */

const removeFindUser = users3.splice(
  users3.findIndex((user) => user.pin === 5232),
  1
);
console.log(`10.b. Se ha eliminado al usuario:`);
console.log(removeFindUser);
console.log('10.b. Nuestra lista de usuarios actual es:');
console.log(users3);

//-------------- BONUS ------------------------------------------

/* EJERCICIO 11 - Clasificacion de la carrera*/
/* const runners = [
  { name: 'Gregory Goyle', time: 56 },
  { name: 'Nymphadora Tonks', time: 9 },
  { name: 'Luna Lovegood', time: 45 },
  { name: 'Cedric Diggory', time: 28 },
  { name: 'Cho Chang', time: 35 },
]; */

runners.sort((a, b) => a.time - b.time);
console.log('11. Runners en orden:');
console.log(runners);

/* EJERCICIO 12 - Poniendo orden en nuestros usuarios */
/* const users2 = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 },
]; */

//Ordenar por orden alfabético:

users2.sort((a, b) => {
  if (a.name < b.name) {
    return -1;
  } else {
    return 1;
  }
});
console.log('12.a. Usuarios por orden alfabético:');
console.log(users2);

//Ordenar por su numero de pin:
//Vuelvo a crear el array porque sino al consolear me pisa el anterior
const users4 = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 },
];
users4.sort((a, b) => a.pin - b.pin);
console.log('12.b. Usuarios por orden de pin:');
console.log(users4);
