import {Redirect} from 'react-router-dom'

import './index.css'

import Cookies from 'js-cookie'

import Header from '../Header'

const Cart = () => {
  const jwt = Cookies.get('jwt_token')
  if (jwt === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <div className="cart-container">
        <img
          className="cartimg"
          alt="cart"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
        />
      </div>
    </>
  )
}

export default Cart
