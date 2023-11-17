// Write your code here
import './index.css'

const TabItem = props => {
  const {tabItem, clickingTabItem, isActive} = props
  const {tabId, displayText} = tabItem

  const onClickTabItem = () => {
    clickingTabItem(tabId)
  }

  const activeClass = isActive ? 'active-txt' : ''

  return (
    <li className="listItem">
      <button className={`btn ${activeClass}`} onClick={onClickTabItem}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
