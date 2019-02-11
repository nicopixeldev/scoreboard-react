import React from 'react'
import PropTypes from 'prop-types'

const AddPlayerForm  = ({ addPlayer }) => {

    let playerInput = React.createRef()

    let handleSubmit = (e) => {
        e.preventDefault()
        const inputValue = playerInput.current.value
        if (inputValue.trim().length > 0) addPlayer(inputValue)
        e.currentTarget.reset()
    }


    return (
        <form onSubmit={handleSubmit}>
            <input 
                ref={playerInput}
                type="text" 
                placeholder="Enter a player's name" 
            />

            <input 
                type="submit" 
                value="Add player" 
            />
        </form>
    )
}

AddPlayerForm.propTypes = {
    addPlayer: PropTypes.func.isRequired
}

export default AddPlayerForm
