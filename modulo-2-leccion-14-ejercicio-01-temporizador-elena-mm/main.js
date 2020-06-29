'use strict';

// Crear temporizador que empiece en 0 y cada 2 segundos se incremente
let counter = 0;

const incrementAndShowCounter = () => {
    counter++;
    const time = document.querySelector('.time');
    time.innerHTML = counter;
}

setInterval(incrementAndShowCounter, 2000);


// Este ejercicio es exactamente igual que el del ejemplo de arriba del ejercicio 1 pero cambia que en vez de 1 segundo es cada dos 🤷🏻‍♀️