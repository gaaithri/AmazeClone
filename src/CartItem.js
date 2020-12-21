import React from 'react';
import db from './Firebase';
function CartItem(props) {
    const deleteQty = () => {
        console.log(props);
        db.collection('cartItems').doc(props.id).delete()
        .then(()=> console.log("Documents Deleted successfully")
        )
        .catch(()=> console.log('')

        
    };

    const updateQty = (id, e) => {
        db.collection('cartItems').doc(id).set(e.target.value);
    };
    return (
        <div className="CartItem">
            <div className="CartItem-image">
                <img src="https://m.media-amazon.com/images/I/81zKcC5wJ6L._AC_SL1500_.jpg" alt="images" />
            </div>
            <div className="CartItem-info">
                <div className="CartItem-title">
                    New Apple MacBook Pro with Apple M1 Chip
                </div>
                <div className="CartItem-actions">
                    <div className="CartItem-quantity">
                        <select>
                            <option value="1">Qty: 1</option>
                            <option value="2">Qty: 2</option>
                            <option value="3">Qty: 3</option>
                        </select>
                    </div>
                    <div className="CartItem-delete" onClick={deleteQty} >
                        Delete
                    </div>
                </div>
            </div>
            <div className="CartItem-price">
            </div>
        </div>
    );
}
export default CartItem;