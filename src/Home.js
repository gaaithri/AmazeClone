import React from 'react';
import Product from './Product';
import './Home.css'
function Home() {
    return (
        <div className="Home">
            <div className="Home-container">
                <div className="Home-Banner">

                </div>
                <div className="Home-content">
                    <div className="Home-row">
                        <Product/>
                        <Product/>
                    </div>
                
               
                    <div className="Home-row">
                        <Product />
                        <Product />
                        <Product/>
                    </div>
                </div>
                </div>

            </div>
        

        
    );
}

export default Home;

