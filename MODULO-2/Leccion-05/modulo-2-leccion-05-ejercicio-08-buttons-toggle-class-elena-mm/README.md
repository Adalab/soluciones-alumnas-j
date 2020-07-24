En este ejercicio nos piden expresamente que creemos un *handler* y que ambos botones compartan handler cuando declaremos el `addEventListener`.

Para realizar este ejercicio es importante tener claros los conceptos de `event` y `currentTarget`. 

El esquema de resolución es:

1. Crear constantes que hagan referencia a cada uno de los botones:

   ```js
   const button = document.querySelector('.btn');
   const buttonSecond = document.querySelector('.btn-second');
   ```

2. Crear la función **handler** que reutilizaremos luego:

   ```js
   function handleButtonClick(event) {
       event.currentTarget.classList.toggle('btn-fancy');
   }
   ```

   > Véase como lleva un parámetro de `event` para después poder decirle "busca el elemento al que se refiere este evento" = `event.currentTarget`

3. Finalmente añadimos los eventlisteners que comparten el **handler** a cada botón:

   ```js
   button.addEventListener('click', handleButtonClick);
   buttonSecond.addEventListener('click', handleButtonClick);
   ```

   —🦊 [Elena *mm*](https://github.com/elemarmar) 