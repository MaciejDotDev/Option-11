import { useForm } from "@inertiajs/react";
import React, { useState } from "react";
import InputError from "@/Components/InputError";
import { usePage } from '@inertiajs/react'
const Accessory = ({ accessories,auth, openModal }) => {
    const { flash } = usePage().props
    const { data, setData, post, processing, errors, reset } = useForm({
        accessoryid_hidden: "",
        quantity: "",
    });

    const [selectedAccessory, setSelectedAccessory] = useState("");

    const submit = (e) => {
        e.preventDefault();
        post("/addBasketAccessory", data);
    };

    const onClickPreventDefault= (e) => {
        openModal();
        e.preventDefault();
        
      };
     

    const accessoryList = accessories.map((accessory) => (
        <div
            key={accessory.products.productid}
            className={`col-md-6 mb-4 ${selectedAccessory === accessory.products.productid ? "selected-accessory" : ""
                }`}
            onClick={() => {
                setSelectedAccessory(accessory.products.productid);
                setData("accessoryid_hidden", accessory.products.productid);
            }}
        >
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title text-center h4">{accessory.products.productname}</h5>
                    <p className="card-text">{accessory.description}</p>
                    
                    <p className="card-text">
                        <strong>Price:</strong> £{accessory.products.price}
                    </p>
                    <p className="card-text">
                        <strong>Category:</strong> {accessory.category}
                    </p>
                    <p className="card-text">
                        <strong>Size:</strong> {accessory.size}
                    </p>
                    <p className="card-text">
                        <strong>Colour:</strong> {accessory.colour}
                    </p>
                    <div className="form-group">
                        <label htmlFor={`quantity_${accessory.products.productid}`}>Quantity</label>
                        <input
                            id={`quantity_${accessory.products.productid}`}
                            className="form-control"
                            min="0"
                            type="number"
                            value={data.quantity}
                            name="quantity"
                            onChange={(e) => setData("quantity", e.target.value)}
                        />
                          <p style={{color:"green"}} className="block font-medium text-sm text-gray-700">{flash.message}</p>
                        <InputError message={errors.quantity} className="mt-2" />
                    </div>
                </div>
                <div className="card-footer">
                   
                    {auth.user ? (
                     
                     <button type="submit" className="btn btn-dark text-dark">
                     Add to basket
                 </button>
                          
                        ) : (
                          
                            <button type="submit" onClick={onClickPreventDefault} className="btn btn-dark text-dark">
                            Add to basket
                        </button>
                        )}
                </div>
            </div>
        </div>
    ));

    return (
        <form onSubmit={submit}>
            <div className="container">
                <div className="row">{accessoryList} </div>
                
            </div>
        </form>
    );
};

export default Accessory;