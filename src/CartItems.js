import React from 'react';
import './CartItems.css';

function CartItems() {
    return (
        <div className="CartItems">
            <h1>Shopping Cart</h1>
            <hr />
            <div className="CartItems-items">
                <div className="CartItem">
                    <div className="CartItem-image">
                        <img src="https://m.media-amazon.com/images/I/81zKcC5wJ6L._AC_SL1500_.jpg" alt="cartimg" />
                    </div>
                    <div className="CartItem-info">
                        <div className="CartItem-title">
                            New Apple Macbook Pro Apple M1 Chip
</div>
                        <div className="CartItem-actions">
                            <div className="CartItem-quantity">
                                <select>

                                    <option value="1"> 1</option>
                                    <option value="2">2</option>
                                    <option value="3">1</option>
                                    <option value="4">1</option>
                                    <option value="5">1</option>


                                </select>

                            </div>
                            <div className="CartItem delete">
Delete
                            </div>
                        </div>
                    </div>
                    <div className="CartItem-price">

                    </div>
                </div>
            </div>


        </div>
    );
}

export default CartItems;
