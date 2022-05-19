import axios from 'axios';
import React, {useState, useEffect} from 'react';
import ProductCardGroup from '../Product/ProductCardGroup';
import App from '../../App';

export default function Cart({handleChange, handleClick}) {
  const [price, setPrice] = useState(0)
  const [cart, setCart] = useState([]);

  const handleDelete = (id) => {
    const arr = cart.filter((product) => product.id !== id);
    setCart(arr);
    handlePrice();
  }

  const handlePrice = () => {
    let ans = 0;
    cart.map((product) => (ans += product.amount * product.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

//   useEffect(() => {
//     async function fetchData() {
//         try {
//             const response = await axios.get("http://localhost:3009/api/cart", {
//                 //request header set
//                 headers:{
//                     "Accept": "/",
//                     "Content-type": "application/json",                    
//                 }                
//             })
//             setCart(response.data)
//             console.log(response.data)                
//         } catch (error) {
//             if(error.response) {
//                 console.log(error.response.data)
//             }
//         }

//     }
//     fetchData();
// }, [])

let productElements = cart.map(product => { 
  return (
        <div className='col-md-3' key={product.ProductId}>
              <ProductCardGroup
                  productName={product.ProductName}
                  productImage={product.Image}
                  productDescription={product.ProductDescription}
                  price={product.Price}
                  rating={product.Rating}
                  size={product.Size}
                  isFav={product.Is_Fav}
                  product={product}
                  handleClick={handleClick}
              />
          </div>
          )
      }) 




return (

<section className='latest'>
<div className='container'>
  <div className='row'>         
          {productElements}
  </div>
</div>
</section>

)
}

