import { useForm } from "@inertiajs/react";
import React, { useState } from "react";
import InputError from "@/Components/InputError";
import { usePage } from '@inertiajs/react'
const Clothes = ({ clothes, success,auth,openModal }) => {
    const { flash } = usePage().props
    const { data, setData, post, processing, errors, reset } = useForm({
        clothingid_hidden: "",
        quantity: "",
    });

    const [selectedClothes, setSelectedClothes] = useState("");

    const submit = (e) => {
        e.preventDefault();
        post("/addBasketClothing", data);
    };
    const onClickPreventDefault= (e) => {
        openModal();
        e.preventDefault();
        
      };

    const clothesList = clothes.map((clothing) => (
        <div
            key={clothing.products.productid}
            className={`col-md-6 mb-4 ${selectedClothes === clothing.products.productid ? "selected-clothing" : ""
                }`}
            onClick={() => {
                setSelectedClothes(clothing.products.productid);
                setData("clothingid_hidden", clothing.products.productid);
            }}
        >
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title text-center h4">{clothing.products.productname}</h5>
                    <p className="card-text">{clothing.products.description}</p>
                    <p className="card-text">
                        <strong>Price:</strong> £{clothing.products.price}
                    </p>
                    <div className="form-group">
                        <label htmlFor={`quantity_${clothing.products.productid}`}>Quantity</label>
                        <input
                            id={`quantity_${clothing.products.productid}`}
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
        <div>
            <form onSubmit={submit}>
                <div className="container">
                    <div className="row">{clothesList}</div>
                    <p className="text-white">{success}</p>
                </div>
            </form>
        </div>
    );
};

export default Clothes;