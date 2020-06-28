'use strict';

/*------------ Parte 1: Crear la estructura de datos -------------*/

// Creamos array llamada adalabers que tiene como elementos objetos que representan a cada adalaber ( con su nombre, edad y trabajo)
const adalaber = [{
        name: 'María',
        age: 29,
        job: 'diseñadora'
    },
    {
        name: 'Lucía',
        age: 31,
        job: 'ingeniera química'
    },
    {
        name: 'Susana',
        age: 34,
        job: 'periodista'
    },
    {
        name: 'Rocío',
        age: 25,
        job: 'actriz'
    },
    {
        name: 'Inmaculada',
        age: 21,
        job: 'diseñadora'
    }
];

/*------------ Parte 2: Crear las funciones que calculan estadísitcas -------------*/

// para calcular número de adalabers
function countAdalabers() {
    return adalaber.length;
}

// para calcular media de edad
function averageAge() {
    // variable a la que se le asignará la suma de todas las edades
    let acc = 0;
    // sumar edades en variable acc
    for (let i = 0; i < adalaber.length; i++) {
        acc += adalaber[i].age;
    }
    // dividir entre el número de adalabers
    const result = acc / adalaber.length;
    return result;
}

// para calcular el nombre de la más joven. Lo he querido hacer sin utilizar nada que no hayamos visto hasta ahora. Con ciertos métodos a nuestra disposición sería muchísimo más fácil, pero vamos a intentarlo utilizando sólo lo que conocemos:
function theYoungest() {

    // Creamos dos variables que representarán: el nombre de la adalaber más joven y la edad de la adalaber más joven. Vamos a dar por sentado que la primera adalaber (en posición de array 0) es la más joven y luego con un loop ir comparando con las siguientes:
    let youngestAdalaberName = adalaber[0].name;
    let youngestAdalaberAge = adalaber[0].age;

    for (let i = 0; i < adalaber.length; i++) {

        // Creamos una variable llamada opción que va a albergar la edad de la adalaber[i], esto es, cada ronda representará la edad de una adalaber diferente.
        let option = adalaber[i].age;

        // Con este condicional queremos comparar si la edad de la adalaber a la que le toca en este turno (adalaber[i] = option) es menor que la que guardamos al principio en youngestAdalaberAge y que representa la edad de la primera adalaber. Si esto es así, entonces le asignamos el nuevo valor de option, porque es más joven, si no, no pasa nada y youngestAdalaberName sigue teniendo la edad de antes (más joven que option)
        if (option < youngestAdalaberAge) {
            youngestAdalaberAge = option;
            youngestAdalaberName = adalaber[i].name;
        }
    }
    return youngestAdalaberName; // Nos retorna Inmaculada, que tiene 21 años 
}


// para calcular el número de adalabers que son diseñadores
function countDesigners() {
    // Creamos variable que indica el número de diseñadores. Empezamos en 0.
    let numberOfDesigners = 0;
    for (let i = 0; i < adalaber.length; i++) {

        // Si el trabajo de una adalaber es diseñadora, incrementa el valor de numberOfDesigners en 1
        if (adalaber[i].job === 'diseñadora') {
            numberOfDesigners++;
        }
    }
    return numberOfDesigners;
}