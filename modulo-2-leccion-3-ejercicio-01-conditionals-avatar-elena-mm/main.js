'use strict';

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.it/300x300';
// avatar que eligió el usuario al registrarse
// let userAvatar = 'http://www.fillmurray.com/300/300'; -> parte 1 del ejercicio
let userAvatar = '';


/*----------------------------------------------------------*
*   Añadir la imagen userAvatar a la etiqueta de HTML img   *
*----------------------------------------------------------*/
// crear constante que hace referencia a la imagen de avatar del HTML
const avatarImg = document.querySelector('.user__avatar');

// Cambiar el valor del atributo "src" del avatarImg al valor de userAvatar, que tiene la imagen de Bill Murray
// avatarImg.setAttribute("src", userAvatar); --> parte 1 del ejercicio



/*----------------------------------------------------------*
*            Mostrar una imagen de usuario SI o SI          *
*----------------------------------------------------------*/
// Si tenemos el avatar del usuario se muestre este
// Si no tenemos datos del avatar del usuario, se muestre el avatar por defecto
avatarImg.setAttribute("src", userAvatar || DEFAULT_AVATAR);

