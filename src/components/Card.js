import React from 'react';
import '../styles/Card.css';

const Card = ({
    id,
    price,
    title,
    image
}) => {
    return (
        <div className="card" id={id}>
            <div className="card-image">
                <img src={image} alt="item-pic" />
            </div>
            <div className="card-info">
                <p className="item-title">{title}</p>
                <p className="item-price">{price}$</p>
            </div>
        </div>
    )
}

export default Card;
