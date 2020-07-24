import React from 'react';


class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hour: ''
        }
        this.updateClock = this.updateClock.bind(this);
        setInterval(this.updateClock, 1000)
    }

    updateClock() {
        // recoge el día de hoy
        const date = new Date();
        // recoge las horas, minutos y segundos en formato 
        const time = date.getHours() + ':' +  date.getMinutes() + ':' + date.getSeconds();  
        // cambia el estado
        this.setState({
            hour: time
        })
    }

    render() {
        return(
            <p>{this.state.hour}</p>
        )
    }
}

export default Clock;