import './index.css'

const NotFound = props => {
  const homeBtn = () => {
    const {history} = props
    history.replace('/')
  }
  return (
    <div className="not-found-container">
      <h1 className="not-found-name">Page Not Found</h1>
      <p className="not-suggest">
        we are sorry, the page you requested could not be found Please go back
        to the homepage
      </p>
      <button type="button" className="not-home-btn" onClick={homeBtn}>
        Home Page
      </button>
    </div>
  )
}

export default NotFound
