'use strict';

// Para resolver este problema manejamos un array que va a ir añadiendo un triángulo por fase de loop y tendrá tantas fases de loop como el usuario escoja -> fases de loop = height del tree

// Creamos una función que admite un parámetro. Este parámetro equivale a la altura del árbol de navidad
function drawTree(height) {
    // Creamos array vacía:
    let tree = [];
    for (let i = 0; i < height; i++) {
        tree.push('▲');
        console.log(tree);
    }
}

// Nótese cómo esto en el navegador nos devuelve arrays, no los triángulos sueltos. Si se quisiera hacer sin arrays para que no aparezca en la consola el "Array["▲"]" podríamos hacer:

function drawTreeNoArray(height) {
    // Creamos variable con triángulo
    let triangle = '▲';

    // Creamos variable tree vacía
    let tree = '';

    for (let i = 0; i < height; i++) {
        // por cada loop le añadimos un triángulo al tree
        tree += triangle;
        console.log(tree);
    }
}