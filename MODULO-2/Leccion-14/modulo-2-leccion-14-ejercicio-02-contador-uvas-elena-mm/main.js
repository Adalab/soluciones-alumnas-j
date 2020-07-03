'use strict';

// Crear contador de uvas que empezará en 0 y cada segundo incrementará en 1 hasta 12 --> entonces deja de incrementar
let counter = 0;

const incrementAndShowCounter = () => {

    // Para asegurarnos que el counter sólo se incremente 12 veces creamos un condicional. Una vez el counter supera 12, la función no hace ningún cambio y se muestran "12 🍇" indefinidamente
    if(counter < 12) {
        counter++;
        const time = document.querySelector('.time');
        time.innerHTML = counter + ' 🍇';
    }
}

setInterval(incrementAndShowCounter, 1000);


// Este ejercicio es exactamente igual que el del ejemplo de arriba del ejercicio 1 pero cambia que en vez de 1 segundo es cada dos 🤷🏻‍♀️