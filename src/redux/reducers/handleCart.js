const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload; //action.payload is the product that is being added to the cart
    console.log(product)
    
    switch(action.type) {
        case 'ADDITEM':
            //check if the item exists
            const checkItem = state.find((item) => item.latestProductId === product.latestProductId || item.slashedProductId === product.slashedProductId);
            // if product exists 
            if(checkItem) {
                // map through the product id
                return state.map((item) => 
                item.latestProductId === product.latestProductId || item.slashedProductId === product.slashedProductId
                // return all items, increase qty and price
                ? {...item, qty: item.qty + 1, newPrice: item.price * (item.qty + 1)
                    } 
                    : item
                );
            } else {
                // else return the state, add the new product id, increase qty and price.
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                        newPrice: product.price,
                    }
                ];
            }
            // break;
        case 'DELETEITEM':
            const checkDelItem = state.find(
                (item) => item.latestProductId === product.latestProductId || item.slashedProductId === product.slashedProductId
            );
            // if the qty is 1, delete the item completely
            if(checkDelItem.qty === 1) {
                return state.filter((item) => item.latestProductId !== product.latestProductId || item.slashedProductId === product.slashedProductId)
                // else subtract 1 from the total nuber of the item
            } else {
                return state.map((item) => 
                item.latestProductId === product.latestProductId || item.slashedProductId === product.slashedProductId
                ? {...item, qty: item.qty - 1, newPrice: item.price * (item.qty - 1) 
                }
                    : item
                );
            }
            // break;
        default: 
            return state;
        // break; 
    } 
}

export default handleCart;