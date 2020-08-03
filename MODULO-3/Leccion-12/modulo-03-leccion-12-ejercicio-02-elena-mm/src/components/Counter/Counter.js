import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          counter: 0
        };
        this.incrementCounter = this.incrementCounter.bind(this);
      }
      componentDidMount() {
        console.log('Se está ejecuntando el método componentDidMount');
        this.intervalId = setInterval(this.incrementCounter, 1000);
      }
      componentWillUnmount() {
        console.log('Se está ejecuntando el método componentWillUnmount');
        clearInterval(this.intervalId);
      }
      incrementCounter() {
        console.log('Se está ejecuntando el método incrementCounter');
        this.setState(prevState => {
          return { counter: prevState.counter + 1 };
        });
      }

  render() {
    console.log('Se está ejecuntando el método render');
    return <div>Contador: {this.state.counter}</div>;
  }
}

export default Counter;