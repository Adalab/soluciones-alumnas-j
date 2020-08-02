import React from 'react';

import Show from '../Show/Show';
import './ShowList.css';


const ShowList = props => {

    const renderShows = () => {
        return (
            // primero filtramos 
            props.shows.filter(show => {
            if (props.running) {
                return show.status === "Running";
            } else {
                return true;
            }
        })
        .map(show => {
            return <Show 
                    key={show.id}
                    id={show.id}
                    image={show.image}
                    name={show.name}
                    score={show.score}
                    status={show.status}
                    />
        }))
    }

    return (
        <div className="ShowList">
            {renderShows()}
        </div>);
}


export default ShowList;