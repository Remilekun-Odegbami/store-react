import {useState, useEffect} from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/Product/Product';
import SingleProduct from './components/Product/SingleProduct';
import Cart from './components/Cart/Cart';

function App() {
  const [cart, setCart] = useState([]);
   
  const handleChange = (product, d) => {
    const index = cart.indexOf(product);
    const arr = cart;
    arr[index].amount += d;

    if (arr[index].amount === 0) arr[index].amount = 1;
    setCart([...arr]);
};


const handleClick = (product, d) => {
  cart.push(product)
  console.log(cart)
  if (cart.indexOf(product) !== -1) return;
  setCart([...cart, product])
}

  return (
      <BrowserRouter> 
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='products' element={<Product handleClick={handleClick} />} />      
          <Route path=':product' element={<SingleProduct />} />        
          <Route path='cart' element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} />} />        

        </Routes>
    </BrowserRouter>
  );
}

export default App;
