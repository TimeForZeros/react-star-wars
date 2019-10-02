import React from 'react';
import {Link} from 'react-router-dom';

const StarshipPage = (props) => {

    // const ship= props.getStarship(props.match.params.ship);
    const starship = props.getStarship(props.match.params.idx);

    // return (
    //     <div>
    //         {
    //             <div>
    //             <ul>
    //             <li> Name: {ship.name}</li>
    //             <li> Model: {ship.model}</li>
    //             </ul>
    //             <Link to='/'>Return</Link>
    //             </div>
    //         }
    //     </div>
    // )
    return (
        <div className='StarshipPage'>
          {starship ?
            <div className='StarshipPage-starship'>
              <span className='starship-name'><strong>{starship.name}</strong></span>
              <br/>
              <span>MODEL: {starship.model}</span>
              <br/>
              <Link to='/' class='return-link'>RETURN</Link>
            </div>
            :
            <h3>Loading...</h3>
          }
        </div>
    )

}

export default StarshipPage;