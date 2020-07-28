# README

![](https://media0.giphy.com/media/MfEXpoJPeoAec/giphy.gif?cid=ecf05e47b1ceec2b44fe861be2eac8233e141dcdda5cc686&rid=giphy.gif)

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

  // tenemos que imprimir en pantalla los nombres y tiempos del primero,
  // segundo y tercer clasificado usando destructuring del array.

  const [first, second, third] = users;
  console.log('primero: ' + first.name + ', ' + first.time);
  console.log('segundo: ' + second.name + ', ' + second.time);
  console.log('third: ' + third.name + ', ' + third.time);
```

