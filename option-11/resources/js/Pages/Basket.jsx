import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import NavBar from "@/Components/NavBar";
import { Inertia } from "@inertiajs/inertia";
import { AnimatePresence } from "framer-motion";
import Login from "@/Pages/Auth/Login";
import AnimateModal from "@/Components/AnimateModal";
import AddRemBasket from "@/Components/AddRemBasket";
export default function Basket({ auth, basket, totalprice, bikes }) {
    const { data, setData, post } = useForm({
        basketid: null,
    });

    const handleItemRemove = (e, basketid) => {
        e.preventDefault();
        setData("basketid", basketid);
    };

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
            <AnimateModal auth={auth}>
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
                                                        {
                                                            bikes[index]
                                                                .productname
                                                        }
                                                    </h2>

                                                    <p>
                                                        Price: £
                                                        {item.totalprice}
                                                    </p>
                                                    <p>Quantity: </p>
                                                    <div
                                                        key={item.basketid}
                                                        style={{
                                                            width: "1rem",
                                                            height: "1rem",
                                                            position:
                                                                "relative",
                                                            // Adjust the top value as needed
                                                            left: "20px", // Adjust the right value as needed
                                                            bottom: "22px",
                                                            marginTop: "0.3rem",
                                                            marginBottom:
                                                                "0.3rem",
                                                        }}
                                                    >
                                                        <AddRemBasket
                                                            key={item.basketid}
                                                            item={item.quantity}
                                                            itemid={
                                                                item.basketid
                                                            }
                                                            action="remove"
                                                            type="danger"
                                                            right="1.4rem"
                                                            top="22px"
                                                            symbol="-"
                                                            totalprice={
                                                                bikes[index]
                                                                    .price
                                                            }
                                                        ></AddRemBasket>

                                                        <p
                                                            style={{
                                                                marginRight:
                                                                    "4.11rem",
                                                            }}
                                                        >
                                                            {" "}
                                                            {item.quantity}
                                                        </p>

                                                        <AddRemBasket
                                                            item={item.quantity}
                                                            itemid={
                                                                item.basketid
                                                            }
                                                            action="add"
                                                            type="success"
                                                            left={
                                                                item.quantity >=
                                                                10
                                                                    ? item.quantity >=
                                                                      20
                                                                        ? "1.5rem"
                                                                        : "1.5rem"
                                                                    : "1rem"
                                                            }
                                                            bottom="23px"
                                                            symbol="+"
                                                            paddingTop="0.1rem"
                                                            totalprice={
                                                                bikes[index]
                                                                    .price
                                                            }
                                                        ></AddRemBasket>
                                                    </div>

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

                                    <div style={{width: "100%"}}>
                                        <div className="total">
                                            <h2 className="h2basket">
                                                Total Amount:
                                            </h2>
                                            <p>£{totalprice}</p>
                                        </div>
                                        
                                        <button
                                            type="button"
                                            onClick={() =>
                                                Inertia.visit(route("addPayment"))
                                            }
                                            className="checkout-btn"
                                        >
                                            Go to Checkout
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <p style={{ fontSize: "25px" }}>
                                    Your basket is empty.
                                </p>
                            )}
                        </div>
                    </div>
                </body>

                <button
                    className="mt-3 btn btn-outline-light"
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
