import { useEffect } from 'react';
import CartItems from './CartItems';
import CartTotal from './CartTotal';
import './Cart.css';
import db from './Firebase';
function Cart(props) {
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
            <CartItems cartItems={props.cartItems} />
            <CartTotal cartItems={props.cartItems} />
        </div>
    );
}

export default Cart;
