import React from 'react';
import '../styles/Shop.css';
import Card from './Card';

const Shop = () => {
    return (
        <div className="shop">
            <div className="cards-grid">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Shop;
