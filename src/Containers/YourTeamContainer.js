import React from 'react'
import PlayerCard from '../Components/PlayerCard';
import { Card } from 'semantic-ui-react';

const YourTeamContainer = (props) => {

    const yourTeamArray = () => {
      const yourTeam = props.yourTeam.map(player => < PlayerCard key={player.id} player={player} clickHandler={props.clickHandler}/>)
      return yourTeam
    };

    return (
        <React.Fragment>
            <h1> {props.yourTeam.length > 0 ? "YOUR TEAM" : "CHOOSE YOUR TEAM"} </h1>
            <Card.Group>
                {yourTeamArray()}
            </Card.Group>
        </React.Fragment>
    )
  
}

export default YourTeamContainer;