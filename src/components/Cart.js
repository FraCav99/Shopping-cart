import React from 'react';
import '../styles/Cart.css';

const Cart = () => {
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
                        <div className="product-item">
                            <div className="product-name column">
                                <div className="product-img">
                                    <img src="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg" alt="prod-pic" />
                                </div>
                                <span>WD 2TB Elements Portable External Hard Drive - USB 3.0</span>
                            </div>
                            <div className="product-price column">
                                <span>99,99$</span>
                            </div>
                            <div className="product-quantity column">
                                <input type="number" min="1" />
                            </div>
                            <div className="product-subtotal column">
                                <span>99,99$</span>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
                                </button>
                            </div>
                        </div>
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
