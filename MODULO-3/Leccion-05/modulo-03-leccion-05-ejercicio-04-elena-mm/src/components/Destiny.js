import React from 'react';
import CityImage from './CityImage';

class Destiny extends React.Component {
    constructor(props) {
        super(props);
        this.myCity = '...';
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler(ev) {
        this.myCity = ev.target.value;
        alert(`Tu destino es ir a ${this.myCity}`)
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <select name="destinies" onChange={this.onChangeHandler}>
                <option value="">...</option>
                    <option value="Buenos Aires">Buenos Aires</option>
                    <option value="Sydney">Sydney</option>
                    <option value="Praga">Praga</option>
                    <option value="Boston">Boston</option>
                    <option value="Tokio">Tokio</option>
                </select>
                <CityImage city={this.myCity} />
            </div>
        )
    }
}

export default Destiny;