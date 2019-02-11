import React, { Component } from 'react'

class Timer extends Component {
    state = {
        isRunning: false,
        elapsedTime: 0,
        previousTime: 0
    }

    // call immediately after the component was mounted
    componentDidMount() {
        this.intervalID = setInterval(() => this.tick(), 100) // start the timer
    }

    // it's called just before a component is unmounted from the DOM
    // it can be used to clear anything
    componentWillUnmount() {
        clearInterval(this.intervalID)
    }

    tick = () => {
       if (this.state.isRunning) {
           const now = Date.now()
           this.setState(prevState => ({ 
               previousTime: now,
               elapsedTime: prevState.elapsedTime + (now - prevState.previousTime)
           }))
       }
    }

    handleStopTimer = () => {
        this.setState(prevState => ({
            isRunning: !prevState.isRunning
        }))
        if (!this.state.isRunning) {
            this.setState({ previousTime: Date.now() })
        }
    }

    handleReset = () => {
        this.setState({ elapsedTime: 0 })
    }

    render () {
        const seconds = Math.floor(this.state.elapsedTime / 1000)
        return (
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <span className="stopwatch-time">{ seconds }</span>
                <button onClick={this.handleStopTimer}>
                    {this.state.isRunning? 'Stop' : 'Start'}
                </button>
                <button onClick={ this.handleReset }>Reset</button>
            </div>
        )
    }
}

export default Timer