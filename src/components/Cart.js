import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Cart.css';

const Cart = ({cartItems, setCartItems}) => {

    const deleteItem = (ev) => {
        const elementId = ev.target.parentNode.parentNode.id;
        const filterArr = cartItems.filter(item => item.id !== +elementId ? item : null);
        setCartItems(filterArr);
    }

    if (cartItems.length === 0) {
        return (
            <div className="cart cart-empty">
                <h1>¯\_(ツ)_/¯</h1>
                <p>Seems like your basket is empty... Why don't buy something?</p>
                <Link to={'/shop'}>
                    <button>Go to Shop</button>
                </Link>
            </div>
        );
    }

    return (
        <div className="cart">
            <div className="cart-container">
                <div className="cart-header">
                    <h2>Your cart</h2>
                </div>
                <div className="cart-product-table">
                    <div className="product-table-header">
                        <div><span>Product</span></div>
                        <div><span>Price</span></div>
                        <div><span>Quantity</span></div>
                        <div><span>Subtotal</span></div>
                    </div>
                    <div className="product-table-body">
                        {cartItems.map(cartItem => (
                        <div className="product-item" key={cartItem.id} id={cartItem.id}>
                            <div className="product-name column">
                                <div className="product-img">
                                    <img src={cartItem.image} alt="prod-pic" />
                                </div>
                                <span>{cartItem.title}</span>
                            </div>
                            <div className="product-price column">
                                <span>{cartItem.price}$</span>
                            </div>
                            <div className="product-quantity column">
                                <div className="quantity-setter">
                                    <div><button>-</button></div>
                                    <span>{cartItem.quantity}</span>
                                    <div><button>+</button></div>
                                </div>
                            </div>
                            <div className="product-subtotal column">
                                <span>{cartItem.subtotal()}$</span>
                                <button onClick={deleteItem}>X</button>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="total-section">
                <h2>Total</h2>
                <p>99,99$</p>
                <button>Go to checkout</button>
            </div>
        </div>
    )
}

export default Cart;
