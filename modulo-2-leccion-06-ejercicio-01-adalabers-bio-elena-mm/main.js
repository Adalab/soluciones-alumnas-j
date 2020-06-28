'use strict';

// Creamos los objetos adalaber1 y adalaber2
const adalaber1 = {
    name: 'Susana',
    age: 34,
    job: 'periodista'
}

const adalaber2 = {
    name: 'Rocío',
    age: 25,
    job: 'actriz'
}

// Mostramos información en el HTML
// Voy a poner las descripciones de los objetos en el innerHTML del elemento div con clase "description"

const description = document.querySelector('.description');

// Añado primera descripción
description.innerHTML = `<p>"Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.job}"</p>`

// Añado segunda descripción (operador += --> "a lo que ya tengo, añade esto:")
description.innerHTML += `<p>"Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.job}"</p>`