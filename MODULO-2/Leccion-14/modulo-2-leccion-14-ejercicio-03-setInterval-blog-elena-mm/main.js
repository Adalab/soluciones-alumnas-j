'use strict';

// Pintar un mensaje en la pantalla que diga "escrito hace X segundos" y que vaya incrementando el número de segundos y cuando lleve más de 59, que diga "escrito hace 1 min"

// 1. Cuando sólo ha pasado un segundo -> segundo aparece en singular y no plural, por lo que habrá que crear una condición para este caso

// 2. Cuando pasan entre 2 y 59 segundos -> segundos aparece en plural

// 3. Cuando pasan más de 59 segundos -> se cambia por 1 minuto


// Declaro el counter
let counter = 0;

// Declaro la unidad, que irá cambiando según cada caso: segundo, segundos, minuto
let unit = 'segundo';


const countSeconds = () => {
    counter++;

    // Declaro el mensaje. Quiero que aquí cambien el counter y la unidad según el caso:
    let message;
    const text = document.querySelector('.text');

    // Si sólo ha pasado 1 segundo
    if (counter === 1) {
        message = `Ha pasado ${counter} ${unit}`;


    // Si han pasado 60 segundos
    } else if (counter > 59) {
        unit = 'minuto';
        // Los segundos los he puesto en string para no complicarme la vida puesto que parece que el ejercicio acaba aquí y se debe quedar en un minuto. A partir de este momento el counter seguirá subiendo pero en la pantalla siempre aparecerá "Ha pasado 1 minuto"
        message = `Ha pasado 1 ${unit}`;

    // Si han pasado entre 2 y 59 segundos
    } else if (counter > 1){
        unit = 'segundos';
        message = `Han pasado ${counter} ${unit}`

    }
    text.innerHTML = message;

}

setInterval(countSeconds, 1000);