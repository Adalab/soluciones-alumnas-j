'use strict';

// Calcular cuándo serán las próximas 15 lunas 
//  |--> aparecen cada 3 años
//  |-- > sabemos que en 2007 hubo una

// VARIABLE con último año que hubo luna del cazador
let fullMoon = 2017;

// repite 15 veces
for (let i = 0; i < 15; i++) {

    // Suma al último año que hubo luza del cazador 3
    fullMoon += 3;

    // console log
    console.log(fullMoon)
}