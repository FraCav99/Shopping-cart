import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../styles/Checkout.css';

const Checkout = ({ setCartItems }) => {
    useEffect(() => {
        setCartItems([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="checkout">
            <h1>(づ｡◕‿‿◕｡)づ</h1>
            <p>Yaaaaayy! Thanks for purchasing!</p>
            <Link to={'/'}>
                <button>Go to home</button>
            </Link>
        </div>
    );
}

export default Checkout;
