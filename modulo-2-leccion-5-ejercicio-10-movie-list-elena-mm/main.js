'use strict';

// Creamos una constante haga referencia al botón (tiene clase btn)
const button = document.querySelector('.btn');

// Creamos toooodas las constantes que contienen las pelis
const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

// (PARTE 2) Creo las VARIABLES que MAS TARDE harán referencia a cada peli (tb se puede hacer con constantes pero declarándolas DENTRO de la función printMovies())
let inceptionEl;
let butterflyEl;
let sunshineEl;
let velvetEl;
let splitEl;


/***************************/
/* Parte 1: Pintando pelis */
/***************************/

// Creamos función que al ejecutarse pinta las pelis en el html
function printMovies() {
    // Para poder insertar hay muchas opciones. Una de ellas es cambiando el innerHTML del body.
    // Si hacemos esto tenemos que tener en cuenta una cosa:
    // --> Que con sólo utilizar el "=" y poner las pelis, perderíamos el botón, porque todo lo que sigue al "document.querySelector("body").innerHTML =" sobreescribe el innerHTML del elemento body, en el cuál tenemos ya un botón. ¿Cómo resolvemos esto?
    // Yo he utilizado el operador "+=" que básicamente significa "a lo que ya hay, súmale esto".
    document.querySelector("body").innerHTML += `<ul>
                                                    <li class="inception-f">${inception}</li>
                                                    <li class="butterfly-f">${theButterFlyEffect}</li>
                                                    <li class="sunshine-f">${eternalSunshineOfTheSM}</li>
                                                    <li class="velvet-f">${blueVelvet}</li>
                                                    <li class="split-f">${split}</li>
                                                </ul>`
    // Si yo después de esto cambiara otra vez el innerHTML del elemento body con un "= 'Hello'" toooodo el contenido que hemos escrito se sustituiría por un "Hello" PERO si en vez de eso yo cambio el innerHTML del body utilizando "+= 'Hello'" -> después de tooodo lo que hemos escrito aparecería una nueva pieza de contenido que diría "Hello"

    let film = document.querySelector('li');
    film.addEventListener('click', movieClickHandler);


    // (PARTE 2)
    // Hacemos referencia a las pelis que acabamos de crear utilizando las variables que declaré al principio:
    inceptionEl = document.querySelector(".inception-f");
    butterflyEl = document.querySelector(".butterfly-f");
    sunshineEl = document.querySelector(".sunshine-f");
    velvetEl = document.querySelector(".velvet-f");
    splitEl = document.querySelector(".split-f");
    
    // Les añadimos los eventListeners que ejecutan la función de movieClickHandler cuando hacemos click sobre las pelis:
    inceptionEl.addEventListener('click', movieClickHandler);
    butterflyEl.addEventListener('click', movieClickHandler);
    sunshineEl.addEventListener('click', movieClickHandler);
    velvetEl.addEventListener('click', movieClickHandler);
    splitEl.addEventListener('click', movieClickHandler);
}

// Le ponepmos el eventlisener al botón, que al hacer click, ejecuta nuestra función printMovies()
button.addEventListener('click', printMovies);

/*********************************************************************/
/* Parte 2: console.log el nombre de cada peli al hacer click en ella*/
/*********************************************************************/

// Para esta parte tenemos que ponerle un eventlistener a cada película, que deben esperar un 'click' para entonces hacer un console.log con el nombre de la peli. Para hacer esto primero debemos crear constantes que hagan referencia a dichas películas.

// IMPORTANTE: las películas NO EXISTEN hasta que no hacemos click en el botón, que las pinta en el documento HTML. Si definimos las variables fuera de esa función, el navegador intentará crearlas al cargar la página y les asignará un valor de NULL porque las pelis NO EXISTEN hasta que no damos CLICK al botón. ¿Qué hacemos entonces? 
// 1. Crear las constantes una vez la función printMovies se ejecuta
// 2. Declarar VARIABLES al principio del documento y ASIGNARLES el valor de referencia a la peli una vez se ejecuta la función printMovies. 


// Primero voy a crear un HANDLER que haga console.log del elemento sobre el que tiene lugar el evento para poder así reutilizarlo en todos los eventlistener de la lista de pelis:
function movieClickHandler(event) {
    console.log(event.currentTarget.innerHTML); 
    // Esto hace un console.log con el título de la película (innerHTML) del elemento que haya sido clickeado
}

