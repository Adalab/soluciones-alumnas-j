'use strict';

// Crear función get100Numbers que devuelve ARRAY con los números del 1 al 100.
function get100Numbers() {
    // Array donde se guardarán los números:
    let numbers = []; // Array vacía

    // Para contar del 1 al 100 y no del 0 al 99 podemos hacer:
    // - let i = 1; i < 101
    // OR
    // - numbers.push(i+1); --> aquí utilizo este
    for (let i = 0; i < 100; i++) {
        numbers.push(i+1);
        console.log(numbers);
    }

}