import React from 'react'
import Navigation from '../customer/components/navigation/Navigation'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/pages/HomePage/HomePage'
import Cart from '../customer/components/Cart/Cart'
import Footer from '../customer/components/Footer/Footer'
import Product from '../customer/components/Products/Product'
import ProductDetail from '../customer/components/ProductDetails/ProductDetail'
import Checkout from '../customer/components/Checkout/Checkout'
import Order from '../customer/components/Order/Order'
import OrderDetail from '../customer/components/Order/OrderDetail'

function CustomerRouter() {
  return (
    <div>
<div>
    <Navigation/>
</div>
<Routes>
<Route path='/' element={<HomePage/>} />
<Route path='/cart' element={<Cart/>} />
<Route path='/:levelOne/:levelTwo/:levelThree' element={<Product />} />
<Route path='/product/:productId' element={<ProductDetail />} />
<Route path='/checkout' element={<Checkout />} />
<Route path='/account/order' element={<Order />} />
<Route path='/account/order/:orderId' element={<OrderDetail />} />
 


</Routes>
<div>
    <Footer/>
</div>
    </div>
  )
}

export default CustomerRouter