// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionsDetails, updateSearchInput} = props
  const {suggestion} = suggestionsDetails

  const onChangeInput = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="item-card">
      <p className="para">{suggestion}</p>
      <button type="button" onClick={onChangeInput}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
