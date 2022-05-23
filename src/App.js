import {BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/product/Product';
import SingleProduct from './components/product/SingleProduct';
import Cart from './components/cart/Cart';
import Footer from './components/Footer';
import { useSelector } from 'react-redux';

function App() {
 
  const cartItems = useSelector((state) => state.cart.itemsList);
  console.log(cartItems)

  return (
      <BrowserRouter> 
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='products' element={<Product />} />      
          <Route path='products/:id' element={<SingleProduct />} />      
          <Route path='cart' element={<Cart/>} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
