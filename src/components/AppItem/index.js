// Write your code here
import './index.css'

const AppItem = props => {
  const {eachAppInfo} = props
  const {appId, imageUrl, appName, category} = eachAppInfo
  return (
    <li className="each-img-container">
      <img src={imageUrl} className="each-img" alt={appName} />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
