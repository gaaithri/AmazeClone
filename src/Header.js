import React from 'react';
import './Header.css';
import {

    Link
} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './components/stateProvider/StateProvider';
import { getCartItemsCount } from './components/reducer/reducer';
// Pulling data from the data layer using the useContext ie ContextAPI - React.

export default function Header() {

    const [state] = useStateValue();

    /* const getCount = () => {
        // init count with 0 
        // loop through all the items
        // add qty to count
        // return it 
        let count = 0;
        props.cartItems.forEach(item => {
            count += parseInt(item.cartItem.quantity);
        });
        console.log("This is cart", count);
        return count;
    }; */
    return (




        <div className="Header">
            {/* Logo */}

            <div className="Header-logo">
                <Link to={"/"}>
                    <img src="https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png " alt="logo" />
                </Link>
            </div>

            {/* address */}
            <div className="Header-optionAddress">
                {/*google map icon */}

                <div className="Header-option">
                    <span className="Header-optionLineOne">
                        Deliver to User

                    </span>
                    <span className="Header-optionLineTwo">
                        Bengaluru 560024
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
                        & Orders
                    </span>
                </div>

                {/* Cart */}

                <Link to="/cart">
                    <div className="Header-optionCart">
                        <span className="Header-optionCartCount">
                            {/* {getCount()}  */}
                            {getCartItemsCount(state.cart)}
                        </span>
                        <ShoppingCartIcon />



                    </div>
                    <div className="Header-cartword">Cart</div>


                </Link>

            </div>


        </div>







    );
}

