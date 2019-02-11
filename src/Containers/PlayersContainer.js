import React, { Component } from 'react'
import PlayerCard from "../Components/PlayerCard";
import { Card } from 'semantic-ui-react';
import Search from '../Components/Search';


class PlayersContainer extends Component {

  state = {
    search: ""
  }

  showPlayers = () => {
    const players = this.props.players.filter(player => player.name.toLowerCase().includes(this.state.search.toLowerCase())).map(player => < PlayerCard player={player} key={player.id} clickHandler={this.props.clickHandler} />)
    return players
  }

  inputValue = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  render () {

    return (
      <React.Fragment>
        <h1>PLAYERS</h1>
        < Search search={this.state.search} changeHandler={this.inputValue}/>
        < Card.Group >
          {this.showPlayers()}
        </ Card.Group >
      </React.Fragment>
    )
  }
}

export default PlayersContainer;

