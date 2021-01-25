import React from 'react';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import loading from '../images/loading.gif';
import '../styles/Shop.css';
import Card from './Card';

const Shop = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();

        return () => {
            setItems([]);
        }
    }, [])

    const fetchItems = async () => {
        const data = await fetch('https://fakestoreapi.com/products/category/electronics');
        const items = await data.json();

        setItems(items);
    };

    return (
        <div className="shop">
            {items.length > 0 ?
                (
                <div className="cards-grid">
                {items.map((item) => {
                    return (
                        <Link to={`/shop/${item.id}`} key={item.id} >
                            <Card 
                                key={item.id} 
                                id={item.id}
                                price={item.price.toFixed(2)}
                                title={item.title}
                                image={item.image}
                            />
                        </Link>
                    );
                })}
                </div>
                ) : (
                <div className="loading-animation">
                    <img src={loading} alt="loading-animation" />
                    <p>Wait please...</p>
                </div>
                )
            }
        </div>
    )
}

export default Shop;
