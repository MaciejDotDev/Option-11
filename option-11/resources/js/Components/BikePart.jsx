import { useForm } from "@inertiajs/react";
import React, { useState } from "react";
import InputError from "@/Components/InputError";

const BikePart = ({ bikePart, success,auth,openModal }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        bikepartid_hidden: "",
        quantity: "",
    });

    const [selectedBikePartId, setSelectedBikePartId] = useState("");

    const submit = (e) => {
        e.preventDefault();
        post("/addBasketPart", data);
    };

    const onClickPreventDefault= (e) => {
        openModal();
        e.preventDefault();
        
      };

    const bikePartList = bikePart.map((part) => (
        <div
            key={part.bikepartsid}
            className={`col-md-6 mb-4 ${selectedBikePartId === part.bikepartsid ? "selected-bike-part" : ""
                }`}
            onClick={() => {
                setSelectedBikePartId(part.bikepartsid);
                setData("bikepartid_hidden", part.bikepartsid);
            }}
        >
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title text-center h4">{part.productname}</h5>
                    <p className="card-text">{part.description}</p>
                    <p className="card-text">
                        <strong>Price:</strong> £{part.price}
                    </p>
                    <p className="card-text">
                        <strong>Category:</strong> {part.category}
                    </p>
                    <p className="card-text">
                        <strong>Colour:</strong> {part.color}
                    </p>
                    <p className="card-text">
                        <strong>Size:</strong> {part.size}
                    </p>
                    <p className="card-text">
                        <strong>Compatible with:</strong> {part.CompatibleWithType}
                    </p>
                    <div className="form-group">
                        <label htmlFor={`quantity_${part.bikepartsid}`}>Quantity</label>
                        <input
                            id={`quantity_${part.bikepartsid}`}
                            className="form-control"
                            min="0"
                            type="number"
                            value={data.quantity}
                            name="quantity"
                            onChange={(e) => setData("quantity", e.target.value)}
                        />
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
                <div className="row">{bikePartList}</div>
            </div>
        </form>
    );
};

export default BikePart;