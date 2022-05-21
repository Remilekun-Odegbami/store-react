import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ProductCardGroup from '../Product/ProductCardGroup';
import { useSearchParams, NavLink } from 'react-router-dom';


export default function () {
    const [kulProducts, setKulProduct] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("http://localhost:3009/api/latest", {
                    //request header set
                    headers:{
                        "Accept": "/",
                        "Content-type": "application/json",                    
                    }                
                })
                setKulProduct(response.data)               
            } catch (error) {
                if(error.response) {
                    console.log(error.response.data)
                }
            }

        }
        fetchData();
    }, [])

    const productElements = kulProducts.map(product => { 
        return (
             <NavLink to={`/products/${product.latestProductId}`} className='col-md-3' key={product.latestProductId}>
                    <ProductCardGroup
                        productName={product.ProductName}
                        productImage={product.Image}
                        productDescription={product.ProductDescription}
                        price={product.Price}
                        rating={product.Rating}
                        size={product.Size}
                        isFav={product.Is_Fav}
                        product={product}
                    />
                </NavLink>
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

