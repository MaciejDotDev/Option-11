import React, { useState } from "react";

const StockUpdate = () => {
    const [selectedProductType, setSelectedProductType] = useState('');
    const [stockQuantity, setStockQuantity] = useState(0);

    const handleProductTypeChange = (event) => {
        setSelectedProductType(event.target.value);
    };

    const handleStockQuantityChange = (event) => {
        setStockQuantity(parseInt(event.target.value));
    };

    const handleStockUpdate = () => {
        fetch('/update-stock',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({productType:selectedProductType}),
        })
        .then(response=>response.json())
        .then(data=>{
            console.log(data.message);
        })
        .catch(error=>{
            console.error('Error:',error);
        });
    };

    return (
        <div>
            <h2>Stock Update</h2>
            <label htmlFor="productType">Select Product Type:</label>
            <select id="productType" value={selectedProductType} onChange={handleProductTypeChange}>
                <option value="">Select Product Type</option>
                <option value="bikes">Bikes</option>
                <option value="bikeParts">Bike Parts</option>
                <option value="repairKits">Repair Kits</option>
                <option value="accessories">Accessories</option>
                <option value="clothing">Clothing</option>
            </select>
            <label htmlFor="quantity">Enter Quantity:</label>
            <input type="number" id="quantity" value={stockQuantity} onChange={handleStockQuantityChange}/>
            <button onClick={handleStockUpdate}>Update Stock</button>
        </div>
    );
}

export default StockUpdate;
