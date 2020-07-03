'use strict';
//Si abrimos "https://api.github.com/orgs/Adalab" podremos ver los datos que contiene
// de la misma forma con "https://api.github.com/orgs/Adalab/repos"
//Así podemos ver los datos a los que tenemos que llamar

//Creamos funcion manejadora que se ejecutará al hacer click en el botón

function getRepos() {
  //Creamos una constante que recoja el valor que se escriba en el input
  //En este caso "Adalab"
  const orgname = document.querySelector('.organization').value;

  //Llamamos a los datos del servidor
  fetch(`https://api.github.com/orgs/${orgname}`)
    .then((response) => response.json())
    .then((data) => {
      console.log('Repositories data response: ', data); //Prueba para ver en consola que recoge los datos
      const reposURL = data.repos_url; //recogemos la URL de los repos de adalab
      return fetch(reposURL); //nos devuelve los repos
    })

    .then((repositoryResponse) => repositoryResponse.json()) //Recogemos la URL de los repos
    .then((repoData) => {
      //Objeto que contiene la URL de los repos
      const ul = document.querySelector('ul'); //La lista donde vamos a mostrar los repos

      let ulContent = ''; //Generamos la variable que vamos a llenar al recorrer el nombre de cada repo
      for (const repo of repoData) {
        const repoContent = `<li>${repo.name}</li>`;
        ulContent += repoContent;
      }
      ul.innerHTML = ulContent;
    });
}

//Listener
const btn = document.querySelector('.js-button');
btn.addEventListener('click', getRepos);

//Y ya estaría!
