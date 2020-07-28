# README

![](https://media0.giphy.com/media/neJ0RoxbgeXf2/giphy.gif?cid=ecf05e47f6e3383a0e166471e491ab555e174c1d404834f2&rid=giphy.gif)

Pues esto ya lo hice en el anterior, que lo pongo aquí también:

```jsx
handleChange(ev) {
  const target = ev.target;

  const {
    value,
    id,
  } = target;

  this.setState({
    [id]: value
  }, () => {
    this.sendDataToApp(this.state);
  })
}
```

> en vez de escribir:
>
> ```jsx
> handleChange(ev) {
>   const target = ev.target;
>   const value = target.value;
>   const id = target.id;
> 
>   this.setState({
>     [id]: value
>   }, () => {
>     this.sendDataToApp(this.state);
>   })
> }
> ```
>
> 