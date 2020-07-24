'use strict';

// Tenemos que crear mostrar en una web el listado completo de los repositorios de una organización utilizando la api de github de https://api.github.com/orgs/{orgname}

// Vamos a necesitar:
// 1. Crear una referencia al input y al botón de buscar
// 2. Añadirle al botón un eventListener de click que llame a una función getOrgRepos()
// 3. Definir una función getOrgRepos() que va a hacer lo siguiente:
//
//      3.1. Primera petición al servidor de github para obtener información sobre la organización
//      3.2. Recoger la información de la URL donde consultar los repositorios de la organización y guardarla en una constante reposURL
//      3.3. Segunda petición al servidor de github para obtener la información de los repositorios de la organización, utilizando los datos recogidos en el paso anterior (reposURL)
//      3.4. Con la información obtenida del segundo fetch, hacer un loop para que por CADA repo de la organización, guardemos la propiedad de "name" y la añadamos como li item para meterlo en la lista!
//      3.5. Pintar en nuestra web el nombre de todos los repositorios

// 1. Creamos referencia al botón
const button = document.querySelector('.btn');

// 2. Añadir eventlistener al botón
button.addEventListener('click', getOrgRepos);

// 3. Definir función getOrgRepo()
function getOrgRepos() {
  // Creamos referencia al valor del input
  const organization = document.querySelector('.organization').value;

  // 3.1. Hacer la primera petición (fetch() para obtener información sobre la organización
  fetch(`https://api.github.com/orgs/${organization}`) // esto nos da una lista de propiedades sobre la organización como nombre, fecha de creación, URL a los repositorios de la organización...
    // 3.2. hacer el json() al response del servidor
    .then((response) => response.json())

    // 3.3. json nos devuelve todos los datos sobre la organización y nosotras queremos guardar la información relativa a la url de los repositorios de la organización (que se llama "repos_url")
    .then((organizationData) => {
      // creamos constante que guarda la url de los repos
      const reposURL = organizationData.repos_url;
      // importante, como return lanzamos OTRO fetch, esta vez queremos acceder a la información sobre los repositorios de la organización, así que en vez de escribir manualmente la dirección, utilizamos la constante reposURL que creamos antes, que alberga la url
      return fetch(reposURL);
    })

    .then((repositoryResponse) => repositoryResponse.json())
    .then((repoData) => {
      // Creamos una lista que contendrá el listado con los nombres de las repos
      const repoList = document.querySelector('ul');
      // Creamos una VARIABLE vacía a la que iremos añadiendo todos los li con los nombres de las repo
      let listContent = '';

      // Creamos un loop en el que, por cada item que haya en el repoData (que es todo el listado de repositorios de la organización) vamos a acceder a la propiedad de name de cada item, que es el nombre del repositorio
      for (const repo of repoData) {
        const repoName = `<li>${repo.name}</li>`; // no olvides poner el li

        // Lo añadimos todo al listContent
        listContent += repoName;
      }
      // finalmente, añadimos el listcontent al elemento ul (repoList)
      repoList.innerHTML = listContent;
    });
}

// 🦊 EMM
