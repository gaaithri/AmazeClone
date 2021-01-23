import React from 'react';
import db from './Firebase';
import './CartItem.css';
import { useStateValue } from './components/stateProvider/StateProvider';



// calling from the Db is one way to dispaly the records of Cart items 
// the other way using the React Context API is to pull the information from the Data layer through the useContext(StateContext)-

function CartItem() {
    const [state, dispatch] = useStateValue();
    const updateqty = (e) => {

        dispatch({
            type: 'UPDATE_CART_QTY',

            item: {
                id: e.target.name,
                quantity: parseInt(e.target.value)
            }
        });
    };

    const deleteQty = (id) => {
        dispatch({
            type: 'DELETE_ITEM_FROM_CART',
            item: {
                id: id
            }
        });
    };

    // const updateQty = () => { 
    //     dispatch ({ 
    //         type: 'INCREMENT_QTY', 
    //         item :{ id: state.cart.id,
    //                 quantity:state.cart.
    //         }

    //     })
    // }
    /*function CartItem(props) {
  console.log(props);
     const deleteQty = () => {
         console.log(props);
         db.collection('cartItems').doc(props.id).delete();
     };
 
     const updateQty = (e) => {
         db.collection('cartItems').doc(props.id).update({quantity:parseInt(e.target.value)});
     };*/
    return (
        <div className="CartItem-info">

            <div className="cartItem-items">

                {state.cart.map((item, index) => (
                    <div key={index} className="CartItem">

                        <div className="CartItem-image">

                            {/* <img src={props.cartItem.image} alt="images" /> */}
                            <img src={item.image} alt="prod_image" />
                        </div>
                        <div className="CartItem-prod-info">
                            <div className="CartItem-title">
                                {/* {props.cartItem.title} */}
                                {item.title}

                            </div>
                            <div className="CartItem-price">
                                {/* price: {props.cartItem.price} */}
                   price: {item.price}
                            </div>
                            <div className="CartItem-actions">
                                <div className="CartItem-quantity">
                                    <select value={item.quantity} id="qty_items" name={item.id} onChange={updateqty}>
                                        {/* // {props.cartItem.quantity} 

                        //  onChange={updateQty}
                         */}
                                        <option value="1">Qty: 1</option>
                                        <option value="2">Qty: 2</option>
                                        <option value="3">Qty: 3</option>
                                        <option value="4">Qty: 4</option>
                                        <option value="5">Qty: 5</option>


                                    </select>
                                </div>
                                <div className="CartItem-delete"
                                    onClick={() => deleteQty(item.id)}
                                >
                                    Delete
                    </div>
                            </div>

                        </div>

                    </div>

                ))}
            </div>
        </div>
    );
}





export default CartItem;





