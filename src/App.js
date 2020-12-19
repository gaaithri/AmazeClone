
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
  return (
    <div className="App">
      <Header />
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
