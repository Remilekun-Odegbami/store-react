import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsList:[],
        totalQty: 0,
        showCart: false
    },
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const inCart = state.itemsList.find((item) => item.id === newItem.id)
            console.log(newItem.id)
            console.log(inCart)
            // if item is in cart increase the qty
            if(inCart) {
                inCart.quantity++;
                inCart.totalPrice += newItem.price

            } else {
                // else create a new item
                state.itemsList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name,
                    image: newItem.image

                })
                state.totalQty++;
            }
        },

        removeFromCart(state, action) {
            const id = action.payload;

            const inCart = state.itemsList.find(item => item.id === id);
            console.log(inCart.state)
            if (inCart.quantity === 1) {
                state.itemsList = state.itemsList.filter(item => item.id !== id)
                state.totalQty--
                console.log(inCart.quantity)
            } else {
                inCart.quantity--;
                inCart.totalPrice -= inCart.price;
            }
        },
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice;