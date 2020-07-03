'use strict';

// Creamos función que recibe un número de parámetro y nos devuelve "true" si es par y "false" si es impar
function checkNumber(n) {
    // Si al dividir el número "n" entre 2 el resto es 0, lo que indica que el número es par
    if (n % 2 === 0) {
        return true;
    } else {
        return false;
    }
}