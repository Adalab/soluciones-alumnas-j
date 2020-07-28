# README

![](https://media.giphy.com/media/fTne319LfO6Noh80qD/giphy.gif)

Ejercicio resuelto empleando componente de clase (**App.js**):

*Versión sin comentarios*:

```jsx
const numbers = [1, 4, 6, 8, 45, 89];


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbersListItems: numbers.map(n => <li key={n}>{n}</li>)
  }
  this.filterNumberListItems = 	this.filterNumberListItems.bind(this);
}


filterNumberListItems = (ev) => {
  const target = ev.target;
  const number = parseInt(target.value);
  const numbersFiltered = numbers.filter(n => n > number).map(n => {
    return <li key={n}>{n}</li>
  });
  this.setState({ numbersListItems: numbersFiltered})
}


render() {
  return (
    <div className="App">
    	<form>
    		<label>
    		Introduce un número: 
    	<input 
    		type="text" 
    		onChange={this.filterNumberListItems}/>
		</label>
	</form>
		<ul>
    		{this.state.numbersListItems}
		</ul>
    </div>
	);
	}
}
```

*Versión con comentarios*

```jsx
// constante global que contiene los números
const numbers = [1, 4, 6, 8, 45, 89];


class App extends React.Component {
  constructor(props) {
    super(props);
    // estado que maneja los numeros elegidos en nuestro componente
    // su valor inicial serán los números de la constante global en elementos li
    this.state = {
      numbersListItems: numbers.map(n => <li key={n}>{n}</li>)
  }
  this.filterNumberListItems = this.filterNumberListItems.bind(this);
}

// función que se encarga de filtrar los números (constante global) para coger sólo aquellos
// mayores al número introducido en el input y luego actualizar el estado de numbersListItems
filterNumberListItems = (ev) => {
  const target = ev.target;
  // convierte número tipo string en número
  const number = parseInt(target.value);
  // array que contiene JSX con los elementos de numbers
  // ⚠️ No te olvides de ponerle el key: como los números son únicos (de momento)
  // los voy a utilizar de key
  const numbersFiltered = numbers.filter(n => n > number).map(n => {
    return <li key={n}>{n}</li>
  });
  // actualizar valor del estado numbersListItems
  this.setState({ numbersListItems: numbersFiltered})
}


render() {
  return (
    <div className="App">
    	<form>
    		<label>
    		Introduce un número: 
    		<input 
    		type="text" 
    		onChange={this.filterNumberListItems}/>
		</label>
	</form>
		<ul>
    		{this.state.numbersListItems}
		</ul>
    </div>
    );
    }
}
```

