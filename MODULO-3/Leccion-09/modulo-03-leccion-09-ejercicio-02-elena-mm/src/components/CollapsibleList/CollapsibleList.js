import React from 'react';
import data from '../../api/data.json';
import Collapsible from '../Collapsible/Collapsible';


class CollapsibleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            palettes: data
        }
    }

    render() {
        const  collapsibleItems = this.state.palettes.map(el => {
            return (
                <Collapsible 
                key={el.name}
                name={el.name}
                source={el.from} />
            );
        })

        return (
            <ul>
                {collapsibleItems}
            </ul>)
    }
}


export default CollapsibleList;