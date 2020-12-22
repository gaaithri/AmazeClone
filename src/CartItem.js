import React from 'react';
import db from './Firebase';
import './CartItem.css';
function CartItem(props) {
    console.log(props);
    const deleteQty = () => {
        console.log(props);
        db.collection('cartItems').doc(props.id).delete();
    };

    const updateQty = (e) => {
        db.collection('cartItems').doc(props.id).update({quantity:parseInt(e.target.value)});
    };
    return (
        <div className="CartItem">
            <div className="CartItem-image">
                <img src={props.cartItem.image} alt="images" />
            </div>
            <div className="CartItem-info">
                <div className="CartItem-title">
                    {props.cartItem.title}
                </div>
                <div className="CartItem-price">
                   price: {props.cartItem.price}
                </div>
                <div className="CartItem-actions">
                    <div className="CartItem-quantity">
                        <select value ={props.cartItem.quantity} onChange={updateQty}>
                            <option value="1">Qty: 1</option>
                            <option value="2">Qty: 2</option>
                            <option value="3">Qty: 3</option>
                            <option value="4">Qty: 4</option>
                            <option value="5">Qty: 5</option>


                        </select>
                    </div>
                    <div className="CartItem-delete" onClick={deleteQty} >
                        Delete
                    </div>
                </div>
                
            </div>
            
        </div>
    );
}
export default CartItem;