import React from 'react';
import './CartTotal.css';



function CartTotal(props) {
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
    };

    return (
        <div className="CartTotal">
            <h3>Subtotal({getCount()}) items:{getTotalPrice()}</h3>


            <button> Proceed to CheckOut

       </button>
        </div>
    );
}

export default CartTotal;
