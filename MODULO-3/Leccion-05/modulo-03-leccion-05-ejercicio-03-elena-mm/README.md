# README

PArtimos del código del ejercicio 1 (el de la cebolla).

**App.css**

```css
.App {
  text-align: center;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/*****/

.red {
  background-color: red;
}
```

> Creo clase `red` que pone el fondo en rojo.



**OnionHater.js**

```jsx
class OnionHater extends React.Component {

  constructor(props) {
    super(props);
    this.isHating = false;
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(ev) {
        //Al convertir lo que introduzca el usuario en letras minúsculas, no importa cómo lo escriba (con mayúsculas o no)
    const value = ev.target.value.toLowerCase();
    const appEl = document.querySelector('.App');
    if(value.includes('cebolla')) {
      this.isHating = true;
      appEl.classList.add('red');
    } else {
      this.isHating = false;
      appEl.classList.remove('red');
    }
    this.forceUpdate();
  }


  render() {
    return (
      <textarea className="text-box" onChange={this.handleInput}></textarea>
    )
  }
}
```

👉🏻 Creo atributo de la clase `OnionHater` dentro del constructor. Y también declaro un método que se llama `handleInput`

```jsx
constructor(props) {
  super(props);
  this.isHating = false;
  this.handleInput = this.handleInput.bind(this);
}
```

👉🏻Defino el handleInput **fuera** del constructor. Este método se encarga de aplicar la clase `red` si `isHating=true` o de quitarla si es `false`

---> He utilizado `toLowerCase()` para que no importa si escribimos con mayúsculas o minúsculas, todo el texto que se guarda en el value sea en minúsculas ( sobre el que se hace el check de si contiene cebolla o no)

```jsx
handleInput(ev) {
  //Al convertir lo que introduzca el usuario en letras minúsculas, no importa cómo lo escriba (con mayúsculas o no)
  const value = ev.target.value.toLowerCase();
  const appEl = document.querySelector('.App');
  if(value.includes('cebolla')) {
    this.isHating = true;
    appEl.classList.add('red');
  } else {
    this.isHating = false;
    appEl.classList.remove('red');
  }
  this.forceUpdate();
}
```

👉🏻 En la parte del return, pongo el textarea y le pongo el evento `onChange` (cuando el value del textarea cambie). De manera que la función `handleInput` que se encarga de quitar o poner el fondo rojo se ejecuta cada vez que escribimos en el texarea.

```jsx
render() {
  return (
    <textarea className="text-box" onChange={this.handleInput}></textarea>
  )
}
```

**Result**

![cebolla](./cebolla.png)

