![image-20200723140947594](./image-20200723140947594.png)

**App.js**

```jsx
class App extends React.Component {
  constructor(props) {
    super(props);
    // estado inicial: azul
    this.state = {
      color: 'blue'
    }

    // función manejadora 
    this.handleClick = this.handleClick.bind(this);
  }

  // definimos función manejadroa
  handleClick() {
    console.log('Hi');
    this.setState((prevState, props) => {
    let nextColor = prevState.color === 'blue' ? 'red' : 'blue';

    return {
      color: nextColor
    };
  });
  }

  render() {
    return (
      <div className="App">
        <div onClick={this.handleClick} className={`square ${this.state.color}`}></div>
      </div>
    );
  }
}
```

**App.css**

```jsx
/************/

.square {
  height: 90px;
  width: 90px;
  margin: auto;
}

.red {
  background-color: crimson;
}

.blue {
  background-color: blue;
}
```

