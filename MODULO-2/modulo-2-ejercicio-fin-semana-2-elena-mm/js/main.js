'use strict';

const ENDPOINT =
  'https://beta.adalab.es/ejercicios-extra/js-fetch-arrays-princesas-disney/data/users.json';

let users = []; // Array vacía que hará referencia más adelante a cada
// princesa (<li>)
// let favorites = [];

/* Do your magic! 🦄🦄🦄*/

/*----------------------------------------------------------------------*
 *                             ¿QUÉ NOS PIDEN?                          *
 *----------------------------------------------------------------------*/
// 1. Que al cargar la página se pinte un listado (<ul>, <li>) con
//    la siguiente información:
//
//      A. Nombre
//      B. Foto
//      C. Comentario de la princesa
//
//      ⚠️ Esta información se recoge del JSON contenido en la constante
//          ENDPOINT
//
// 2. Que al hacer click sobre una princesa se cambie el fondo a color
//    azul claro para marclarla como nuestr amiga

/*----------------------------------------------------------------------*
 *                     CONSIDERACIONES INICIALES                        *
 *----------------------------------------------------------------------*/
// Partimos de un HTML con esta estructura:
//      <h1 class="title">Princess Twitter</h1>
//      <ul class="js-user-list">
//      </ul> */}
//
//  👉🏻Tendremos que guardar la información relativa a cada princesa dentro
//    de un <li></li> Vamos a ver cómo sería un ejemplo en HTML:
//    Entre corchetes pongo cómo se llama el nombre de la propiedad en el json.
//
//       <li> --> el contenedor de toda la info relativa a la princesa
//          <div class="avatar__container"> --> el contenedor de la imagen y el nombre
//              <img> --> la imagen de perfil (se puede meter dentro de un contendor) [json: picture]
//              <h3></h3> --> el nombre de la princesa [json: name]
//          </div>
//          <div class="description__container"> --> contenedor con descripción
//              <p class="description"></p> --> descripción [json: commennt]
//          </div>
//      </li>

/*----------------------------------------------------------------------*/

/*----------------------------------------------------------------------*
 *                     CONSIDERACIONES INICIALES                        *
 *----------------------------------------------------------------------*/

// Hacemos fetch para obtener la información del json con las princesas:
// 👉🏻 ENDPOINT es una constante que ya contiene la url del json, así que
//     no hace falta escribir la dirección manualmente.
fetch(ENDPOINT)
  .then((response) => response.json())
  .then((data) => {
    // Antes que nada, voy a crear una variable que contendrá todos
    // los <li> con la información de las princesas, para añadirlo
    // luego al <ul> del HTML
    let listContent = '';

    // Una vez obtenidos los datos en formato array (dentro de este
    // array hay tantos objetos como princesas) tenemos que crear
    // un LOOP que recorra todas las princesas y obtenga los
    // datos que buscamos y los pinte en la pantalla.

    for (let i = 0; i < data.length; i++) {
      // Por cada princesa vamos a recoger el nombre, la foto y
      // el comentario (name, comment, picture)
      const picture = data[i].picture;
      const comment = data[i].comment;
      const name = data[i].name;

      // 👉🏻 Según el esquema de HTML que nos hicimos antes, vamos a
      //    englobar el nombre y la foto en un contenedor y la
      //    descripción en otra. --> esto se puede hacer en muchos pasos
      //    yo lo he metido todo de golpe.
      const avatar = `<div class="avatar__container"> 
                                <img src="${picture}">
                                <h3 class="name">${name}</h3>
                            </div>`;

      // 👉🏻 Igualmente, el comentario va dentro de un contendor:
      const description = `<div class="description__container">
                                    <p class="description">${comment}</p>
                                </div>`;

      // Lo juntamos todo en una constante item, que engloba la info
      // en un <li> y luego la añadimos al listContent:
      const item = `<li class="princess-item">${avatar + description}</li>`;
      listContent += item;
    }

    // Hacemos constante list que hace referencia al elemento <ul> de nuestro
    // HTML y le añadimos todos los items (listContent)
    const list = document.querySelector('.js-user-list');
    list.innerHTML = listContent;

    // Al array users le damos todos los items <li>, que tienen clase
    // "princess-item"
    users = document.querySelectorAll('.princess-item');

    // Le añadimos a cada item <li> un event listener que ejecuta una función
    // llamada makeFriend, que pintará el fondo azul
    for (let i = 0; i < users.length; i++) {
      users[i].addEventListener('click', makeFriend);
    }
  });

// Función que pinta el fondo azul cuando hacemos click sobre una princesa
function makeFriend(event) {
  event.currentTarget.classList.toggle('friend');
}

// Recuerda que al utilizar event.currentTarget, lo que hacemos es aplicarle la
// clase friend al <li> que hayamos pulsado, no a todos

// 🦊 EMM
