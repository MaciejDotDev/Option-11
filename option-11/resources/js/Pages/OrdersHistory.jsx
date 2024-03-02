
import { InertiaLink } from "@inertiajs/inertia-react";
import Accessory from "../components/Accessory";
import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import AnimateModal from '@/Components/AnimateModal';
import NavBar from "@/Components/NavBar";

const OrdersHistory = ({ auth, orders, bikes, basketitems }) => {

        

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
  

    return (
        <>
        <AnimateModal auth={auth} >  

        <Head title="Basket" />

        <body className="basketbody">
            <div className="basketContainer">
            <h1 className="h1basket">Order History</h1>

                <div className="basketClass">
                    {orders.length > 0 ? (
                        <div>
                            {orders.map((item, index) => (
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
                                            <p>Quantity: {basketitems[index].quantity}</p>
                                            <p>Status: {item.status}</p>
                                            <p>Tracking code: {item.trackingcode}</p>


                                           
                                        </div>
                                    </div>
                                </div>
                            ))}

                      
                        </div>
                    ) : (
                        <p>Order history is empty.</p>
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

export default OrdersHistory;
