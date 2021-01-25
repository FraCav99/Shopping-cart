import React from 'react';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import RelatedProds from './RelatedProds';
import '../styles/ItemDetails.css';
import loading from '../images/loading.gif';

const ItemDetails = ({ match, cartItems, setCartItems }) => {
    const [item, setItem] = useState({});
    const [items, setItems] = useState([]);
    const [goToCheckout, setGoToCheckout] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setLoader();

        return () => {
            setGoToCheckout(false);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoaded]);

    const fetchItem = async () => {
        const data = await fetch(`https://fakestoreapi.com/products/${match.params.id}`);
        const fetchedItem = await data.json();
        setItem(fetchedItem);
    };

    const fetchItems = async () => {
        const data = await fetch(`https://fakestoreapi.com/products/category/electronics`);
        const fetchedItems = await data.json();
        setItems(fetchedItems);
    }

    const setLoader = async () => {
        await fetchItem();
        await fetchItems();
        if ((Object.keys(item).length === 0 && item.constructor === Object) && items.length === 0) {
            setIsLoaded(true);
        }
    }

    const resetLoader = () => {
        setIsLoaded(false);
        setItem({});
        setItems([]);
    }

    const addItemToCart = () => {
        const itemToAdd = {
            id: item.id,
            price: item.price.toFixed(2),
            title: item.title,
            image: item.image,
            quantity: 1,
            subtotal: function() {
                return this.quantity * item.price.toFixed(2);
            }
        }

        const found = cartItems.some(cartItem => cartItem.id === itemToAdd.id);

        if (found) {
            const filteredArr = cartItems.map(item => (item.id === itemToAdd.id) ? itemToAdd : item);
            setCartItems(filteredArr);
        } else {
            setCartItems([...cartItems, itemToAdd]);
        }

        setGoToCheckout(true);
    }

    if (!isLoaded) {
        return (
            <div className="item-details-page">
                <div className="loading-animation">
                    <img src={loading} alt="loading-animation" />
                    <p>Wait please...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="item-details-page">
                <div className="wrapper">
                    <div className="item-details">
                        <div className="image__container">
                            <img src={item.image} alt="product-pic" />
                        </div>
                        <div className="item-actions">
                            <p className="item-title">{item.title}</p>
                            <p className="item-price">Price: {item.price.toFixed(2)}$</p>
                            <button onClick={addItemToCart}>Add to cart</button>
                            {goToCheckout && 
                                <Link to={'/cart'}>
                                    <button>Proceed to checkout</button>
                                </Link>
                            }
                        </div>
                    </div>
                    <div className="item-description">
                        <h2>Description</h2>
                        <p>{item.description}</p>
                    </div>
                    <RelatedProds match={match} relatedItems={items} resetLoader={resetLoader}/>
                </div>
        </div>
    )
}

export default ItemDetails;
