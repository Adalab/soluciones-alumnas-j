'use strict';

// Creamos función que va a recibir por párametro un selector de css y nos retornará el elemento de HTML correspondiente:
function getEl(selector) {
    const element = document.querySelector(selector);

    // Comprobar si constante tiene valor alguno o no, para ello nos aprovecharemos de lo que aprendimos de falsy. Si estuviera vacía, fuera undefined o null, su valor booleano sería de false.
    // Si element existe, es truthy, return su valor
    if (element) {
        return element;

    // si element es false, mandar error
    } else {
        console.error(`No existe ningún elemento con clase, id o tag llamado ${selector}`)
    }
}

// Creamos constantes que utilizan la función creada para hacer referencia a los diferentes elementos de nuestro html:

const h1El = getEl('h1');
const pSuccessEl = getEl('.success');
const pWarningEl = getEl('.warning');
const btnEl = getEl('#btn');

