⚠️ **No olvides** meter la VARIABLE (si la haces constante no puede ir cambiando de valor) que recoge la cantidad de píxeles que se ha movido el documento con scroll (`window.scrollY`) DENTRO de la función callback que llama el eventlistener. De esta manera, el valor de la variable se está acutalizando constantemente según hacemos scroll.

```js
window.addEventListener('scroll', function () {
    let scrollValue = window.scrollY;
  /*.....*/
```

