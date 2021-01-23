import React from 'react';
import './CartItems.css';
import CartItem from './CartItem';
import {useStateValue} from './components/stateProvider/StateProvider'
import CartTotal from './CartTotal';
function CartItems(props) {

const [state, dispatch] = useStateValue();
    
return (
        <div className="CartItems">
            <h1>Shopping Cart</h1>
            <hr />
            <div className="CartItems-items">
                <CartItem/>
                {/* {state.cart.map((item) => {
                    return <CartItem
                         id={item.id}
                        
                     cartItem={item.cartItem}
                         />;
                })} */}
                <CartTotal/>
            </div>
        </div>



    );
}

export default CartItems;
