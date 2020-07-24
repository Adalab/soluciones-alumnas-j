import React from 'react';
import Item from './Item';

const arrayOfItems = [
    {
      name: 'Cereales con chocolate',
      description: 'Cereales rellenos de chocolate',
      quantity: 2,
      category: 'Cereales',
      price: 5
    },
    {
      name: 'Hamburguesa con queso',
      description: 'Hamburguesa rica y saludable',
      quantity: 1,
      category: 'Fast-food',
      price: 15
    },
    {
      name: 'Agua mineral',
      description: 'Agua de un charco del Himalaya',
      quantity: 2,
      category: 'Bebida',
      price: 5
    }
  ];



class ItemList extends React.Component {
    render() {

        // Filtrar elementos cuyo precio sea inferior a 10
        const arrayOfItemsBelow10 = arrayOfItems.filter(item => item.price < 10);

        // Imprimir elementos filtrados
        const arrayOfItemsJSX = arrayOfItemsBelow10.map(element => {
            return (
                    <li>
                        <Item 
                        name={element.name} 
                        // description={element.description} 
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