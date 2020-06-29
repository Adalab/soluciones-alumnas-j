'use strict';

// Modificar ejercicio 2 para que se detenga la ejecución de la funcón
let counter = 0;
let temp;

const incrementAndShowCounter = () => {

    counter++;
    const time = document.querySelector('.time');
    time.innerHTML = counter + ' 🍇';

    if(counter > 11) {
        clearInterval(temp);
    }
}

temp = setInterval(incrementAndShowCounter, 1000);

// Igual que el del ejemplo pero aplicado el ejercicio 2 de las uvas