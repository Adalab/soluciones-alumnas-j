'use strict';

// Tenemos que crear un buscador de usuarios en Github que nos muestr el nombre, la foto de avatar y el número de repositorios de un usuario de github que busquemos en el input

// Vamos a necesitar:
// 1. Crear una referencia al input y al botón de buscar
// 2. Añadirle al botón un eventListener de click que llame a una función getUser()
// 3. Definir una función getUser() que va a hacer lo siguiente:
//
//      3.1. Hacer una petición fetch() a la api de github https://api.github.com/users/{username}
//           donde "username" sería el input que usuario introduzca --> necesitamos crear variable que haga
//           referencia al valor del input y en vez de escribir en el fetch() "https://api.github.com/users/{username}"
//           Tenemos que escribir `https://api.github.com/users/${username}` --> de esta manera el valor del input
//           se meterá en la dirección
//
//      3.2. Hacer json() al response del servidor
//
//      3.3. Con el data que nos devuelva el json(), vamos a crear constantes que hagan referencia a la imagen del html,
//           el párrafo que contiene el nombre y el que contiene el nº de repositorios
//
//      3.4. (FIN) asignarle como valor a la imagen y párrafos los datos que hemos obtenido del api. Para esto tenemos que fijarnos en
//           cuáles son las keys que se refieren al avatar, username y número de repositorios (mirar documentación!)

// 1. Creamos referencia al botón
const button = document.querySelector('.btn');

// 2. Añadir eventlistener al botón
button.addEventListener('click', getUser);

// 3. Definir función getUser()
function getUser() {
  // Creamos referencia al valor del input
  const username = document.querySelector('.username').value;

  // 3.1. Hacer el fetch añadiendo la variable del username a la dirección para que nos de la info personalizada de dicho usuario
  fetch(`https://api.github.com/users/${username}`)
    // 3.2. hacer el json() al response del servidor
    .then((response) => response.json())

    // 3.3. Con el data que nos devuelve json, crear constantes que hagan referencia a img, párrafos, etc
    .then((data) => {
      console.log(data);
      const img = document.querySelector('.avatar');
      const name = document.querySelector('.name');
      const numberRepositories = document.querySelector('.repositories');

      // 3.4. Asignamos como valor de estas constantes los datos que hemos obtenido de la api. En este caso, las propiedades que queremos acceder son: "name" (nombre), "avatarl_url" (imagen) y "public_repos" (nº de repositorios). Si no entiendes de dónde he sacado estos nombres, échale un ojo a este ejemplo (de Miguel tihihi): https://api.github.com/users/migueldelmazo
      img.src = data.avatar_url;
      name.innerHTML = data.name;
      numberRepositories.innerHTML = data.public_repos;
    });
}

// 🦊 EMM
