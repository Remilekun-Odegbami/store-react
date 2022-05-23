import React, {useState, useEffect} from 'react';
import welcome from '../Media/welcome.jpg';
import Carousel, { CarouselItem } from './carousel/Carousel1';
import ProductCard from './product/ProductCards';
import axios from 'axios';
import { NavLink } from 'react-router-dom';


export default function Home() {
    const [kulProducts, setKulProduct] = useState([]);

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
            } catch (error) {
                if(error.response) {
                    console.log(error.response.data)
                }
            }
        }
        fetchData();
    }, [])

  return (
    <section className='main'>
        <div className='welcome d-flex'>
            <div className='container'>
                <div className='row'>
                    <div className='text col-lg-7 col-sm-12'>
                        <h3 className='text-uppercase'> Spring / Summer collection </h3>
                        <h1 className='text-capitalize'> Your best bet for <span className='text-uppercase'>Quality</span> Clothings</h1>
                        <h2 className='text-capitalize'> Get up to 30% off new arrivals </h2>
                        <button className='btn btn-danger'> Get in touch</button>
                    </div>
                    <div className='image col-lg-5 col-sm-12'>
                        <img src={welcome} alt='welcome' className='img-fluid' />
                    </div>
                </div>
            </div>
        </div>
        <section className='offer'>
            <div className="container-fluid">
                <div className="row align-items-start">
                    <div className="col">
                    <i className="fa fa-credit-card" aria-hidden="true"></i>
                    <h5>Fast secure payments</h5>
                    </div>
                    <div className="col premium">
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <h5>premium products</h5>
                    </div>
                    <div className="col">
                    <i className="fa fa-plane" aria-hidden="true"></i>
                    <h5>free & fast delivery</h5>
                    </div>
                </div>        
            </div>
        </section>
        <section className='slider mt-5'>
            <div className='container'>
                <div className='row'>
                    <Carousel>
                            {
                                kulProducts ? kulProducts.map(product => (
                                    <NavLink to={`/products/${product.ProductId}`} className='col-md-3' key={product.ProductId}>
                                        <CarouselItem key={product.ProductId}>
                                            <ProductCard
                                                productName={product.ProductName}
                                                ProductId={product.ProductId}
                                                productImage={product.Image}
                                                productDescription={product.ProductDescription}
                                                price={product.Price}
                                                rating={product.Rating}
                                                size={product.Size}
                                                isFav={product.Is_Fav}
                                            />
                                        </CarouselItem>
                                    </NavLink>                   
                                )) : null
                            }
                        </Carousel> 
                </div>
            </div>
        </section>
    </section>
  )
}
