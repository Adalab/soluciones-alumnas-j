# Princess Twitter 
## 1. Qué nos piden
1. Que al cargar la página se pinte un listado (`<ul>`, `<li>`) con  la siguiente información:*
   -  A. Nombre
   -  B. Foto
   - C. Comentario de la princesa

>  ⚠️ Esta información se recoge del JSON contenido en la constante `ENDPOINT`

2. Que al hacer click sobre una princesa se cambie el fondo a color azul claro para marcarla como nuestra amiga

---

## 2. Consideraciones iniciales

Partimos de un HTML con esta estructura:

```html
<div>
  <h1 class="title">Princess Twitter</h1>
  <ul class="js-user-list user-list">
    <!--render users-->
  </ul>
</div>
```

 👉🏻Tendremos que guardar la información relativa a cada princesa dentro de un `<li></li>`. Vamos a ver cómo sería un ejemplo en HTML:

```html
<li> <!--Contenedor con info de princesa --> 
	<div class="avatar__container"> <!-- Imagen y nombre--> 
		<img> <!--[json: picture] --> 
		<h3></h3> <!-- [json: name] --> 
	</div>
	<div class="description__container"> <!-- descripción -->
		<p class="description"></p> <!-- [json: commennt]-->
	</div>
</li>
```

>  👉🏻 Entre corchetes pongo cómo se llama el nombre de la propiedad en el json.

---

## 3. Manos a la obra

Para esta sección mejor mirar los comentarios que he hecho en el código. 

---

## 4. Resultado

![image-20200703153625583](./image-20200703153625583.png)



 Y pulsando sobre ellas:

![image-20200703153718734](./image-20200703153718734.png)

---

## Nota:

Había en el documento `.js` una variable predefinida, `let favorites = [];` pero no sabía muy bien qué querían que hiciéramos con dicha array. Me da la impresión de que quizá cuando hacemos click sobre una princesa, esta se añada al array de favorites, para tener a las princesas que son nuestras amigas controladas. En dicho caso, simplemente, a todo lo que hemos hecho, tendríamos que, cuando añadimos la clase "friend" al elemento `<li>` que añade el fondo azul, hacer push a este array con dicho elemento (`favorites.push()`)

## Nota 2:

Si no se te pintan las princesas en la pantalla, prueba a abrir el ejercicio con Chrome ;) 

🦊 — [Elena MM](https://github.com/elemarmar)