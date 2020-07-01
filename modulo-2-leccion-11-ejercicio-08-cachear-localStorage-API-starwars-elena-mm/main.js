'use strict'

// Partimos del ejercicio 2 y se nos pide que cacheemos (guardemos a nivel local) las búsquedas al servidor para que cuando busquemos en el input un personaje de star wars, primero busque en el localStorage si ya tenemos ese resultado, si no estuviera, entonces hacemos la petición

// Recomiendo revisar el ejercicio 2 para entender bien las modificaciones de este.

//-------------------------------------------------------------------------------//

// Referencia al botón y event listener
const btn = document.querySelector('.js-btn');
btn.addEventListener('click', findCharacter);


// La función findCharacter()
function findCharacter() {
    // Guardar valor del input en una constante !!!
    const characterSearch = document.querySelector('.character').value;


    // Condicional que va a checkear si tenemos la petición ya guardada en el localStorage de anteriores búsquedas. Lo que voy a comprobar va a ser si el valor introducido en el input coincide con alguna de las keys que tenemos en el localStorage

    // Si se puede recoger del localStorage el "key" que coincide con el characterSearch (lo que hayamos puesto en el input) entonces quiere decir que ya lo tenemos
    if (localStorage.getItem(characterSearch)) {
        console.log("No se realiza petición al servidor");
        // Creamos constante nueva de la info del localStorage que es una string!! por lo que lo pasamos a objeto con el JSON.parse()!!
        const characters = JSON.parse(localStorage.getItem(characterSearch));

        // Para este ejercicio cree una función aparte que coge los datos y los pinta en la página. De esta manera no tengo que repetir el contenido de la función en ambos casos: si tengo los datos en el localStorage o si tengo que hacer petición.
        paintCharacters(characters);
        


        // Sino se puede coger, esto nos da falsy y pasaríamos a hacer la petición al servidor.
    } else {
        console.log("Se realiza petición al servidor");
        fetch(`https://swapi.dev/api/people/?search=${characterSearch}`)
        .then(searchResponse => searchResponse.json())
        .then(searchData => {
            const characters = searchData.results; 

            // Aquí quité lo que tenía entes que pintaba los resultados e hice otra función que se encarga explusivamente de eso. Así no tengo que repetir su contenido en ambas ocasiones. Aquí llamo a la función paintCharacters
            paintCharacters(characters);

            // Y muy importante; guardar en el localStorage los datos devolvidos por el servidor en STRING --> recordemos que en el localStorage no podemos guardar objetos ni arrays!
            localStorage.setItem(characterSearch, JSON.stringify(characters));
        })
    }


    // Función paintCharacters que tiene un parámetro, que será la información obtenida, por un lado del localStorage, en el caso de que tengamos la info en el localStorage o, en el caso de que hagamos petición al servidor, pues la obtenida del servidor.
    function paintCharacters(characters) {
        const characterList = document.querySelector('ul');
        let characterContent = '';

        for (let i = 0; i < characters.length; i++) {
            const characterName = characters[i].name;
            const characterGender = characters[i].gender;
            characterContent += `<li>Name: ${characterName}  --- Gender: ${characterGender}</li>`;
        }
    
        characterList.innerHTML = characterContent;
    }
    
}

