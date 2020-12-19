import React from 'react';
function CartItem() {
    const deleteqty =() =>  { 
        

    }
    return (
        <div className="CartItem">
            <div className="CartItem-image">
                <img src="https://m.media-amazon.com/images/I/81zKcC5wJ6L._AC_SL1500_.jpg" />
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
                    <div className="CartItem-delete">
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