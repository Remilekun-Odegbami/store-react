import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ProductCardGroup from '../Product/ProductCardGroup';
import { NavLink } from 'react-router-dom';


export default function () {
    const [slashedProducts, setSlashedProduct] = useState([]);
   

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("http://localhost:3009/api/slashed", {
                    //request header set
                    headers:{
                        "Accept": "/",
                        "Content-type": "application/json",                    
                    }                
                })
                setSlashedProduct(response.data)               
            } catch (error) {
                if(error.response) {
                    console.log(error.response.data)
                }
            }

        }
        fetchData();
    }, [])


    const productElements = slashedProducts.map(product => { 
        return (
             <NavLink to={`/products/${product.slashedProductId}`} className='col-md-3' key={product.slashedProductId}>
                    <ProductCardGroup
                        productName={product.ProductName}
                        productImage={product.Image}
                        productDescription={product.ProductDescription}
                        price={product.Price}
                        rating={product.Rating}
                        size={product.Size}
                        isFav={product.Is_Fav}
                    />
                </NavLink>
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

