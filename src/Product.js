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
  const addtoCart =() => { 
    const cartItem = db.collection('cart-items').doc(props.id);
    cartItem.get()
    .then((doc)=> { 
      if(doc.exists){ 
        cartItem.update({ 
          quantity:doc.data()/quantity+1
        })
      }
    })

      cartItem.set({ 
        title: props.title,
        image:props.image,
        price:props.price,
        quantity:1
      })
  }

  console.log(props)
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
      <button> Add to Cart</button>

    </div>

  );
}

export default Product;
