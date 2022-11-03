import './App.css'
import React from 'react'
import { SearchBar } from '../SearchBar/SearchBar'
import { SearchResults } from '../SearchResult/SearchResult'
import { Playlist } from '../Playlist/Playlist'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      searchResults: [{ name: 'name1', artist: 'artist1', album: 'album1', id: 1 }],
      playlist: 'my playlist',
      tracks: [{ name: 'name1', artist: 'artist1', album: 'album1', id: 1 }]
    }
  }

  addTrack (track) {
    const tracks = this.state.playlist.tracks
    if (!tracks.finds(match => match.id === track.id)) {
      this.playlist.tracks.push(track)
    }
  }

  render () {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar/>
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}/>
            <Playlist tracks={this.state.tracks}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App
