import Counter from '../Counter'
import './index.css'

const CartItems = props => {
  const {items} = props
  const {name, imageUrl, cost, quantity} = items
  return (
    <li className="list-cart">
      <div className="cart-name-img">
        <img src={imageUrl} alt="cart-img" className="cart-image" />
        <p className="cart-item-name">{name}</p>
      </div>
      <Counter itemDetails={items} />
      <p className="cost-total">₹ {quantity * cost}</p>
    </li>
  )
}

export default CartItems
