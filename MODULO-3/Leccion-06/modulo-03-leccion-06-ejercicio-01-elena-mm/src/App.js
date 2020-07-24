import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);

    // Crear estado inicial (vacío)
    this.state = {
      content: ''
    };
  }

  // Función que cambia valor del <p> según lo que escribamos en input
  handleInput(ev) {
    const inputValue = ev.target.value;
    this.setState({
      content: inputValue
    })
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.handleInput}></input>
        <p>{this.state.content}</p>
      </div>
    );
  }
}

export default App;
