'use strict';

// Partimos de un array con usuarios
const users = [
    { name: 'María', isPremium: false, pin: 2389 },
    { name: 'Lucía', isPremium: true, pin: 2384 },
    { name: 'Susana', isPremium: true, pin: 2837 },
    { name: 'Rocío', isPremium: false, pin: 5232 },
    { name: 'Inmaculada', isPremium: false, pin: 8998 }
  ];

  
// Queremos ordenar por orden alfabético
// Esta es un poco más complicada, no podemos hacer a.name - b.name porque no son números sino strings. Como sort ordena de menor a mayor si obtiene un -1 (a - b = -1; b - a = 1) y de mayor a menor si obtiene un 1 (b - a) podemos crear un condicional para imitar este comportamiento con strings de manera que si a.name < b.name devuelve un -1 al método sort para que ordene alfabéticamente y de lo contrario un 1, para que los ordene de mayor a menor.
users.sort((a, b) => {
    if (a.name < b.name) {
        return -1;
    } else {
        return 1;
    }
    
});

//Echadle vistazo a la documentación de MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort ya que presenta un caso similar