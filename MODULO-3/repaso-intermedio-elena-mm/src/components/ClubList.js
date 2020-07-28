import React from 'react';
import Club from './Club';


const ClubList = props => {
    const clubsArray = props.clubinfo;
    const clubsJSX = clubsArray.map(element => {
        return (
                <Club 
                    name={element.name} 
                    icon={element.fa} 
                    membersArray={element.members}
                />

        );
    });

    return(

        <div className="club-list">
            <ul>
            {clubsJSX}
            </ul>
        </div>
    );
}

export default ClubList;