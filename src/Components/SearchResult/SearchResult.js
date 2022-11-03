import './Searchresult.css'
import React from 'react'
import { Tracklist } from '../Tracklist/Tracklist'
import PropTypes from 'prop-types'

export class SearchResults extends React.Component {
  render () {
    return (
        <div className="SearchResults">
            <h2>Results</h2>
            <Tracklist tracks={this.props.searchResults}/>
        </div>
    )
  }
}

SearchResults.propTypes = {
  searchResults: PropTypes.array
}
