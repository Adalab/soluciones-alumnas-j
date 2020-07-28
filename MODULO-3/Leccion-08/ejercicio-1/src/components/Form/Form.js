import React from 'react';

import './Form.css';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            language: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(ev) {
        const target = ev.target;
        const value = target.value;
        const id = target.id

        this.setState({
            [id]: value
        }, () => {
            this.sendDataToApp(this.state);
        })
    }

    sendDataToApp(data) {
        this.props.handleFormInfo(data);
    }


    render() {

        return(
            <form>
                <label>
                    Nombre
                    <input 
                        type="text" 
                        id="name" 
                        value={this.state.name}
                        onChange={this.handleChange}/>
                    </label>

                <label>
                    Descripción
                    <textarea 
                        value={this.state.description}
                        id="description"
                        onChange={this.handleChange}/>
                </label>

                <label>
                    Escoge el idioma:
                    <select 
                        value={this.state.language}
                        id="language"
                        onChange={this.handleChange}>
                        <option value="Español" defaultChecked>Español</option>
                        <option value="Inglés">Inglés</option>
                        <option value="Portugués">Portugués</option>
                    </select>
                </label>
            </form>);
    }
}



export default Form;