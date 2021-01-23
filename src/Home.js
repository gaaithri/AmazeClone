import React, { useState, useEffect } from 'react';
import Product from './Product';
import './Home.css';
import Card from './Card';
import db from './Firebase';
import data from './data';

function Home() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        db.collection('products').onSnapshot((snapshot) => {
            let tempProducts = [];
            snapshot.docs.map((doc) => {
                tempProducts.push({
                    id: doc.id,
                    product: doc.data()
                });
                 return ("")
            });
            setProducts(tempProducts);
        });
    }, []);

    // const getProducts = () => { 
    //     console.log("Get Pro")
    //     db.collection('products').onSnapshot((snapshot) => {
    //     console.log(snapshot)
    //     })
    // }
    // getProducts()
    return (
        <div className="Home">
            <div className="Home-container">
                <div className="Home-Banner">

                </div>
                <div className="Home-content">
                    <div className="Card-content">
                        {data.map(item => (
                            <Card
                                key={item.headline}
                                headline={item.headline}
                                image={item.image}
                            />
                        ))}
                    </div>


                    <div className="Home-row">
                        {
                            products.slice(0, 2).map((product) => (
                                <Product
                                    key={product.id}
                                    id={product.id}
                                    title={product.product.title}
                                    price={product.product.price}
                                    rating={product.product.rating}
                                    image={product.product.image}
                                />
                            ))
                        }

                    </div>

                    <div className="Home-row">
                        {
                            products.slice(2, 5).map((product) => (
                                <Product
                                    key={product.id}
                                    id={product.id}
                                    title={product.product.title}
                                    price={product.product.price}
                                    rating={product.product.rating}
                                    image={product.product.image}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>



    );
}

export default Home;

