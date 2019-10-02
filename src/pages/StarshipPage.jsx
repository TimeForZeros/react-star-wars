import React from 'react';
import {Link} from 'react-router-dom';

const StarshipPage = (props) => {

    const ship= props.getStarship(props.match.params.ship);

    return (
        <div>
            {
                <div>
                <ul>
                <li> Name: {ship.name}</li>
                </ul>
                <li> Model: {ship.model}</li>
                <Link to='/'>Return</Link>
                </div>
            }
        </div>
    )

}

export default StarshipPage;