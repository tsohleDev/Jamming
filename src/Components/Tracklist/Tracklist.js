import './Tracklist.css'
import React from 'react'
import PropTypes from 'prop-types'
import { Track } from '../Track/Track'

export class Tracklist extends React.Component {
  render () {
    return (
        <div className="TrackList">
            {this.props.tracks.map((track, index) => {
              return <Track track={track} key={index} id={track.id}/>
            })}
        </div>
    )
  }
}

Tracklist.propTypes = {
  tracks: PropTypes.array
}
