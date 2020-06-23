import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Counter from './Counter'
import Icon from './Icon'

class Player extends PureComponent {
  static PropTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number,
    score: PropTypes.number.isRequired,
    index: PropTypes.number,
    removePlayer: PropTypes.func,
    changeScore: PropTypes.func,
  }

  render() {
    const { name, id, score, index, removePlayer, changeScore } = this.props
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>
            ✖
          </button>
          <Icon />
          {name}
        </span>

        <Counter score={score} changeScore={changeScore} index={index} />
      </div>
    )
  }
}

export default Player
