import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Component} from 'react'
import Home from './components/HomePage'
import Login from './components/LoginPage'
import KitchenContext from './KitchenContext'
import ProtectedRoute from './components/ProtectedRoute'
import RestaurantDetails from './components/RestaurantDetails'
import Cart from './components/MyCart'
import NotFound from './components/NotFound'

import './App.css'

const sortByOptions = [
  {
    id: 0,
    displayText: 'Highest',
    value: 'Highest',
  },
  {
    id: 2,
    displayText: 'Lowest',
    value: 'Lowest',
  },
]

class App extends Component {
  state = {addBtn: false, localData: []}

  onAddBtn = list => {
    const localData1 = localStorage.getItem('cartData')
    const localData = JSON.parse(localData1)

    if (localData === null) {
      const cartItemData = []
      cartItemData.push({...list, quantity: 1})
      // console.log(cartItemData)
      localStorage.setItem('cartData', JSON.stringify(cartItemData))
      this.setState({localData: cartItemData})
    } else {
      const object = localData.find(each => each.name === list.name)
      if (object) {
        const cartItems = localData.map(each => {
          if (each.name === object.name) {
            const count = 1
            return {...each, quantity: count}
          }
          return each
        })
        localStorage.setItem('cartData', JSON.stringify(cartItems))
        this.setState({localData: cartItems})
      } else {
        localData.push({...list, quantity: 1})
        //  console.log(localData)
        localStorage.setItem('cartData', JSON.stringify(localData))
        this.setState({localData})
      }
    }
  }

  updateLocalData = (itemDetails, cartValue) => {
    const {name} = itemDetails
    const data = localStorage.getItem('cartData')
    const parsedData = JSON.parse(data)
    //  const item = parsedData.filter(each => each.name === name)
    // console.log(item, 'hari')

    const cartItemData = parsedData.map(each => {
      // console.log(cartValue)
      // console.log(each.name, name)
      if (each.name === name) {
        const count = cartValue
        //  console.log(count)
        return {...each, quantity: count}
      }
      return each
    })
    //  console.log(cartValue)
    localStorage.setItem('cartData', JSON.stringify(cartItemData))
    this.setState({localData: cartItemData})
  }

  removeItem = (data1, name) => {
    const newData = data1.filter(each => each.name !== name)

    localStorage.setItem('cartData', JSON.stringify(newData))
    this.setState({localData: newData})
  }

  checkZero = itemDetails => {
    const {localData} = this.state
    const result1 = localData.filter(each => each.name !== itemDetails.name)

    localStorage.setItem('cartData', JSON.stringify(result1))
    this.setState({localData: result1})
  }

  stateEmpty = () => {
    this.setState({localData: []})
  }

  render() {
    const {addBtn, localData} = this.state

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <KitchenContext.Provider
            value={{
              sortByOptions,
              filter: this.filter,
              onAddBtn: this.onAddBtn,
              addBtn,
              updateLocalData: this.updateLocalData,
              localData,
              removeItem: this.removeItem,
              checkZero: this.checkZero,
              stateEmpty: this.stateEmpty,
            }}
          >
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute
              exact
              path="/restaurants/:id"
              component={RestaurantDetails}
            />
            <ProtectedRoute exact path="/cart" component={Cart} />
          </KitchenContext.Provider>
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
