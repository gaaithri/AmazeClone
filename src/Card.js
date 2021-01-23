import React from 'react';
import './Card.css';

function card(props) {
    // console.log(props);
    return (
        <div className="Card-container">
            <div div className="Card">


                <h3>{props.headline}</h3>



                {/* <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg"
                    alt="teddy" /> */}
                    <img src = {props.image} alt = "imgcard"/>
                <span a href="" className="showtext"> Shop Now</span>
            </div>

          

        </div>

    );
}

export default card;
