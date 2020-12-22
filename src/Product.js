import React from 'react';
import './Product.css';
import db from './Firebase'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom"; 
function Product(props) {
  console.log("Adding to Cart the following product",props )
  const addtoCart =() => { 
    const cartItem = db.collection('cartItems').doc(props.id);
    // console.log(cartItem)
    cartItem.get()
    .then((doc)=> { 
      if(doc.exists){
        console.log("updating from home page",cartItem)
        console.log(doc.data()) 
        cartItem.update({ 
          quantity:doc.data().quantity+1
        })
      } else {
        cartItem.set({
        title: props.title,
        image: props.image,
        price: props.price,
        quantity: 1
      })}
    })
 }

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
      <img src={props.image} alt="ipad" />
      <button onClick={addtoCart}> Add to Cart</button>

    </div>

  );
}

export default Product;
