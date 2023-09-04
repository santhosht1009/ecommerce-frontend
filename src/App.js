import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import HomePage from './customer/pages/HomePage/HomePage';
import Footer from './customer/components/Footer/Footer';
import Product from './customer/components/Products/Product';
import ProductDetail from './customer/components/ProductDetails/ProductDetail';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';
import Order from './customer/components/Order/Order';
import OrderDetail from './customer/components/Order/OrderDetail';
import CustomerRouter from './Routers/CustomerRouter';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
<Routes>
<Route path='/*' element={<CustomerRouter/>} />
</Routes>
    
   
    </div>
  );
}

export default App;
