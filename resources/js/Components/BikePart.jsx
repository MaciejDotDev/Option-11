import React from "react";

const BikePart = ({ bikePart }) => {
    const addToBasket = (bikePart) => {
        //Add to basket logic will go here
    };
    return (
        <div>
            <h1>{bikePart.name}</h1>
            <img src={bikePart.image} alt={bikePart.name} />
            <p>{bikePart.price}</p>
            <p>{bikePart.description}</p>
            <p>{bikePart.category}</p>
            <button onClick={() => addToBasket(bikePart)}>Add to Basket</button>
        </div>
    );
}

export default BikePart;
