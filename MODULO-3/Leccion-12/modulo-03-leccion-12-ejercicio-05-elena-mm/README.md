# README

![](https://media1.giphy.com/media/Kt3lpGbEkM8i4/giphy.gif?cid=ecf05e47a75da733dab0c089add411917bbfc536a749d27e&rid=giphy.gif)

**TextInput.js**

```jsx
class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
    this.handleInput = this.handleInput.bind(this);
  }

  // se ejecuta nada más cargarse el componente y renderizarse
  componentDidMount() {
    const newInput = localStorage.getItem('userInput');
    if (newInput) {
      this.setState({input: newInput})
    }
  }

  // se ejecuta cada vez que el valor del estado cambia
  componentDidUpdate() {
    localStorage.setItem('userInput', this.state.input); // no estoy guardando un objeto, sino un string, por lo queno necesito hacer stringify
  }

  handleInput(ev) {
    this.setState({input: ev.target.value})
  }

  render() {
    return <input 
             type="text" 
             onChange={this.handleInput} 
             value={this.state.input}></input>;
  }
}
```

