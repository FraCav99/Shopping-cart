import React from 'react';
import {useState, useEffect} from 'react';
import '../styles/ItemDetails.css';
import loading from '../images/loading.gif';

const ItemDetails = ({ match }) => {
    const [item, setItem] = useState({});
    const [items, setItems] = useState([]);

    useEffect(() => {    
        fetchItem();
    }, []);

    const fetchItem = async () => {
        const data = await fetch(`https://fakestoreapi.com/products/${match.params.id}`);
        const dataItems = await fetch('https://fakestoreapi.com/products/category/electronics');

        const item = await data.json();
        const items = await dataItems.json();

        setItem(item);
        setItems(items);
    };

    return (
        <div className="item-details-page">

            {Object.keys(item).length === 0 && item.constructor === Object ? 
                <div className="loading-animation">
                    <img src={loading} alt="loading-animation" />
                    <p>Wait please...</p>
                </div>
                : <div className="item-details">
                    <div className="image__container">
                        <img src={item.image} alt="product-pic" />
                    </div>
                    <div className="item-actions">
                        <p className="item-title">{item.title}</p>
                        <p className="item-price">Price: {item.price}$</p>
                        <div className="quantity">
                            <span>Q.ty</span>
                            <input type="number" min="1" max="99"/>
                        </div>
                        <button>Add to cart</button>
                    </div>
                </div>          
            }

            
            {Object.keys(item).length === 0 && item.constructor === Object  ?
                null : <div className="item-description">
                    <h2>Description</h2>
                    <p>{item.description}</p>
                </div>
            }
        </div>
    )
}

export default ItemDetails;
