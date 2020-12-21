
import './App.css';
import { useState, useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import Cart from './Cart';
import db from './Firebase';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    db.collection('cartItems').onSnapshot((snapshot) => {
      let tempCartItems = [];
      snapshot.docs.map((doc) => {
        tempCartItems.push({
          id: doc.id,
          cartItem: doc.data()
        });
      });
      // console.log(tempCartItems)
      setCartItems(tempCartItems);
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Header
          cartItems={cartItems} />

        <Switch>
          <Route path="/cart">
            <Cart cartItems={cartItems}></Cart>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
