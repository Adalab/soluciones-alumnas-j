import React from 'react';



const Clubs = props => {
    const members = props.membersArray;
    const membersArrayJSX = members.map(element => {
            return(
                <li>{element}</li>
            );
       })


    return(
        <li className="card">
            <span><i className={props.icon}></i></span>
            <div className="card__info">
                <h2>{props.name}</h2>
                <div className="members">
                    <h4 className="members__title">Members:</h4>
                    <ul className="members__list">
                        {membersArrayJSX}
                    </ul>
                </div>
            </div>
        </li>
    )
}


export default Clubs;