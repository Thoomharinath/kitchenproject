import {Link} from 'react-router-dom'
// import {BsStar} from 'react-icons/bs'
import './index.css'

const RestaurantList = props => {
  const {list} = props
  const {id, name, imageUrl, rating, cuisine} = list

  return (
    <Link
      to={`/restaurants/${id}`}
      className="link-details"
      testid="restaurant-item"
    >
      <li className="restaurant-details">
        <img src={imageUrl} alt="restaurant" className="res-image" />
        <div className="rating-name-cuisine">
          <h1 className="res-name">{name}</h1>
          <p className="cuisine-name">{cuisine}</p>
          <div className="rating-cont">
            <img
              src="https://res.cloudinary.com/dydlvwdqp/image/upload/v1634122719/7_Rating_t6jomz.jpg"
              alt="rating"
              className="star"
            />
            <p className="rating">{rating}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default RestaurantList
