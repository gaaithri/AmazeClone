import React from 'react';
import './CartTotal.css';
import { useStateValue } from './components/stateProvider/StateProvider';
//importing the getCartTotal function , which is Selector that all the item prices.
import { getCartTotal,getCartItemsCount } from './components/reducer/reducer';
function CartTotal() {
    const [state, dispatch] = useStateValue();
    // const {state,dispatch} =useContext(StateContext)
    // Adding up the total value in the Cart Componnent 
    //     const getTotalPrice =() => { 
    //         let total = 0 
    //         state.cart.forEach((item) =>      
    //         {total +=(parseInt(item.price)) })
    //         return  total
    //     }
    /*function CartTotal(props) {
        const getTotalPrice = () => {
            let total = 0;
            props.cartItems.forEach((item) =>
              {  total += (parseInt(item.cartItem.price) * parseInt(item.cartItem.quantity))});
    
            return total;
        };
        const getCount = () => {
            // init count with 0 
            // loop through all the items
            // add qty to count
            // return it 
            let count = 0;
            props.cartItems.forEach(item => {
                count += parseInt(item.cartItem.quantity);
            });
            console.log(count);
            return count;
        }; */

    return (
        <div className="CartTotal">
            <h3>Subtotal(
                {getCartItemsCount(state.cart)}
                {/* {getCount()} */}
                )
                items:
                {/* {getTotalPrice()} */}
                {getCartTotal(state.cart)}
            </h3>


            <button> Proceed to CheckOut

       </button>
        </div>
    );
}

export default CartTotal;
