
import './App.css';
import Header from './Header'
import Home from './Home'
import Cart from './Cart'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 
function App() {
  const [cartItems,setCartItems] = useState([]);
  useEffect(() => {
    db.collection('cartItems').onSnapshot((snapshot) => {
      let tempCartItems = [];
            snapshot.docs.map((doc) => {
        tempCartItems.push({
          id: doc.id,
          cartItem: doc.data()
        });
      });
      setCartItems(tempCartItems);
    });
  }, []);
  return (
    <div className="App">
      <Header 
      cartItems={cartItems}/>
      <Router>
      <Switch> 
        <Route path="/cart"> <Cart/></Route>
        <Route path="/"> <Home/> </Route>
      </Switch>
      </Router>
           
    </div>
  );
}

export default App;
