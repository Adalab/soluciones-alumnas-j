# Popup animado al centro de la pantalla

Este ejercicio lo he resuelto de 3 maneras diferentes:

1. Utilizando posicionamientos:
   - elemento normal `bottom` por debajo de la pantalla
   - elemento en transición `bottom` a la mitad de la pantalla
2. Utilizando `margin-top`
   - elemento normal `margin-top` de `100vh` para que quede debajo de la pantalla + **corrección** con `translateY()`
   - elemento en transición `margin-top: 50vh` para que quede a la mitad de la pantalla + **corrección** con `translateY()`
3. Utilizando `translate`
   - elemento normal posicionado con `absolute` debajo de la pantalla y centrado horizontalmente
   - elemento en transición `transform: translateY()` utilizando `calc()` para calcular exactamente la distancia necesaria para llegar a la mitad de la pantalla

---



> **Notas sobre la opción 3, mi favorita ❤️**
>
> Para realizar este ejercicio he hecho lo siguiente:
>
> - asignado `100vh` al body y html y `100%` al contenedor principal para asegurarme que éste último ocupa todo el `height` de la pantalla.
>
> - centrado el popup al darle un `position: absolute` (y al container `relative`) con `left: 0`, `right: 0` y `margin: auto` 
>
> - situado el popup justo debajo de la línea inferior de la pantalla al asignarle un `bottom: -50px` puesto que `50px` es el `height` de mi elemento. 
>
> - **Para la animación:** He utilizado un solo `transform: translateY()` y dentro he usado una función `calc()` con la que he calculado la distancia exacta necesaria para que el objeto se centre verticalmente en la pantalla y que equivale a la suma de  `-50vh` y `-25px` (la mitad del height del elemento). Esto normalmente se consigue de la siguiente manera:
>
>   ```css
>   .example {
>     top: 50%;
>     transform: translateY(-50%); 
>   }
>   ```
>
>   Pero al poner posicionamientos en el estado `:hover` la animación se fastidiaba así que me he decidido por la función `calc()` 

 

> **Nota interesante: translate()**
>
> En los ejercicios utilizo `translate(-25px)` o `translate(25px)` porque 25 es la mitad del elemento popu (`50px`) pero podríamos utilizar porcentajes en su lugar:
>
> - `translate(-50%)`
> - `translate(50%)` 
>
> Ya que el porcentaje se refiere al elemento al que se le aplica el translate!

