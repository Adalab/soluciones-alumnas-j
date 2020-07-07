'use strict';

// Crear cronómetro que aumente en segundos y cuando se pulse el botón stop deje de aumentar y cuando se pulse el de reset, empiece de nuevo: //

// Crear variables y constantes
let counter = 0;
let temp;
const stopBtn = document.querySelector('.stop'); // Botón de stop
const restartBtn = document.querySelector('.reset'); // Botón de reset

// Crear variable que controla el estado del intervalo. Esto es importante por lo que veremos más abajo 🧐
let isIntervalOn = true; // Como  nada más cargar la página el intervalo se pone en marcha, el valor inicial de esta variable es true


// Función que se encarga de aumentar el contador y pintarlo en el html
function startCounting() {
    counter++;
    let time = document.querySelector('.time');
    time.innerHTML = counter;       
}

// Variable temp que pone en marcha el intervalo: cada 1 segundo se ejecuta la función startCounting
temp = setInterval(startCounting, 1000);


/****************************
 *         Botones          *
 ****************************/

// Cuando pulsamos el botón stop, se cancela el intervalo
stopBtn.addEventListener('click', () => {
    clearInterval(temp); 
    isIntervalOn = false; // El intervalo se detiene y por tanto el nuevo valor de isIntervalOn es false
});

// Cuando pulsamos el botón reset se resetea el intervalo. 
restartBtn.addEventListener('click', () => {

    // Resetear el contador a 0
    counter = 0;

    /*------------------------*/
    //     Importante 🧠🤯    //
    /*------------------------*/
    // Crear un condicional para que, si el isIntervalOn = false; es decir, si no se está ejecutando ahora mismo el interval porque ya pulsamos el botón de stop, que cambia el valor de isInteralOn a false, --> se cree un nuevo intervalo.
    //
    // De lo contrario, si isIntervalOn = true; es decir, si estamos reseteando el interval sin haber pulsado en el botón de stop, por lo que isIntervalOn = true, --> no se hace nada y sigue funcionando el interval de antes.
    //
    //----------------------------------
    // ¿Por qué es esto importante? 🤔
    //----------------------------------
    // Puedes probarlo por ti misma, pero si ignoras este hecho y le metes directamente el setInterval(startCounting, 1000), cuando pulses el botón reset sin haber parado antes el interval, verás que el contador cada vez va más deprisa, si pulsas muchas veces en el botón, cada vez irá más rápido. 
    if (isIntervalOn === false) {
        temp = setInterval(startCounting, 1000);
        isIntervalOn = true;
    } else {
        startCounting();
    }
});

/* Otra idea 💡 Que se me ocurre para atajar este problema sería que dentro de la función del botón de restar primero parásemos el interval con clearInterval y luego creáramos el interval nuevo, para asegurarnos de que no hay otro interval por ahí pululando!. Ejemplo de lo que digo: */

// restartBtn.addEventListener('click', ()  => {
//     counter = 0;
//     clearInterval(temp);
//     temp = setInterval(startCounting, 1000);
// })

/* Si lo pruebas, también funciona! Si quieres trastear, prueba a comentar la línea de clearInterval(temp) y verás en el navegador que el contador se vuelve loquísimo. Un saludo a Miguel y María, grandes profesores, mejores personas. 💚*/



// 👉🏻 Creo que es porque cada vez que haces temp=setInterval(startCounting, 1000); estás llamando a la función, que se ejecuta cada segundo. Si no paras la función y escribes otra vez temp=setInterval(startCounting, 1000), estarías llamando a la función una segunda vez y se ejecutarían las dos a la vez. Entonces, cuantas más veces pulses el botón, más funciones se ejecutan y cambian de número a diferente tiempo, dando la sensación de que va FLECHAO