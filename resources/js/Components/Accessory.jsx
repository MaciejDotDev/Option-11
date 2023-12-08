import React from 'react';

const Accessory = ({accessory}) => {
    function addToBasket(accessory) {
        //Add to basket logic will go here
    };
    return (
        <div>
            <h1>{accessory.name}</h1>
            <img src={accessory.image} alt={accessory.name} />
            <p>{accessory.price}</p>
            <p>{accessory.description}</p>
            <p>{accessory.category}</p>
            <button onClick={() => addToBasket(accessory)}>Add to Basket</button>
        </div>
    );
};

export default Accessory;
