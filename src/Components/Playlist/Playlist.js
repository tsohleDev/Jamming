import './Playlist.css'
import React from 'react'
import { Tracklist } from '../Tracklist/Tracklist'
import PropTypes from 'prop-types'

export class Playlist extends React.Component {
  render () {
    return (
            <div className="Playlist">
                <input defaultValue={'New Playlist'}/>
                <Tracklist tracks={this.props.tracks}/>
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
    )
  }
}

Playlist.propTypes = {
  tracks: PropTypes.array.isRequired
}
