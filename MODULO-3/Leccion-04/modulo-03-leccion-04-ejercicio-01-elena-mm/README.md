# README

Lógica de este ejercicio:

1. Cojo el array con la información que nos da el ejercicio (`arrayOfItems`) y le voy a aplicar un método funcional de arrays, que es **`map`**. 👉🏻 Recuerda que map nos permite coger un array y aplicarle una función a cada elemento de ese array para **generar otro array** con el resultado de aplicar dicha función.

2. la función que voy a aplicar en el método `map` es básicamente de retornar código JSX pero con la información de cada elemento del array inicial (`arrayOfItems`). La sintaxis queda así:

   ```JSX
   const arrayOfItemsJSX = arrayOfItems.map(element => {
         return (
           <li>
             <Item 
               name={element.name} 
               description={element.description} 
               quantity={element.quantity}
               category={element.category}
               price={element.price} 
               />
           </li>
         )
       });
   ```

   > Esto genera un array llamado `arrayOfITemsJSX` que llenamos con items con el código de JSX que hemos escrito ahí. La diferencia es que por cada atributo (name, description, quantity...) su valor será el valor de las propiedades de los objetos que había en el array inicial:
   >
   > ```js
   > const arrayOfItems = [
   >   {
   >     name: 'Cereales con chocolate',
   >     description: 'Cereales rellenos de chocolate',
   >     quantity: 2,
   >     category: 'Cereales',
   >     price: 5
   >   },
   >   {
   >     name: 'Hamburguesa con queso',
   >     description: 'Hamburguesa rica y saludable',
   >     quantity: 1,
   >     category: 'Fast-food',
   >     price: 15
   >   },
   >   {
   >     name: 'Agua mineral',
   >     description: 'Agua de un charco del Himalaya',
   >     quantity: 2,
   >     category: 'Bebida',
   >     price: 5
   >   }
   > ];
   > ```

Nos quedaría tal que así:

```JSX

class ItemList extends React.Component {
  render() {
    const arrayOfItemsJSX = arrayOfItems.map(element => {
      return (
        <li>
          <Item 
            name={element.name} 
            description={element.description} 
            quantity={element.quantity}
            category={element.category}
            price={element.price} 
            />
        </li>
      )
    });


    return (
      <ul className="item-list">
        {arrayOfItemsJSX}
      </ul>
    );
  }
}

export default ItemList;
```



—🦊 [EMM](https://github.com/elemarmar)

