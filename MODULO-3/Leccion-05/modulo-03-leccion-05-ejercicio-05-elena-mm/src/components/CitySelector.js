import React from 'react';
import CityImage from './CityImage';

class CitySelector extends React.Component {
    constructor(props) {
        super(props);
        this.selectedCity = '';
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(ev) {
        this.selectedCity = ev.target.value;
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <select name="destinies" onChange={this.handleClick}>
                    <option value="...">...</option>
                    <option value="Praga">Praga</option>
                    <option value="Buenos Aires">Buenos Aires</option>
                    <option value="Boston">Boston</option>
                    <option value="Sydney">Sydney</option>
                    <option value="Tokio">Tokio</option>
                </select>
                <CityImage city={this.selectedCity} />
            </div>
        )
    }
}

export default CitySelector;