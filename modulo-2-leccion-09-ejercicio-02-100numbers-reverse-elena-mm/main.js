'use strict';

// Crear función getReversed100Numbers llama a la función del ejercicio anterior pero cambia el orden:

/*---- función ejercicio pasado -------*/
function get100Numbers() {
    let numbers = []; 
    for (let i = 0; i < 100; i++) {
        numbers.push(i+1);
    }
    return numbers; // con return
}

/*---- nueva función -------*/
function getReversed100Numbers() {
    //obtiene el return de get100Numbers y le aplica directamente el reverse. Esto lo guarda en variable reversedNumbers que luego hace return
    let reversedNumbers = get100Numbers().reverse();
    return reversedNumbers;
}