import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import { usePage } from '@inertiajs/react';
import RedirectButton from "@/Components/RedirectButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import NavBar from "@/Components/NavBar";

export default function IndividualProductPage({auth, product}) {

    const { flash } = usePage().props;
    const { data, setData, post, errors } = useForm({
        productid_hidden: product.id,
        quantity: 1
    });

    const submit = (e) => {
        e.preventDefault();
        post("/addBasket", data);
    };

    return (
        <div className="container">
            <NavBar auth={auth} />
            <h1 class="mb-6 text-5xl font-bold">Individual Product Details</h1>
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">{product.productname}</h2>
                    <p className="card-text">Description: {product.description}</p>
                    <p className="card-text">Price: £{product.price}</p>
                    <p className="card-text">Category: {product.category}</p>
                    <form onSubmit={submit}>
                        <div className="form-group">
                            <label htmlFor={`quantity_${product.id}`}>Quantity</label>
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
                        <button type="submit" className="btn btn-dark">Add to Basket</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
