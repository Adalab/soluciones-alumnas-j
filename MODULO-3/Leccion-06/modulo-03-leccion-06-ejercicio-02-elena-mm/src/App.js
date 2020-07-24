import React from 'react';
import logo from './logo.svg';
import './App.css';

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

export default App;
