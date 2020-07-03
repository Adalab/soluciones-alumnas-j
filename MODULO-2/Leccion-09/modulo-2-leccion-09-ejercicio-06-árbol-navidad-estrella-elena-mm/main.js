'use strict';

// Voy a resolver este problema utilizando array y sin utilizar

// ARRAY
// Creamos una función que admite un parámetro. Este parámetro equivale a la altura del árbol de navidad

function drawTree(height) {
    // Creamos variable que devuelve un boolean y nos va a indicar si es la primera vez que se corre el loop. Esto nos permite poner una estrella sólo en la priemra ronda y evitar que se siga añadiendo luego:
    let isFirstTime = true;

    // Creamos array vacía:
    let tree = [];
    for (let i = 0; i < height; i++) {

        // Condición de la primera vuelta -> para añadir estrella
        if (isFirstTime === true) {
            tree.push('★');
            console.log(tree);

            //Cambiamos valor de isFirstTime para que nunca más se ejecute esto y sólo haya una estrella
            isFirstTime = false;

            // Quitamos la estrella del array para que no nos aparezca en el siguiente console.log
            tree.splice(0, 2);

            // restamos al contador i un valor, puesto que queremos que height equivalga al número de triángulos, sin contar con la estrella y el tronco
            i--;
        } else {
            tree.push('▲');
            console.log(tree);
        }
    }
    // Tras meter todos los triángulos necesarios, reseteamos el array, para quitar todos los triángulos y poder añadir el tronco FUERA del for loop.
    tree = [];
    tree.push('|');
    console.log(tree);

}


// VERSION SIN ARRAY


function drawTreeNoArray(height) {
    let triangle = '▲';
    let isFirstTime = true;
    let tree = '';

    for (let i = 0; i < height; i++) {

        // Si es la primera vez que ejecutamos el loop
        if (isFirstTime === true) {

            // mostrar estrella
            console.log('★');

            isFirstTime = false;

            // restamos al contador i un número, puesto que queremos que height sea igual al número de triángulos, sin contar con la estrella y el tronco
            i--;

        // Si no es la primera vez que ejecutamos el loop
        } else {
            tree += triangle;
            console.log(tree);
        }
    }

    // Añade tronco
    console.log('|');
}