import './index.css'

const SuggestionItem = props => {
  const {item, onClickArrow} = props
  const {suggestion} = item

  const clickArrow = () => {
    onClickArrow(suggestion)
  }

  return (
    <li className="list-item">
      <p className="suggestion">{suggestion}</p>
      <button type="button" className="button" onClick={clickArrow}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-icon"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
