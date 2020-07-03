'use strict'

// Partimos del ejemplo anterior pero vamos a modificarlo para que en lugar de pedir 2 imágenes en paralelo, pida 10, y el resultado se pinte cuando las 10 imágenes hayan llegado.

const createPromise = () =>
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json());

function getBreedImages() {
    
    // Creo un array promises vacío
    const promises = [];
    // le añado con un loop for 10 elementos iguales que son "createPromise()" para no tener que añadir manualmente const promises = [createPromise(), createPromise(), ....] 10 veces
    for (let i = 0; i < 10; i++) {
        promises[i] = createPromise();
    }
    console.log(promises);
  Promise.all(promises)
    .then(responses => {
      for (let i = 0; i < responses.length; i++) {
        const img = document.querySelector('.dog' + (i + 1));
        img.src = responses[i].message;
      }
    });
}
const btn = document.querySelector('.js-btn');
btn.addEventListener('click', getBreedImages);


