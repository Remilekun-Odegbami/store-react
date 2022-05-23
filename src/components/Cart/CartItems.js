import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CartItem from './CartItem';

export default function CartItems() {
    const [data, setData] = useState({})
    const params = useParams()
    let urlProduct = `http://localhost:3009/api/products/${params.id}`;
    let urlLatest = `http://localhost:3009/api/latest/${params.id}`;
    let urlSlashed = `http://localhost:3009/api/slashed/${params.id}`;

    useEffect(() => {
        if (params.id >= 2001) {
            axios.get(urlLatest)
            .then(res => {
                setData(res.data)
            })
        } else if(params.id >= 1001){
            axios.get(urlSlashed)
            .then(res => {
                setData(res.data)
            })
        } else {
            axios.get(urlProduct)
            .then(res => {
                setData(res.data)
            })            
        }
    }, []) 


    const cartItems = useSelector(state => state.cart.itemsList)

  return (
    <div className='container'>
        <div className='row'>
            <h1>Welcome to your Cart </h1>
            <div className=' d-flex justify-content-between'>
                {cartItems.map(item => (
                    <CartItem 
                        // key={item.latestProductId || item.slashedProductId || item.ProductId}
                        key={item.id}
                        price={item.price}
                        name={item.name}
                        image={item.image} 
                        quantity={item.quantity}                         
                    />
                ))}
            </div>

        </div>
    </div>
  )
}
