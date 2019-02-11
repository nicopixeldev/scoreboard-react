import React from 'react'
import PropTypes from 'prop-types'

import Stats from '../Stats/Stats'
import Timer from '../Timer/Timer'

const Header = ({ players, title }) => {
    return (
      <header>
        <Stats players={players}/>
        <h1>{ title }</h1>
        <Timer />
      </header>
    );
}

Header.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string
}

Header.defaultProps = {
  title: 'Scoreboard'
}

export default Header