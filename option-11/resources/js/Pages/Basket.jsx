import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import NavBar from "@/Components/NavBar";
import { Inertia } from "@inertiajs/inertia";
import { AnimatePresence } from "framer-motion";
import InputError from "@/Components/InputError";
import Footer from "@/Components/Footer";
import { usePage } from "@inertiajs/react";
import AnimateModal from "@/Components/AnimateModal";
import AddRemBasket from "@/Components/AddRemBasket";
export default function Basket({ auth, basket, totalprice }) {
    const { errors } = usePage().props;
    const { data, setData, post, processing } = useForm({
        basketid: null,
    });

    const handleItemRemove = (e, basketid) => {
        e.preventDefault();
        setData("basketid", basketid);
    };

const [selectedProduct, setSelectedProduct] = useState("");


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
                    <div className="basketContainer" style={{ fontFamily: "Koulen, sans-serif"  }}>
                        <h1 className="h1basket"  >Shopping Basket</h1>

                        <div className="basketClass"  >
                            {basket.length > 0 ? (
                                <div>
                                    {basket.map((item, index) => (
                                        <div className="basketitem" key={index}   onClick={() => {
                                            setSelectedProduct( item.products
                                                .productid)
                                        }}>
                                            <div
                                                className={
                                                    index % 2 === 0 ? "" : ""
                                                }
                                                key={item.basketid}
                                            >
                                                <div  className="item-details" >
                                                    <h2 className="h2basket"  style={{ fontFamily: "Koulen, sans-serif"  }}>
                                                        {
                                                            item.products
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
                                                                item.products
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
                                                                item.products
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
                                                        <div>
                                                            <button
                                                                type="submit"
                                                                className="text-red-500 hover:underline"
                                                            >
                                                                Remove
                                                            </button>



                                                        </div>
                                                    </form>
{/* add error here for stock */}
                                                </div>
                                                {item.productid == selectedProduct && (
                                                              <InputError
                                                                  message={errors.stock}
                                                                  className="mt-2"
                                                              />
                                                            ) }
                                            </div>

                                        </div>
                                    ))}

                                    <div>
                                        <div className="total">
                                            <h2 className="h2basket">
                                                Total Amount:
                                            </h2>
                                            <p>£{totalprice}</p>
                                        </div>

                                        <a
                                            disabled={processing}
                                            type="button"
                                            href={route("addPayment")}
                                            className="checkout-btn"
                                        >
                                            Go to Checkout
                                        </a>
                                    </div>
                                </div>
                            ) : (
                                <p style={{ fontSize: "25px" }}>
                                    Your basket is empty.
                                </p>
                            )}
                        </div>
                    </div>
                    <Footer  position="absolute"  />
                </body>

            </AnimateModal>
        </>
    );
}
