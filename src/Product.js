import React from 'react';
import './Product.css';
import db from './Firebase';
import { checkCartItem } from './components/reducer/reducer';
import {useStateValue} from './components/stateProvider/StateProvider'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom"; 
function Product(props) {
  // array destructring ???
  const [state, dispatch] = useStateValue();

  console.log("this is the cart status now", state.cart);


  const addtoCart = () => {
    // dispatch the item into the data layer 
    // to  push thru to the data layer :  
    // const cartItems = [...state.cart]
    var cartItemPresent = checkCartItem(props.id,state.cart)
     console.log(cartItemPresent,"present")
    cartItemPresent ? dispatch({
      type: 'UPDATE_TO_CART',
      item: {
        id: props.id,
        // title: props.title,
        // image: props.image,
        // price: props.price,
        // rating: props.rating,
        // quantity: 1
      }
    })
:
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating,
        quantity: 1
      }

    });

  };


  // const addtoCart = () => {
  //   const cartItem = db.collection('cartItems').doc(props.id);
  //   // console.log(cartItem)
  //   cartItem.get()
  //     .then((doc) => {
  //       if (doc.exists) {
  //         console.log("updating from home page", cartItem);
  //         console.log(doc.data());
  //         cartItem.update({
  //           quantity: doc.data().quantity + 1
  //         });
  //       } else {
  //         console.log("Adding to Cart the following product", props);
  //         cartItem.set({
  //           title: props.title,
  //           image: props.image,
  //           price: props.price,
  //           // productId:props.productId,
  //           quantity: 1
  //         });
  //       }
  //     });
  // };

  // console.log(props)
  return (
    <div className="Product">
      <div className="Product-description">
        <span className="Product-title">
          {props.title}
        </span>
        <span className="Product-price">
          <big>₹</big>{props.price}
        </span>
        <span className="Product-rating">

          <p>⭐</p><p>⭐</p><p>⭐</p><p>⭐</p>
        </span>
      </div>
      <img src={props.image} alt="image_s" />
      <button onClick={addtoCart}> Add to Cart</button>

    </div>

  );
}

export default Product;
