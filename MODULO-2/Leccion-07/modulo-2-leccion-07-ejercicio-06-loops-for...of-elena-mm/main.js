'use strict';

// Crear programa que le pregunta a la usuaria cuáles son sus dos películas o libros favoritos mediante un formulario.
// Cuando pulsa botón enviar, guardamos información en un array, lo recorremos y mostramos mensaje por cada obra: "¡A mí también me encantó "OBRA"! Tenemos mucho en común, humana".

// Creamos constante que hace referencia a botón
const button = document.querySelector('.btn');

// Creamos función handler de qué pasa cuando clickeamos el botón
function showMessage() {
    // La constante que recoge el valor que hemos introducido en el input la declaramos una vez hemos pulsado el botón. Esto es importante, si la declaramos arriba debajo de la de button, su valor será el que por defecto tiene el value de un input vacío. --> queremos que el valor se le asigne una vez hemos escrito los libros y pulsado el botón

    // Creamos una constante que recoge el primer libro que hemos introducido y otra para el segundo
    const bookInput1 = document.querySelector('#book1').value;
    const bookInput2 = document.querySelector('#book2').value;

    // Creamos un array que tendrá como elementos los dos libros
    const bookList = [bookInput1, bookInput2];

    // Crear for...of loop que va a mostrar un mensaje por cada libro:
    for (const book of bookList) {
        console.log(`¡A mí también me encantó "${book}"! Tenemos mucho en común, humana.`)
    }
}

button.addEventListener('click', showMessage);



