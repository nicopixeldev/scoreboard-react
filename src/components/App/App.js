import React, { Component } from 'react'

import Header from '../Header/Header'
import Player from '../Player/Player'
import AddPlayerForm from '../AddPlayerForm/AddPlayerForm'

class App extends Component {
    state = {
      players: [
        {
          name: "Guil",
          score: 0,
          id: 1
        },
        {
          name: "Treasure",
          score: 0,
          id: 2
        },
        {
          name: "Ashley",
          score: 0,
          id: 3
        },
        {
          name: "James",
          score: 0,
          id: 4
        }
      ]
    }

    prevPlayerId = 4

    getHighScore = () => {
      const scores = this.state.players.map( p => p.score );
      const highScore = Math.max(...scores);
      if (highScore) {
        return highScore;
      } 
      return null;
    }

    handleScoreChange = (index, delta) => {
      
      this.setState( prevState => ({
        score: !prevState.players[index].score && delta === -1 ? 0 : prevState.players[index].score += delta
      }))
      
    }

    handleAddPlayer = (name) => {
      this.setState(prevState => ({
        players: [
          ...prevState.players,
          {
          name,
          score: 0,
          id: this.prevPlayerId += 1
        }]
      }))
    }
  
    handleRemovePlayer = (id) => {
      this.setState( prevState => {
        return {
          players: prevState.players.filter( p => p.id !== id )
        };
      });
    }

    getWinnerId = () => {
      this.state.players.forEach((player) => {
        if (player.score > 0) return player.id
      })
    }

    isWinner = (id) => {
      let winnerId = this.getWinnerId()
      if (winnerId === undefined) return false
      return true
      // return winner.id === id
    }
  
    render() {
      const highScore = this.getHighScore()
      return (
        <div className="scoreboard">
          <Header 
            title="Scoreboard"
            players={ this.state.players }
          />
    
          {/* Players list */}
          {this.state.players.map( (player, index) => 
               <Player 
                name={player.name}
                id={player.id}
                index={index}
                key={player.id.toString()}
                removePlayer={this.handleRemovePlayer}
                score={player.score}
                changeScore={this.handleScoreChange}
                isWinner={() => this.isWinner(player.id)}
                isHighScore={highScore === player.score}
              />
          )}
          <AddPlayerForm 
            addPlayer={this.handleAddPlayer}
          />
        </div>
      );
    }
  }

export default App