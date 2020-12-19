import React from 'react'
import './CartTotal.css'



function CartTotal(props) {
    const getTotalPrice = () => { 
        let total = 0 ; 
        props.cartItems.forEach((item=> 
        total += (item.cartItem.price*item.cartItem.quantity)
    })
    return total;
        
}
   
    return (
       <div className="CartTotal">
<h3>Subtotal (3items):$1,500</h3>

       
       <button> Proceed to CheckOut

       </button>
</div>
    )
}

export default CartTotal
