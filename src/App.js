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

    fetch("http://localhost:3000/api/v1/users/1")
    .then(r => r.json())
    .then(user => this.setState({yourTeam: user.players}))

  }

  addToTeam = (playerObj) => {
    if (this.state.yourTeam.filter(player => player.id === playerObj.id).length === 0 ){
      fetch("http://localhost:3000/api/v1/users/1", {
        method: 'PATCH',
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify({player_id: playerObj.id})
      })
      .then(r => r.json())
      .then(players => this.setState({yourTeam: players}))
      // .then(this.setState({yourTeam}))
    } 
  }

  removeFromTeam = (playerObj) => {
    fetch("http://localhost:3000/api/v1/users/1", {
      method: 'DELETE',
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify({player_id: playerObj.id})
      })
      .then(r => r.json())
      .then(players => this.setState({yourTeam: players}))
  }
  

  render() {
    return (
      <div className="App">
        < YourTeamContainer yourTeam={this.state.yourTeam} clickHandler={this.removeFromTeam}/>
        <br />
        < PlayersContainer players={this.state.players} clickHandler={this.addToTeam} />
      </div>
    )
  }
}

export default App;
