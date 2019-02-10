import React, { Component } from 'react';
import './App.css';
import PlayersContainer from "./Containers/PlayersContainer";
import YourTeamContainer from './Containers/YourTeamContainer';

class App extends Component {

  state = {
    players: [],
    yourTeam: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/api/v1/players")
    .then( r => r.json())
    .then(players => this.setState({players}))
  }

  addToTeam = (playerObj) => {
    if (!this.state.yourTeam.includes(playerObj)){
      const yourTeam = [playerObj, ...this.state.yourTeam]
      this.setState({yourTeam})
    } 
  }

  removeFromTeam = (playerObj) => {
    const yourTeam = this.state.yourTeam.filter(player => player.id !== playerObj.id)
    this.setState({yourTeam})
  }
  

  render() {
    return (
      <div className="App">
        < YourTeamContainer yourTeam={this.state.yourTeam} clickHandler={this.removeFromTeam} />
        <br />
        < PlayersContainer players={this.state.players} clickHandler={this.addToTeam}/>
      </div>
    )
  }
}

export default App;
