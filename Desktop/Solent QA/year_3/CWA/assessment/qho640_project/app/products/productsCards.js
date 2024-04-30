import React from 'react';
import useProducts from '../database/products';
import Image from 'next/image';

function ProductCards() {
    const products = useProducts();

    return (
        <div className="cards-container">  {/* Flex container */}
            {products.map((product, index) => (
                <div key={index} className="card">
                    <div className="card-image">
                        <figure className="image is-2by3">
                            <Image src={product.Image} 
                            alt={product.Model}
                            width={50}  
                            height={80} 
                             />
                        </figure>
                    </div>

                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">{product.Model}</p>
                                <p className="subtitle is-6">{product.Make}</p>
                            </div>
                        </div>
                        <div className="content">
                            <p>Features: {product.Features}</p>
                            <br />
                            <p>Price: ${product.Price}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}



export default ProductCards;