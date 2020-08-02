import React from 'react';
import './Show.css';


const Show = props => {

    return (
        <div className="Show">
            <img src={props.image} alt={props.name} />
            <h4>{props.name}</h4>
            <p>Stars: {props.score}</p>
            <p>Status:{props.status}</p>
        </div>)
}


export default Show;