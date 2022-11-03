import './Track.css'
import React from 'react'
import PropTypes from 'prop-types'

export class Track extends React.Component {
  renderAction () {
    if (this.props.isRemoval) {
      return <button className='Track-action'>-</button>
    } else {
      return <button className='Track-action'>+</button>
    }
  }

  render () {
    return (
            <div className="Track">
            <div className="Track-information">
                <h3>{this.props.track.name}</h3>
                <p>{this.props.track.artist} | {this.props.track.album}</p>
            </div>
                {this.renderAction()}
            </div>
    )
  }
}

Track.propTypes = {
  isRemoval: PropTypes.bool,
  track: PropTypes.object
}
