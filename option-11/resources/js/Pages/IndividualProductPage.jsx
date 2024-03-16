import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import { usePage } from '@inertiajs/react';
import RedirectButton from "@/Components/RedirectButton";

export default function IndividualProductPage({ product }) {
    const { flash } = usePage().props;
    const { data, setData, post, errors } = useForm({
        productid_hidden: product.id, // assuming product id is available in product object
        quantity: 1, // assuming default quantity is 1
    });

    const submit = (e) => {
        e.preventDefault();
        post("/addBasket", data);
    };

    return (
        <div>
            <h1>Individual Product Details</h1>
            <div>
                <h2>{product.productname}</h2>
                <p>Description: {product.description}</p>
                <p>Price: £{product.price}</p>
                <p>Category: {product.category}</p>
                <form onSubmit={submit}>
                    <div className="form-group">
                        <label htmlFor={`quantity_${product.id}`}>
                            Quantity
                        </label>
                        <input
                            id={`quantity_${product.id}`}
                            className="form-control"
                            min="1"
                            type="number"
                            value={data.quantity}
                            name="quantity"
                            onChange={(e) => setData("quantity", e.target.value)}
                        />
                        <InputError message={errors.quantity} className="mt-2" />
                        <p className="text-black">{flash.message}</p>
                    </div>
                    <button type="submit" className="btn btn-dark text-dark">
                        Add to basket
                    </button>
                </form>
            </div>
        </div>
    );
}
