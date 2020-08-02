import React from 'react';
import './FilterControls.css';
// import FilterControl from '../FilterControl/FilterControl';


const FilterControls = props => {

    return (
        <div className="FilterControls">
            <input 
                type="text" 
                onChange={props.handleChangeInput} 
                value={props.textFilter} 
            />
            <input 
                type="checkbox" 
                name="running"
                id="running"
                onChange={props.handleCheckedInput}
                // onChange={}
                />
            <label htmlFor="running">Running</label>
        </div>)
}


export default FilterControls;