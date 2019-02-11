import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon/Icon.js'

import Counter from '../Counter/Counter'

class Player extends PureComponent {

    static propTypes = {
        changeScore: PropTypes.func,
        removePlayer: PropTypes.func,
        name: PropTypes.string.isRequired,
        id: PropTypes.number, 
        score: PropTypes.number.isRequired,
        index: PropTypes.number,
        isHighScore: PropTypes.bool
    }

    render () {
      const { name, id, score, index, removePlayer, changeScore, isHighScore} = this.props
      console.log('desde player', isHighScore)
      return (
        <div className="player">
          <span className="player-name">
            <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
            <Icon isHighScore={isHighScore} />
            { name }
          </span>

          <Counter 
            score={score} 
            changeScore={changeScore}
            index={index}
          />

        </div>
      )
  }
}

export default Player