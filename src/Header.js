import React from 'react';
import './Header.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"; 
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
export default function Header() {
    return (
        <Router>
        <div className="Header">
            {/* Logo */}
            <Link to="/">
                <div className="Header-logo">
                    <img src="https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png " alt="logo" />

                </div>
            </Link>
            {/* address */}
            <div className="Header-optionAddress">
                {/* icon */}
                <div className="Header-option">
                    <span className="Header-optionLineOne">

                    </span>
                    <span className="Header-optionLineTwo">

                    </span>
                </div>
                {/* Hello  */}
            </div>


            {/* search */}
            <div className="Header-search">
                <input type="text" className="Header-searchInput" />
                <div className="Header-searchIconContainer">
                    <SearchIcon />
                    {/* Icon */}
                </div>
            </div>
            <div className="Header-navItems">
                {/* Login name */}
                <div className="Header-option">
                    <span className="Header-optionLineOne">
                        Hello, Gayathri
                    </span>
                    <span className="Header-optionLineTwo">
                        Accounts & List
                    </span>
                </div>
                {/* Orders */}
                <div className="Header-option">
                    <span className="Header-optionLineOne">
                        Returns
                    </span>
                    <span className="Header-optionLineTwo">
                        Orders
                    </span>
                </div>

                {/* Cart */}
                <Link to="/cart">
                    <div className="Header-optionCart">
                        <ShoppingCartIcon />
                        <span className="Header-cartCount">
                            20
                    </span>
                    </div>
                </Link>

            </div>

        </div>
        </Router>



    );
}

