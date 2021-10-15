import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Navbar from '../Navbar'
import Footer from '../Footer'
import CartItems from '../CartItems'
import './index.css'

class Cart extends Component {
  state = {order: true, status: 'progress'}

  componentDidMount() {
    this.getData()
  }

  totalAmount = list => {
    let total = 0
    list.forEach(each => {
      total += each.quantity * each.cost
    })

    return total
  }

  placeOrderBtn = () => {
    this.setState({order: false})
  }

  goHomeBtn = () => {
    const {history} = this.props
    history.replace('/')
  }

  successPage = () => {
    localStorage.clear()

    return (
      <div className="success-page">
        <img
          src="https://res.cloudinary.com/dydlvwdqp/image/upload/v1634229200/Vector_1_duq9qs.jpg"
          alt="empty cart"
        />
        <p className="payment-name">Payment Successful</p>
        <p className="greet">
          Thank you for ordering Your payment is successfully completed.
        </p>
        <button type="button" onClick={this.goHomeBtn} className="home-btn">
          Go to Home Page
        </button>
      </div>
    )
  }

  loader = () => (
    <div className="products-loader-container">
      <Loader type="Spinner" color="#0b69ff" height="50" width="50" />
    </div>
  )

  getData = () => {
    this.setState({status: 'success'})
  }

  orderBtn = () => {
    const {history} = this.props
    history.replace('/')
  }

  getEmpty = () => (
    <div className="cart-empty">
      <img
        src="https://res.cloudinary.com/dydlvwdqp/image/upload/v1634229306/cooking_1_cubbmw.jpg"
        alt="empty cart"
        className="no-order-img"
      />
      <h1 className="no-order">No Orders Yet!</h1>
      <p className="cart-suggest">
        Your cart is empty. Add something from the menu.
      </p>
      <button type="button" className="order-now-btn" onClick={this.orderBtn}>
        Order Now
      </button>
    </div>
  )

  getCartList = () => {
    const {order} = this.state
    let localData = localStorage.getItem('cartData')
    localData = JSON.parse(localData)
    const list = localData

    if (list !== null && list.length !== 0) {
      return (
        <div className="cart-page">
          {order ? (
            <div>
              <div className="show-cart-container">
                <div className="cart-container">
                  <p className="item-cart-title">Item</p>
                  <p className="quantity">Quantity</p>
                  <p className="price-name">price</p>
                </div>
                <ul className="items-unorder-list">
                  {list.map(each => (
                    <CartItems items={each} key={each.id} />
                  ))}
                </ul>
                <hr className="cart-line" />
                <div className="order-summary">
                  <p className="order-name">Order Total:</p>
                  <div className="place-order-cont">
                    <p className="final-amount">₹ {this.totalAmount(list)}</p>
                    <button
                      type="button"
                      className="place-order-btn"
                      onClick={this.placeOrderBtn}
                    >
                      Place Order
                    </button>
                  </div>
                </div>
              </div>
              <Footer />
            </div>
          ) : (
            this.successPage()
          )}
        </div>
      )
    }
    return <div>{this.getEmpty()}</div>
  }

  loadingStatus = () => {
    const {status} = this.state
    switch (status) {
      case 'success':
        return this.getCartList()
      case 'progress':
        return this.loader()
      case 'failure':
        return this.failure()
      default:
        return null
    }
  }

  render() {
    return (
      <div>
        <Navbar home="cart" />
        <div>{this.loadingStatus()}</div>
      </div>
    )
  }
}

export default Cart
