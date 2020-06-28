'use strict';

// CREAMOS CONSTANTES
// La que se refiere al elemento select
const citySelect = document.querySelector('#city-select');

// La que se refiere al image container, donde irá la imagen
const container = document.querySelector('.image-container');

// La que crea un elemento de imagen
const newItem = document.createElement('img');

// Añadimos el nuevo item como hijo de container (de momento está vacío)
container.appendChild(newItem);


// CREAMOS FUNCIÓN
// La función se encarga de, dependiendo del valor del elemento select, mostrar una foto u otra

function showCity() {
    // Cambiamos el atributo de src del newItem dependiendo de la ciudad que se elija
    if (citySelect.value === 'madrid') {
        newItem.setAttribute('src', './images/madrid.jpg');
    } else if (citySelect.value === 'paris') {
        newItem.setAttribute('src', './images/paris.jpg');
    } else if (citySelect.value === 'newYork') {
        newItem.setAttribute('src', './images/new-york.jpg');
    }
}

// EVENT LISTENER
// El elemento select va a estar escuchando un "cambio de valor" (change) para ejecutar la función showCity()
citySelect.addEventListener('change', showCity);