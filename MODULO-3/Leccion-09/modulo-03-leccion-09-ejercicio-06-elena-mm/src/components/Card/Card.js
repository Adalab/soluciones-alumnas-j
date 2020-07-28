import React from 'react';

import './Card.css';

const Card = (props) => {
    const {
        name,
        description,
        language
    } = props.updatedUser;

    return (
        <div className="card">
            <h1>{name || 'Título de la película'}</h1>
            <p>{description || 'Descripción de la película'}</p>
            <p>{language || 'Idioma'}</p>
        </div>
    )
}


export default Card;