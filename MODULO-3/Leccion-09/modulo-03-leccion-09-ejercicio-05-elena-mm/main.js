'use strict';

const users = [
    { name: 'Nymphadora Tonks', time: 9 },
    { name: 'Cedric Diggory', time: 28 },
    { name: 'Cho Chang', time: 35 },
    { name: 'Luna Lovegood', time: 45 },
    { name: 'Gregory Goyle', time: 56 }
  ];

// destructuring de array y objeto
const [
  {name: firstName, time: firstTime},
  {name: secondName, time: secondTime},
  {name: thirdName, time: thirdTime}
] = users;

console.log('First: ' + firstName + ', ' + firstTime);
console.log('Second: ' + secondName + ', ' + secondTime);
console.log('Third: ' + thirdName + ', ' + thirdTime);