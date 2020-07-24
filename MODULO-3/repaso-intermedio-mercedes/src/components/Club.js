import React from 'react';

class Club extends React.Component {
  render() {
    // Llamamos a las props del array de clubs
    // En este caso estamos llamando a los MIEMBROS de cada actividad
    const members = this.props.members;
    // Llamamos al metodo map para que nos devuelva el mismo array de miembros pero cada uno metido en un elemento de la lista
    const newMembers = members.map((element) => {
      return <li>{element}</li>;
    });
    return (
      <div className='activity'>
        {/* Llamamos a cada icono de la guia de clubs */}
        <div className={this.props.icon}></div>{' '}
        <div className='activity__info'>
          {/* Llamamos a cada titulo/nombre de la guia de clubs */}
          <h2 className='activity__info__title'>{this.props.name}</h2>{' '}
          {/* Llamamos a la lista de miembros de cada club */}
          <p className='activity__info__titleList'>Members:</p>
          <ul className='activity__info__List'>{newMembers}</ul>{' '}
        </div>
      </div>
    );
  }
}
export default Club;
