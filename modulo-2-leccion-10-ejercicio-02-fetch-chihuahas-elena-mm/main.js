'use strict'

// Partimos del código del ejercicio.
//  Y nos piden que modifiquemos el código para que las fotos de nuestra página sólo sean de perros de la raza Chihuaha

// En la documentación de la API (https://dog.ceo/dog-api/documentation/breed) nos dice cómo hacer peticiones al servidor de imágenes de perros por RAZA

// La dirección que genera imágenes aleatorias de perros según la RAZA es: https://dog.ceo/api/breed/hound/images/random  👉🏻 Tenemos que sustituir "hound" por la raza que queramos, en este caso "chihuahua"
function getDogImage() {
    fetch("https://dog.ceo/api/breed/chihuahua/images/random ")
      .then(response => response.json())
      .then(data => {
        const img = document.querySelector("img");
        img.src = data.message;
        img.alt = "Un perro";
      });
  }
  const btn = document.querySelector(".js-dog");
  btn.addEventListener("click", getDogImage);
  
