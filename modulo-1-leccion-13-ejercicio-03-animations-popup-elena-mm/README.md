# Popup animado al centro de la pantalla

> **Notas**
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

 

