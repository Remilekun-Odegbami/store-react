import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CartItems from './CartItems';

const Cart = () => {
  let total = 0;
  const itemsList = useSelector(state => state.cart.itemsList);

  itemsList.forEach(item => {
    total += item.totalPrice
  });
 
  return (
    <>
     <div>
        <CartItems />
        <h1 className='text-center'> Grand Total: ${(total).toFixed(2)} </h1>
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