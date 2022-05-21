import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { delProduct } from '../../redux/action/index.js';
import { NavLink } from 'react-router-dom';
import { addProduct } from '../../redux/action/index.js';
 
const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();
 
  const delCart = (product) => {
    dispatch(delProduct(product));
  };

  const increaseItem = (product) => {
    dispatch(addProduct(product));
  };
 
  return (
    <>
  <h1>I am Cart</h1>
     <div>
      {state.map((cartItem) => (
        <div className='px-20 py-10' key={cartItem.CartId}>
          <div className='flex justify-center relative  '>
            <div className='absolute right-56 cursor-pointer'>
              {/* <Icon icon='bi:x-lg' onClick={() => delCart(cartItem)} /> */}
              {/* <i class="fa fa-trash" aria-hidden="true" onClick={() => delCart(cartItem)}></i> */}
            </div>
            <div className='w-2/12 mr-10'>
              <img src={cartItem.Image} alt='cart' className='' />
            </div>
            <div className='ml-10 items-center'>
              <h3 className='text-2xl font-semibold'>{cartItem.ProductName}</h3>
              <div className='flex'>
                <p className='text-xl font-bold mr-4'>Qty: {cartItem.Color}</p>
                {console.log(cartItem.qty)}
                <p className='text-xl font-bold'>${cartItem.Price}</p>
              </div>
 
              <div>
                <button 
                className='text-3xl mr-5'
                onClick={() => delCart(cartItem)}
                >-</button>
                <button 
                className='text-3xl'
                onClick={() => increaseItem(cartItem)}
                >+</button>
              </div>
            </div>
          </div>
        </div>
      ))}
         <div className='px-20 text-center mx-auto'>
          <NavLink
            to='/cart'>
            Proceed to checkout
          </NavLink>
        </div>
 
      </div>
    </>
  );
};
 
export default Cart;