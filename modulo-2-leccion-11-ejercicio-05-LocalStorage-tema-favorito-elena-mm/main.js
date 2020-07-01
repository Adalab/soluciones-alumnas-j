'use strict'

// Cuando el usuario escriba elija una opción del radio (light/dark), cambiar la clase del container a light/dark Y guardar la selección de la usuaria en el localStorage.

// Voy a guardar los inputs en un array (se podrían crear tranquilamente dos constantes, cada una haciendo referencia a cada botón según su id)
const radioButtons = document.querySelectorAll('.radiobtn');
const container = document.querySelector('.container');

// Añadir event listener a los DOS radio buttons, para eso hago un loop y le aplico a los dos el eventlistener
for (const button of radioButtons) {
    button.addEventListener('change', changeTheme);
}


// Creo la función handler changeTheme. Como se le aplica a los dos botones, le pongo el event para poder diferenciar sobre qué botón hemos pinchado
function changeTheme(event) {
    // Condicional para mostrar light si hemos pinchado sobre radio con id light y lo opuesto
    if (event.target === radioButtons[0]) { //radioButtons[0] es el light
        container.classList.add('light');
        container.classList.remove('dark');
    } else if (event.target === radioButtons[1]) { // este es el dark
        container.classList.add('dark');
        container.classList.remove('light');
    }

    // Guardar en el localStorage:
    // Para saber qué value tenemos que coger, voy a hacer un loop (podría hacer un condiciona en dos partes que diga (si el radiobutton que está checked es dark --> guardar el valor de dark / si el radiobutton que está checked es light --> guardar el valor de light)) pero yo lo voy a hacer con un loop.

    for (const button of radioButtons) {
        if (button.checked) {
            localStorage.setItem('colorTheme', button.value);
        }
    }
}

