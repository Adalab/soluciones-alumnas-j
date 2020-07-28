import React from 'react';
import FilmForm from './FilmForm';
import FilmCard from './FilmCard';
import '../stylesheets/Film.css';

class Film extends React.Component {
  constructor(props) {
    super(props);
    // describimos el estado inicial
    this.state = {
      name: '',
      description: '',
      language: '',
      age: '',
      genres: [],
    };
    // declaramos la funcion manejadora con "bind"
    this.handleFormChange = this.handleFormChange.bind(this);
    // ejercicio 3
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  // funcion manejadora
  handleFormChange(element) {
    //Entre corchetes va el operador [key]
    // Estamos diciendo que la variable name (name, description, language..) del elemento = al atributo value que introduzcamos
    this.setState({
      [element.name]: element.value,
    });
    console.log(this.state);
  }

  handleRadioChange(element) {
    this.setState({
      age: element.value,
    });
  }

  /* si el input:checked.lengh>3{
    this.checked=false
  } */

  handleCheckboxChange(ev, element) {
    const value = element.value;
    // que cuando clicke para quitarlo no cuente como una seleccion mas
    if (this.state.genres.includes(value)) {
      const newGender = this.state.genres.filter((genre) => genre !== value);
      this.setState({
        genres: newGender,
      });
    } else if (
      !this.state.genres.includes(value) &&
      this.state.genres.length < 3
    ) {
      const newGender = [...this.state.genres, ' ' + value];
      this.setState({
        genres: newGender,
      });
    } else {
      ev.preventDefault();
      alert('Solo puedes elegir 3 géneros.');
    }
  }

  render() {
    return (
      // Aqui llamamos a los componentes formulario y tarjeta
      // Dentro de los componentes definimos lo que llamaremos por props
      // Y ademas en este caso actualizamos el estado con la función handleFormChange
      <div className='film'>
        <FilmForm
          handleFormChange={this.handleFormChange} //Lifting de la hija a la madre
          handleRadioChange={this.handleRadioChange} //Lifting
          handleCheckboxChange={this.handleCheckboxChange} //Lifting
          name={this.state.name} //Pasamos las props a la hija
          description={this.state.description}
          language={this.state.language}
        />
        <FilmCard
          name={this.state.name}
          description={this.state.description}
          language={this.state.language}
          age={this.state.age}
          genres={this.state.genres}
        />
      </div>
    );
  }
}

export default Film;
