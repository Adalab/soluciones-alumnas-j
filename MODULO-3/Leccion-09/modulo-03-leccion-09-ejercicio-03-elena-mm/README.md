# README

![](https://media3.giphy.com/media/IgDC5yl5uyjKw/giphy.gif?cid=ecf05e47dada6943de1a948b48df40c040d93ae188283cac&rid=giphy.gif)

Pues nada, que lo que piden ya lo hice en los ejercicios [1]() y [2]().

Respecto a la pregunta **b)**: "*En el ejercicio anterior vamos a extraer un nuevo componente llamado `ColapsiblePalette`. ¿Dónde hay que poner el `key` ahora?*"

Yo lo hice en el ejercicio anterior y se llamaba mi componente "`Collapsible`" y el key en ese caso, en vez de ir en código JSX de un li, por ejemplo, va directamente en el componente:

```jsx
const  collapsibleItems = this.state.palettes.map(el => {
  return (
    <Collapsible 
      key={el.name} // AQUI
      name={el.name}
      source={el.from} />
  );
})
```

