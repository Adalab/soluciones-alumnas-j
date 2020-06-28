# Ternarios

Reescribir la parte del if con ternarios:

```js
let avocados;
const avocadoPrice = 1.5;
const money = 33;

if (money >= avocadoPrice) {
  avocados = money / avocadoPrice;
} else {
  avocados = 0;
}
```

```js
avocados = money >= avocadoPrice ? money / avocadoPrice : 0;
```

> Avocados =
>
> - Si `money` >= `avocadoPrice` **?**
>   - `avocados` = `money` /  `avocadoPrice`
> - Si no `:`
>   - `avocados` = 0

