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

        const {
            value,
            id,
        } = target;

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
      const {
          name,
          description,
           language
       } = this.state;

        return(
            <form>
                <label>
                    Nombre
                    <input 
                        type="text" 
                        id="name" 
                        value={name}
                        onChange={this.handleChange}/>
                    </label>

                <label>
                    Descripción
                    <textarea 
                        value={description}
                        id="description"
                        onChange={this.handleChange}/>
                </label>

                <label>
                    Escoge el idioma:
                    <select 
                        value={language}
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