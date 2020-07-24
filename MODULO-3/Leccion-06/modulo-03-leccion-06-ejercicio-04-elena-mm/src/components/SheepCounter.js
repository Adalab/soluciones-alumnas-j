import React from 'react';

class SheepCounter extends React.Component {
    constructor(props) {
        super(props);
        // estado inicial, contador a 0
        this.state = {
            counter: 0
        }
        this.increaseCounter = this.increaseCounter.bind(this);
    }

    increaseCounter() {
        // actualizar contador (necesitamos función callback porque nos basamos en el estado anterior)
        this.setState((prevState) => {
            const newCounter = prevState.counter++;
            return {
                counter: newCounter
            }
        })
    }

    render() {
        return(
            <div>
                <p>{this.state.counter}</p>
                <button onClick={this.increaseCounter}>Cuenta ovejas</button>
            </div>
        )
    }
}


export default SheepCounter;