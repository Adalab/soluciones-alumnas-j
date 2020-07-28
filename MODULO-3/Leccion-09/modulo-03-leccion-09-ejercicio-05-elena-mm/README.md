# README

![](https://media3.giphy.com/media/l4KiaDYFkqIdtOWyY/giphy.gif?cid=ecf05e47d5ab2f6956c79b83e72a73958d91b9ed6ad321c4&rid=giphy.gif)

**main.js**

```js
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
```

