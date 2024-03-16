import React from "react";

export default function IndividualProductPage({ product }) {



    return (
        <div>
            <h1>Individual Product Details</h1>
            <div>
                <h2>{product.productname}</h2>
                <p>Description: {product.description}</p>
                <p>Price: £{product.price}</p>
                <p>Category: {product.category}</p>
            </div>
        </div>
    );
}
