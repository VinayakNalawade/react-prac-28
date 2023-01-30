import './index.css'
import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import Header from '../Header'

const Products = () => {
  const jwt = Cookies.get('jwt_token')
  if (jwt === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <div className="product-container">
        <img
          className="productimg"
          alt="products"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
        />
      </div>
    </>
  )
}
export default Products
