'use strict';

// variable con nombre
const name = 'Begoña';


/*--------------------------------------------------------------*
*   Mostrar mensaje de bienvenida si nombre = tuyo / compañera  *
*--------------------------------------------------------------*/
// Si el name = elena, te dice bienvenida si no, se evalúa la siguiente condición que es que name = lucía, si tampoco es lucía, entonces pasar a lo que nos dice el else
if (name === 'Elena' || name === 'Lucía') {
    // alert hace que salga una alerta en la pantalla cuando cargamos la página con el texto entre paréntesis
    alert("Bienvenida " + name);
} else {
    alert("Lo siento pero el usuario que has introducido no está registrado");
}