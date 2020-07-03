'use strict';

// Creamos una constante haga referencia al body para luego poder cambiarle cómodamente el color de fondo con las clases definidas en el css
const body = document.querySelector('body');

// El documento debe de estar escuchando por si puslamos alguna tecla (keydown)
document.addEventListener('keydown', function (event) {

    // Si la tecla que pulsamos (event.key) es la r, añadir clase red (fondo rojo) y eliminar clase purple (fondo morado) por si lo tuviera.
    if (event.key === 'r') {
        body.classList.add('red');
        body.classList.remove('purple');

    // Si la tecla que pulsamos (event.key) es la m, añadir clase purple (fondo rojmoradoo) y eliminar clase red (fondo rojo) por si lo tuviera.
    } else if (event.key === 'm') {
        body.classList.add('purple');
        body.classList.remove('red');
    }
})