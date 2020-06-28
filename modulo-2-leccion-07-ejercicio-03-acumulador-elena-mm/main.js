'use strict';

// Variable acc con valor 0
let acc = 0;

// Bucle que se ejecuta 10 veces y suma 2 a la variable acc en cada iteración:
for (let i = 0; i < 10; i++) {
    acc += 2; // esto es lo mismo que "acc = acc + 2"
}

// Logueamos el valor final de acc (20) 
console.log('El resultado es: ' + acc)