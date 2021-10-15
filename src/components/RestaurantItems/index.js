import {Component} from 'react'
import KitchenContext from '../../KitchenContext'
import Counter from '../Counter'
import './index.css'

class RestaurantItems extends Component {
  state = {}

  render() {
    const {resList} = this.props
    const {name, imageUrl, rating, cost} = resList

    return (
      <KitchenContext.Consumer>
        {value => {
          const {onAddBtn, localData, removeItem} = value

          const onCartAdd = () => {
            onAddBtn(resList)
          }

          const verify = () => {
            const result = localData.filter(each => each.name === name)

            if (result.length > 0) {
              if (result[0].quantity === 0) {
                removeItem(localData, result[0].name)
                return false
              }
              return true
            }
            return false
          }

          const status = verify()

          return (
            <li className="res-items" tesid="foodItem">
              <img
                src={imageUrl}
                alt="restaurant-id"
                className="res-item-image"
              />
              <div className="res-item-details">
                <h1 className="item-name">{name}</h1>
                <p className="price">{cost}</p>
                <div className="item-rating-cont">
                  <img
                    src="https://res.cloudinary.com/dydlvwdqp/image/upload/v1634122719/7_Rating_t6jomz.jpg"
                    alt="rating"
                    className="star"
                  />
                  <p className="rating">{rating}</p>
                </div>
                {status ? (
                  <Counter key={resList.id} itemDetails={resList} />
                ) : (
                  <button type="button" className="add-btn" onClick={onCartAdd}>
                    ADD
                  </button>
                )}
              </div>
            </li>
          )
        }}
      </KitchenContext.Consumer>
    )
  }
}

export default RestaurantItems
