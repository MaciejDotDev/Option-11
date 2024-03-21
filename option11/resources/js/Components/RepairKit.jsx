import { useForm } from "@inertiajs/react";
import React, { useState } from "react";
import InputError from "@/Components/InputError";
import { usePage } from '@inertiajs/react'
const RepairKit = ({ repairKit, success,auth,openModal }) => {
    const { flash } = usePage().props
    const { data, setData, post, processing, errors, reset } = useForm({
        product_hidden: "",
        quantity: "",
    });

    const [selectedRepairKit, setSelectedRepairKit] = useState("");

    const submit = (e) => {
        e.preventDefault();
        post("/addBasket", data);
    };

    const onClickPreventDefault= (e) => {
        openModal();
        e.preventDefault();

      };

    const repairKitList = repairKit.map((kit) => (
        <div
            key={kit.products.productid}
            className={`col-md-6 mb-4 ${selectedRepairKit === kit.products.productid ? "selected-repair-kit" : ""
                }`}
            onClick={() => {
                setSelectedRepairKit(kit.products.productid);
                setData("product_hidden", kit.products.productid);
            }}
        >
            <div className="card">
                <div className="card-body">
                    <h5 className="text-center card-title h4">{kit.products.productname}</h5>
                    <p className="card-text">{kit.products.description}</p>
                    <p className="card-text">
                        <strong>Price:</strong> £{kit.products.price}
                    </p>
                    <p className="card-text">
                        <strong>Category:</strong> {kit.category}
                    </p>
                    <p className="card-text">
                        <strong>Compatible with:</strong> {kit.CompatibleWithType}
                    </p>
                    <div className="form-group">
                        <label htmlFor={`quantity_${kit.products.productid}`}>Quantity</label>
                        <input
                            id={`quantity_${kit.products.productid}`}
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
                <div className="row">{repairKitList}</div>
            </div>
        </form>
    );
};

export default RepairKit;
