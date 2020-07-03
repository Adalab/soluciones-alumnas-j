'use strict';

// Crear una página con un botón que transcurridos 10 segundos te pregunte: 
//"¿te has dormido?".Si pulsas en el botón la cuenta volverá a cero y otra vez, 
// si transcurren 10 segundos sin pulsar volverá a preguntar de nuevo "¿te has dormido?"

//Creamos constantes que hacen referencia al botón y al mensaje (párrafo en html) --> podíamos haber creado el elemento aquí y luego añadirlo al html con appendChild() pero he preferido centrarme sólamente en el tema de los Timeout
const button = document.querySelector('.btn');
const message = document.querySelector('.message');
let temp;

// Función que va mostrar el mensaje
function showMessage() {
    message.innerHTML = "¿Te has dormido?"
}

// Retrasar la ejecución de la función showMessage 10 segundos
temp = setTimeout(showMessage, 5000);


// ¿Qué pasa cuando hacemos click en el botón? ¡Función anónima!
button.addEventListener('click', function () {
    // Vaciamos el mensaje 
    message.innerHTML = ""

    // Volvemos a poner en marcha el setTimeout
    temp = setTimeout(showMessage, 5000);
})