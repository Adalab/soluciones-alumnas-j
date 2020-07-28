import React from 'react';
import '../stylesheets/FilmCard.css';

class FilmCard extends React.Component {
  render() {
    return (
      <div className='film-card'>
        <h3>Nombre:</h3>
        <p>{this.props.name}</p>
        <h3>Descripción:</h3>
        <p>{this.props.description}</p>
        <h3>Idioma:</h3>
        <p>{this.props.language}</p>
        <h3>Edad:</h3>
        <p>{this.props.age}</p>
        <h3>Género:</h3>
        <p>{this.props.genres}</p>
      </div>
    );
  }
}
FilmCard.defaultProps = {
  name: 'Film name.',
  description: 'Film description.',
  language: 'Film language.',
  age: 'A',
  genres: ['3 géneros a elegir'],
};
export default FilmCard;
