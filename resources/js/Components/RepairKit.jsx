import React from "react";

const RepairKit = ({ repairKit }) => {
    const addToBasket = (repairKit) => {
        //Add to basket logic will go here
    };
    return (
        <div>
            <h1>{repairKit.name}</h1>
            <img src={repairKit.image} alt={repairKit.name} />
            <p>{repairKit.price}</p>
            <p>{repairKit.description}</p>
            <p>{repairKit.category}</p>
            <button onClick={() => addToBasket(repairKit)}>Add to Basket</button>
        </div>
    );
}

export default RepairKit;
