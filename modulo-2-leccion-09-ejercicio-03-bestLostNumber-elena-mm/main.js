'use strict';


// Partimos de
const lostNumbers = [4, 8, 15, 16, 23, 42];

// Crear función bestLostNumber que devuelve algunos números del array de los números de la serie Lost (lostNumbers)
function bestLostNumber() {
    // 1. crea array que contiene sólo los números pares que hay en lostNumbers. 
    let evenNumbers = []; // Array vacía que contendrá los números pares

    for (let i = 0; i < lostNumbers.length; i++) {
        // Si el número es par, meterlo en el evenNumbers con push();
        if (lostNumbers[i] % 2 === 0) {
            evenNumbers.push(lostNumbers[i]);
        }
    }

    // 2. crea array que contiene sólo los números pares que hay en lostNumbers. 
    let threeNumbers = []; // Array vacía que contendrá los números múltiplos de 3

    for (let i = 0; i < lostNumbers.length; i++) {
        // misma lógica pero ahora el resto nos tiene que dar 0 al dividir por 3
        if (lostNumbers[i] % 3 === 0) {
            threeNumbers.push(lostNumbers[i]);
        }
    }

    // 3. Devolver una concatenación de los dos arays anteriores (primero pares, luego múltiplos de tres);
    const result = evenNumbers.concat(threeNumbers);
    console.log(result);
}