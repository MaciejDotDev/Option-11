import { useForm } from "@inertiajs/react";
import React, { useState } from "react";
import InputError from "@/Components/InputError";
import { usePage } from '@inertiajs/react';
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";
const BikePart = ({ bikePart,auth,openModal }) => {
    const { flash } = usePage().props
    const { data, setData, post, processing, errors, reset } = useForm({
        product_hidden: "",
        quantity: "",
    });

    const [selectedBikePartId, setSelectedBikePartId] = useState("");

    const submit = (e) => {
        e.preventDefault();
        post("/addBasket", data);
    };

    const onClickPreventDefault= (e) => {
        openModal();
        e.preventDefault();

      };
      const addToWishlist = (bikeId) => {
        Inertia.post("/wishlist/add", { itemId: bikeId });
    };
    const bikePartList = bikePart.map((part) => (
        <div
            key={part.products.bikepartsid}
            className={`col-md-6 mb-4 ${selectedBikePartId === part.products.bikepartsid
                }`}
            onClick={() => {
                setSelectedBikePartId(part.products.productid);
                setData("product_hidden", part.products.productid);
            }}
        >
            <div className="card">
                <div className="card-body">
                    <h5 className="text-center card-title h4">{part.products.productname}</h5>
                    <p className="card-text">{part.products.description}</p>
                    <p className="card-text">
                        <strong>Price:</strong> £{part.products.price}
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

                    <p className="card-text">
                        <strong>Stock quantity:</strong> {part.products.stockquantity}
                    </p>
                    <div className="form-group">
                        <label htmlFor={`quantity_${part.products.bikepartsid}`}>Quantity</label>
                        <input
                            id={`quantity_${part.products.bikepartsid}`}
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
                         {auth.user ? (
                        <button
                            type="button"
                            onClick={() => addToWishlist(part.productid)}
                            className="btn btn-dark text-dark"
                        >
                            Add to Wishlist
                        </button>
                    ) : (
                        <button
                            type="button"
                            onClick={onClickPreventDefault}
                            className="btn btn-dark text-dark"
                        >
                            Add to Wishlist
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
