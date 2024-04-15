// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  updateSearchInput = value => {
    this.setState({searchInput: value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResult = suggestionsList.filter(eachInput =>
      eachInput.suggestion
        .toLowerCase()
        .includes(searchInput.toLocaleLowerCase()),
    )

    return (
      <div className="main-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />
        <div className="search-item">
          <div className="search-input">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="Search-icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="search-google"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
          </div>
          <ul className="card">
            {searchResult.map(eachSuggestion => (
              <SuggestionItem
                suggestionsDetails={eachSuggestion}
                key={eachSuggestion.id}
                updateSearchInput={this.updateSearchInput}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
