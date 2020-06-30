'use strict'

// Queremos obtener un listado de razas de perros y, con un número aleatorio elegir una raza del listado. Para el número utilizaremos rand.fun. Después, queremos pintar un mensaje que muestre la raza elegida al azar y pedir una imagen aleatoria de un perro de esa raza y pintarla.
// Pasos a seguir:
//
// 1. fetch() -> pedir listado de razas de perros a la API de los perros
// 2. fetch() -> pedir número aleatorio de la API rand.fun
// 3. Utilizar número aleatorio para elegir una raza del listado de razas obtenida
// 4. fetch() -> pedir imagen de perro de la raza seleccionada en el paso anterior
// 5. pintar mensaje e imagen en el HTML

// Crear función que se encarga de hacer todo lo anterior
function getRandomDog() {
    // 1. Pedir listado de razas de perros a la API de los perros
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(breedsResponse => breedsResponse.json())
        .then(breedsData => {
            // guardo el listado en una constante
            // Utilizo Object.keys() porque necesitamos obtener un array con el NOMBRE de las propiedades, no su valor ya que el nombre de cara raza está en las propiedades del objeto :( SADNESS )
            const breeds = Object.keys(breedsData.message);

            // 2. pedir número aleatorio de la API rand.fun. ⚠️ Nótese como lleva un '?max'  que indica que el número aleatorio debe de ser como máximo 93, pues si no nos podría dar números como 82372837 y no hay tantos perros. En el array de perros si logueais "breeds" hay 94!
            return fetch('https://api.rand.fun/number/integer?max=93')

            .then(numberResponse => numberResponse.json())
                
            .then(numberData => {
                     
                // guardamos el número en una constante
                const randomNumber = numberData.result;

                // 3. seleccionar raza de perro con el número aleatorio
                const dogBreed = breeds[randomNumber];
                    
                // 4. pedimos imagen de perro de la raza seleccionada al API de los perros:
                return fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`)
                .then(picResponse => picResponse.json())
                .then(picData => {
                    const dogImage = picData.message;

                    // Referencias a los elementos del html que vamos a pintar
                    const image = document.querySelector('img');
                    const name = document.querySelector('.dog-breed');

                    // Pintar
                    image.src = dogImage;
                    name.innerHTML = dogBreed;
                })
        })

        })
}

// Event listener de click en el documento, para actualizar datos cuando hagamos click
document.addEventListener("click", getRandomDog);