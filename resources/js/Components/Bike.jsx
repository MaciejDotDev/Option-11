import React from "react";

const Bike = ({ bike }) => {
    const addToBasket = (bike) => {
        //Add to basket logic will go here
    };
    return (
        <div>
            <h1>{bike.name}</h1>
            <img src={bike.image} alt={bike.name} />
            <p>{bike.price}</p>
            <p>{bike.description}</p>
            <p>{bike.category}</p>
            <button onClick={() => addToBasket(bike)}>Add to Basket</button>
        </div>
    );
};

export default Bike;
