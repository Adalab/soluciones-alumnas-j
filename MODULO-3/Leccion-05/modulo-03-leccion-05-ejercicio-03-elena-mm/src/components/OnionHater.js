import React from 'react';


class OnionHater extends React.Component {

    constructor(props) {
        super(props);
        this.isHating = false;
        this.handleInput = this.handleInput.bind(this);
      }

    handleInput(ev) {
        //Al convertir lo que introduzca el usuario en letras minúsculas, no importa cómo lo escriba (con mayúsculas o no)
        const value = ev.target.value.toLowerCase();
        const appEl = document.querySelector('.App');
        if(value.includes('cebolla')) {
            this.isHating = true;
            appEl.classList.add('red');
        } else {
            this.isHating = false;
            appEl.classList.remove('red');
        }
    this.forceUpdate();
    }


    render() {
        return (
            <textarea className="text-box" onChange={this.handleInput}></textarea>
        )
    }
}

export default OnionHater;