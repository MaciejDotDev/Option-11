import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import NavBar from "@/Components/NavBar";
import { Inertia } from "@inertiajs/inertia";
import { AnimatePresence } from 'framer-motion';
import Login from '@/Pages/Auth/Login';
import AnimateModal from '@/Components/AnimateModal';
export default function Basket({ auth, basket, totalprice, bikes,baskIcon }) {
    const { data, setData, post } = useForm({
        basketid: null,
    });

    const [quantities, setQuantities] = useState(basket.map(() => 1));

    const handleQuantityChange = (index, newQuantity) => {
        const newQuantities = [...quantities];
        newQuantities[index] = newQuantity;
        setQuantities(newQuantities);
    };

    const handleItemRemove = (e, basketid) => {
        e.preventDefault();
        setData("basketid", basketid);
    };

    useEffect(() => {
        const scrollToTopButton = document.getElementById("scrollToTop");

        const handleScrollToTop = () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        };

        if (scrollToTopButton) {
            scrollToTopButton.addEventListener("click", handleScrollToTop);
        }

        return () => {
            if (scrollToTopButton) {
                scrollToTopButton.removeEventListener(
                    "click",
                    handleScrollToTop
                );
            }
        };
    }, []);

    useEffect(() => {
        const removeItem = async () => {
            await post("/deleteProduct");
        };

        if (data.basketid !== null) {
            removeItem();
        }
    }, [data.basketid]);

  
  

    return (
        <>
        
        <AnimateModal auth={auth} baskIcon={baskIcon}>
             
           

            <Head title="Basket" />

            <body className="basketbody">
                <div className="basketContainer">
                    <h1 className="h1basket">Shopping Basket</h1>

                    <div className="basketClass">
                        {basket.length > 0 ? (
                            <div>
                                {basket.map((item, index) => (
                                    <div className="basketitem" key={index}>
                                        <div
                                            className={
                                                index % 2 === 0 ? "" : ""
                                            }
                                        >
                                            <div className="item-details">
                                                <h2 className="h2basket">
                                                  
                                                    {bikes[index].productname}
                                                </h2>

                                                <p>Price: £{item.totalprice}</p>
                                                <p>Quantity: {item.quantity}</p>

                                                <form
                                                    onSubmit={(e) =>
                                                        handleItemRemove(
                                                            e,
                                                            item.basketid
                                                        )
                                                    }
                                                >
                                                    <button
                                                        type="submit"
                                                        className="text-red-500 hover:underline"
                                                    >
                                                        Remove
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                <div className="total">
                                    <h2 className="h2basket">Total Amount:</h2>
                                    <p>£{totalprice}</p>
                                </div>

                                <button
                                    type="button"
                                    onClick={() =>
                                        Inertia.visit(route("checkout"))
                                    }
                                    className="checkout-btn"
                                >
                                    Go to Checkout
                                </button>
                            </div>
                        ) : (
                            <p style={{ fontSize: "25px" }}>Your basket is empty.</p>
                        )}
                    </div>
                </div>
            </body>

            <button
                className="btn btn-outline-light mt-3"
                id="scrollToTop"
                title="Scroll to Top"
                style={{ display: "block", margin: "0 auto" }}
            >
                ^ Back to Top
            </button>
            </AnimateModal>
        </>
    );
}
