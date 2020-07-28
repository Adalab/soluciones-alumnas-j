import React from 'react';
import '../stylesheets/FilmForm.css';

class FilmForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleFormChange = this.handleFormChange.bind(this);
    // ejercicio 3
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  handleFormChange(ev) {
    const element = ev.currentTarget;
    this.props.handleFormChange(element);
  }

  handleRadioChange(ev) {
    const element = ev.currentTarget;
    this.props.handleRadioChange(element);
  }

  handleCheckboxChange(ev) {
    const element = ev.currentTarget;
    this.props.handleCheckboxChange(ev, element);
  }

  render() {
    return (
      <form className='film-form'>
        <h2>FORMULARIO</h2>
        <label htmlFor='name'>
          <p>Nombre:</p>
          <input
            id='name'
            name='name'
            type='text'
            placeholder='Nombre de la película'
            value={this.props.name}
            onChange={this.handleFormChange}
          />
        </label>
        <label htmlFor='description'>
          <p>Descripción:</p>
          <textarea
            id='description'
            name='description'
            placeholder='Escribe aquí la descripción de la película'
            value={this.props.description}
            onChange={this.handleFormChange}
          ></textarea>
        </label>
        <label htmlFor='languages'>
          <p>Idioma:</p>
          <select
            name='language'
            value={this.props.language}
            onChange={this.handleFormChange}
          >
            <option value=''>...</option>
            <option value='Español'>Español</option>
            <option value='Ingles'>Ingles</option>
            <option value='Portugués'>Portugués</option>
          </select>
        </label>
        <div className='ageSection'>
          <h3>Edad:</h3>
          <div className='age'>
            <label htmlFor='age1'>
              <input
                id='age1'
                type='radio'
                value='A'
                name='ageClasification'
                onChange={this.handleRadioChange}
              />
              <p>A: Todos los públicos</p>
            </label>
          </div>
          <div className='age'>
            <label htmlFor='age2'>
              <input
                id='age2'
                type='radio'
                value='7'
                name='ageClasification'
                onChange={this.handleRadioChange}
              />
              <p>7 años</p>
            </label>
          </div>
          <div className='age'>
            <label htmlFor='age3'>
              <input
                id='age3'
                type='radio'
                value='12'
                name='ageClasification'
                onChange={this.handleRadioChange}
              />
              <p>12 años</p>
            </label>
          </div>
          <div className='age'>
            <label htmlFor='age4'>
              <input
                id='age4'
                type='radio'
                value='16'
                name='ageClasification'
                onChange={this.handleRadioChange}
              />
              <p>16 años</p>
            </label>
          </div>
          <div className='age'>
            <label htmlFor='age5'>
              <input
                id='age5'
                type='radio'
                value='18'
                name='ageClasification'
                onChange={this.handleRadioChange}
              />
              <p>18 años</p>
            </label>
          </div>
        </div>
        {
          <div className='genderSection'>
            <h3>Género:</h3>
            <div className='gender'>
              <label htmlFor='gender1'>
                <input
                  id='gender1'
                  type='checkbox'
                  value='Comedia'
                  name='genderClasification'
                  onChange={this.handleCheckboxChange}
                />
                <p>Comedia</p>
              </label>
            </div>
            <div className='gender'>
              <label htmlFor='gender2'>
                <input
                  id='gender2'
                  type='checkbox'
                  value='Drama'
                  name='genderClasification'
                  onChange={this.handleCheckboxChange}
                />
                <p>Drama</p>
              </label>
            </div>
            <div className='gender'>
              <label htmlFor='gender3'>
                <input
                  id='gender3'
                  type='checkbox'
                  value='Fantasía'
                  name='genderClasification'
                  onChange={this.handleCheckboxChange}
                />
                <p>Fantasía</p>
              </label>
            </div>
            <div className='gender'>
              <label htmlFor='gender4'>
                <input
                  id='gender4'
                  type='checkbox'
                  value='Acción'
                  name='genderClasification'
                  onChange={this.handleCheckboxChange}
                />
                <p>Acción</p>
              </label>
            </div>
            <div className='gender'>
              <label htmlFor='gender5'>
                <input
                  id='gender5'
                  type='checkbox'
                  value='Familia'
                  name='genderClasification'
                  onChange={this.handleCheckboxChange}
                />
                <p>Familia</p>
              </label>
            </div>
            <div className='gender'>
              <label htmlFor='gender6'>
                <input
                  id='gender6'
                  type='checkbox'
                  value='Terror'
                  name='genderClasification'
                  onChange={this.handleCheckboxChange}
                />
                <p>Terror</p>
              </label>
            </div>
          </div>
        }
      </form>
    );
  }
}
export default FilmForm;
