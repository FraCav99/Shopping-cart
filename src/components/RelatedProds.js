import React from 'react';
import {Link} from 'react-router-dom';
import Card from './Card';
import '../styles/RelatedProds.css';

const RelatedProds = ({ match, relatedItems, resetLoader }) => {

    return (
        <div className="related-products-container">
            <h2>Related Products</h2>
            <div className="products-container">
                {relatedItems
                    .filter(item => item.id !== +match.params.id)
                    .map(item => (
                        <Link to={`/shop/${item.id}`} key={item.id} onClick={resetLoader}>
                            <Card 
                                key={item.id} 
                                id={item.id}
                                price={item.price}
                                title={item.title}
                                image={item.image}
                            />
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default RelatedProds;
