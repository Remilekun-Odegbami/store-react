import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ProductCardGroup from './ProductCardGroup';
import { useSearchParams, Outlet } from 'react-router-dom';
import QueryNavLink from '../../custom/QueryNavLink';


export default function () {
    const [kulProducts, setKulProduct] = useState([]);
    const [cart, setCart] = useState([]);
    let [searchParams, setSearchParams] = useSearchParams()

    const handleClick = (product, d) => {
        cart.push(product)
        console.log(cart)
        if (cart.indexOf(product) !== -1) return;
        setCart([...cart, product])
    }
   

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("http://localhost:3009/api/products", {
                    //request header set
                    headers:{
                        "Accept": "/",
                        "Content-type": "application/json",                    
                    }                
                })
                setKulProduct(response.data)
                // console.log(response.data)                
            } catch (error) {
                if(error.response) {
                    // console.log(error.response.data)
                    // console.log(kulProducts)
                }
            }

        }
        fetchData();
    }, [])


    const productElements = kulProducts.map(product => { 
        return (
             <div className='col-md-3' key={product.ProductId}>
                    <ProductCardGroup
                        productName={product.ProductName}
                        productImage={product.Image}
                        // productDescription={product.ProductDescription}
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
        {/* <input 
                      value={searchParams.get('filter') || ''}
                      onChange={(event) => {
                      let filter = event.target.value
                      if(filter) {
                        setSearchParams({filter})
                      } else {
                        setSearchParams({})
                      }
                        }}
                    />
                  {kulProducts.filter(product => {
                      let filter = searchParams.get('filter')
                      if(!filter) return true
                      let name = product.productName.toLowerCase()
                      return name.includes(filter.toLowerCase())
                  })
                  .map(product => {
                      return (<QueryNavLink
                              style={({isActive}) => {
                                      return {
                                          display:'block', 
                                          margin:'1rem 0',
                                          color: isActive ? '#109eff' : '#000',
                                          textDecoration: 'none',
                                          borderBottom: isActive ? '1px solid red' : 'none'
                                      }
                                  }}
                                  to={`/product/${product.productId}`}
                                  key={product.productId}
                          >
                              {product.productName}
                          </QueryNavLink>
                      )
                  })}          */}
                {productElements}
        </div>
    </div>
</section>

  )
}

