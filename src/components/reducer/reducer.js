export const initialState = {
    cart: [],
};

export const getCartTotal = (cart) =>
    cart?.reduce((total, item) => (item.price * item.quantity) + total, 0);

export const checkCartItem = (prodid,cart) => 
cart?.find((item) => item.id === prodid);

export const getCartItemsCount =(cart) => 
    cart?.reduce((total, item) => (item.quantity) + total, 0);


// export const getCartItemsById =(cart) => 
// cart?
export const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.item]
            };
        case 'UPDATE_TO_CART':
            return { 
                ...state, 
                cart: state.cart.map
                (product=> product.id===action.item.id ?{...product,quantity:product.quantity+1}:product )
            }
        case 'DELETE_ITEM_FROM_CART': 
            return { 
                ...state,
                cart:state.cart.filter(product => product.id !== action.item.id)
            }
        case 'UPDATE_CART_QTY': 
        return{ 
          ...state, 
          cart: state.cart.map (product=> product.id===action.item.id ? {...product,quantity:action.item.quantity}: product)
        }

        
                default:
            return state;
    }
};
export default reducer;
