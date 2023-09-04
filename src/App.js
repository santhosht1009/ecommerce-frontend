import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import HomePage from './customer/pages/HomePage/HomePage';
import Footer from './customer/components/Footer/Footer';
import Product from './customer/components/Products/Product';
import ProductDetail from './customer/components/ProductDetails/ProductDetail';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';



function App() {
  return (
    <div className="App">
    <Navigation />
    <div>
      {/* <HomePage /> */}
      {/* <Product /> */}
      {/* <ProductDetail /> */}
      {/* <Cart /> */}
      <Checkout />
    </div>
    <Footer></Footer>
    </div>
  );
}

export default App;
