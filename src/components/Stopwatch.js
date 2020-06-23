import React, { Component } from 'react'

export class Stopwatch extends Component {
  state = {
    isRunning: false,
    elapsedTime: 0,
    previousTime: 0,
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 100)
  }

  tick = () => {
    if (this.state.isRunning) {
      const now = Date.now()
      this.setState((prevState) => ({
        previousTime: now,
        elapsedTime:
          now - prevState.elapsedTime + (now - this.state.previousTime),
      }))
    }
  }

  handelStopwatch = () => {
    this.setState((prevState) => ({
      isRunning: !prevState.isRunning,
    }))
    if (!this.state.isRunning) {
      this.setState({ previousTime: Date.now() })
    }
  }

  render() {
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">0</span>
        <button onClick={this.handelStopwatch}>
          {this.state.isRunning ? 'Stop' : 'start'}
        </button>
        <button>Reset</button>
      </div>
    )
  }
}

export default Stopwatch
