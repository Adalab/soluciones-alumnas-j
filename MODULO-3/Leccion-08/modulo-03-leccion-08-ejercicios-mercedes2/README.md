This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Modulo 3 Lección 8

## A Falta de resolver

14:20 - 28/07/20:

- Optimizar el selector del checkbox de forma que se des-seleccione sin aumentar el contador de click
- Ejercicio 4

## Enunciado de los ejercicios

### EJERCICIO 1

**Formulario para pelis.**

Vamos a crear un formulario en un componente de React que recoja información de una película:

- nombre, en un campo de texto
- descripción, en un textarea
- idioma, en un select donde podemos seleccionar entre Español, Inglés o Portugués

El resultado de rellenar el formulario, debe aparecer en una tarjeta de previsualización que va mostrando la información según se rellena.

### EJERCICIO 2

**Refactor del formulario**

Vamos a hacer un pequeño refactor del código del ejercicio anterior: usaremos una única función escuchadora para el evento `change` de cada campo. Para eso, recordad que podemos acceder a la clave de un objeto cuyo nombre tenemos en una variable usando el operador `[key]` siendo `key` la variable que tiene el nombre de un campo del objeto.

### EJERCICIO 3

**Más datos de las pelis**

Vamos a añadir más información a nuestro formulario de películas

- **clasificación por edades**, donde usaremos radio buttons con las opciones: A (todos los públicos, aparece marcada por defecto), 7, 12, 16 y 18
- **género**, donde usaremos checkboxes y podrán marcarse un máximo de 3 de las opciones: comedia, drama, fantasía, acción, familia, terror

### EJERCICIO 4

**Pelis con carátula**

Partiendo del ejercicio anterior, vamos a añadir un campo más al formulario que sea la carátula de la película. Al elegir el usuario una carátula, se muestra una previsualización de la misma, y se guardan los datos en el estado. Recuerda que para leer la información de ficheros debemos usar un `FileReader` y para recoger la información de una imagen su método `readAsDataURL`.
