import React from 'react';

import './Card.css';

const Card = (props) => {
    return (
        <div className="card">
            <h1>{props.updatedUser.name || 'Título de la película'}</h1>
            <p>{props.updatedUser.description || 'Descripción de la película'}</p>
            <p>{props.updatedUser.language || 'Idioma'}</p>
        </div>
    )
}


export default Card;