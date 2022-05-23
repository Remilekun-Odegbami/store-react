import React, {useState} from 'react';
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/store/cartSlice";

const CartItem = ({name, id, price, quantity, image}) => {

    const [data, setData] = useState({})
   
    
    const dispatch = useDispatch();

    const incrementCartItem = () => {
        dispatch(cartActions.addToCart({
            name,
            id,
            // id: data.latestProductId || data.slashedProductId || data.ProductId,
            price,
            totalQty: quantity
        }))
    }
    
    const decrementCartItem = () => {
        dispatch(cartActions.removeFromCart(id))
        
    }
    
    const deleteFromCart = () => {
        dispatch(cartActions.deleteAll(id))
    }


    return(
        <div className="cartItem">
            
            <div className="container">
                <div className="row">
                    <div className="m-5">
                        <div className='cart-card px-20 py-10' key={data.latestProductId || data.slashedProductId || data.ProductId}>
                                <div className='w-2/12 mr-10'>
                                <p className="ml-2" onClick={deleteFromCart}><i className="fa fa-trash text-danger" aria-hidden="true"></i>p</p>
                                <img src={image} alt={name} className='img-fluid w-50 h-50' />
                                </div>
                                <div className='ml-10 items-center'>
                                    <h5 className='text-2xl'>{name}</h5>
                                    <div className='d-flex'>
                                        <p className='text-xl font-bold mr-4'>Qty: {quantity}</p>
                                        <p className='text-xl font-bold'>Price: ${price}</p>
                                    </div>
                                    <div className="d-flex">
                                        <button className="btn-success"  onClick={incrementCartItem}>+</button>
                                        <button className="ml-2 btn-danger" onClick={decrementCartItem}>-</button>
                                    </div>
                                </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem