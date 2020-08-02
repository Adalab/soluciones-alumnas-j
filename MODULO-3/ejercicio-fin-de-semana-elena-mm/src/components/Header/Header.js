import React from 'react';
import './Header.css';
import FilterControls from '../FilterControls/FilterControls';


const Header = props => {

    return (
        <header className="Header">
            <h1>Series.com</h1>
            <FilterControls 
                handleChangeInput={props.handleChangeInput}
                textFilter={props.textFilter}
                handleCheckedInput={props.handleCheckedInput}/>
        </header>)
}


export default Header;