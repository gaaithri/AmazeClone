import { useEffect } from 'react';
import CartItem from './CartItem';
import CartTotal from './CartTotal';
import './Cart.css';
import db from './Firebase';
function Cart() {
    // useEffect(() => {
    //     db.collection('cartItems').onSnapshot((snapshot)=> { 
    //         let tempCartItems = []
    //         console.log(snapshot)=> 
    //         snapshot.docs.map((doc) => {
    //             tempCartItems.push({
    //                 id: doc.id,
    //                 cartItem: doc.data()
    //             });
    //         });
    //         setProducts(tempCartItems);
    //     });
    // }, []);



    return (
        <div className="cart">
            <CartItem/> 
            {/* <CartItems cartItems={props.cartItems} /> */}
            {/* <CartTotal cartItems={props.cartItems} /> */}
            <CartTotal/>
        </div>
    );
}

export default Cart;
