import {BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/Product/Product';
import SingleProduct from './components/Product/SingleProduct';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer';

function App() {
 
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
