import React from 'react';

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        input: ''
    }
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
      console.log('mount');
    const newInput = localStorage.getItem('userInput');
    if (newInput) {
        console.log(newInput);
        this.setState({input: newInput})
    }
  }

  componentDidUpdate() {
    console.log('update');
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

export default TextInput;