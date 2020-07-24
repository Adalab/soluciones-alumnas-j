import React from 'react';
import Club from './Club';

class ClubList extends React.Component {
  render() {
    // Llamamos a las props del array de clubs
    // En este caso estamos llamando a cada CLUB compuesto por icono, nombre y miembros
    const clubs = this.props.clubActivity;
    // Llamamos al metodo map para que nos devuelva el mismo array con los datos del componente/plantilla Club
    const newClubs = clubs.map((element) => {
      return (
        <Club name={element.name} icon={element.fa} members={element.members} />
      );
    });
    // Nos devuelve el nuevo array de clubs
    return <div>{newClubs}</div>;
  }
}
export default ClubList;
