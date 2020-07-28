import React from 'react';

import './Collapsible.css';



class Collapsible extends React.Component {
    constructor(props) {
        super(props);
        // estado que nos dice si el colapsable está abierto (true) o cerrado (false)
        this.state = {
            isCollapsibleOpen: false
        }
        this.handleCollapsibleClick = this.handleCollapsibleClick.bind(this);
    }

    // función que maneja lo que ocurre cuando hacemos click en el componente colapsable
    // cda vez que pulsemos el colapsable, el estado isCollapsible Open se inverte (para que
    // el colapsable se cierre si estaba abierto y viceversa)

    // Nota: lo he puesto directamente negando el valor original del estado pero normalmente la mejor
    // práctica es que cuando actualizamos un estado en base al estado original (en este caso el valor contrario
    // del valor original, tenemos que utilizar una función callback. Como esta aplicación es muy sencilla pues
    // no da problemas)
    handleCollapsibleClick = (ev) => {
        // actualizar estado a colapsable abierto
        this.setState({ isCollapsibleOpen: !this.state.isCollapsibleOpen})
        
    }

    render() {
        return (
            <li className="collapsible-box"
                onClick={this.handleCollapsibleClick}>
                <div className="collapsible">
                    <h2>{this.props.name}</h2>
                    <span><i className="fas fa-arrow-circle-down"></i></span>
                </div>

                {/* Resolución por operador ternario, si isCollapsibleOpen es true, entonces muetra el texto ese,
                    si no, pues nada (null). Esto se puede hacer tb con condicionales, etc. */}
                {this.state.isCollapsibleOpen ? 
                    <div className="content">
                        <p>{this.props.source}</p>
                    </div> : null}

            </li>
        );
    }
}


export default Collapsible;