import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, Link } from "@inertiajs/react";

import NavBar from "@/Components/NavBar";
import React, { useState } from "react";
import { AnimatePresence } from 'framer-motion';
import AnimateModal from '@/Components/AnimateModal';
export default function Checkout({ auth,baskIcon }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        cardNumber: "",
        expiryDate: "",
        cvv: "",
    });

    const submit = (e) => {
        e.preventDefault();

        // Client-side validation
        const cardNumberRegex = /^\d{16}$/;
        const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{4}$/;
        const cvvRegex = /^\d{3}$/;

        if (!cardNumberRegex.test(data.cardNumber)) {
            alert("Invalid card number. Please enter a 16-digit card number.");
            return;
        }

        if (!expiryDateRegex.test(data.expiryDate)) {
            alert(
                "Invalid expiry date. Please enter a valid date in MM/YYYY format."
            );
            return;
        }

        if (!cvvRegex.test(data.cvv)) {
            alert("Invalid CVV. Please enter a 3-digit CVV.");
            return;
        }

        // If all validations pass, proceed to submit the form
        post(route("addPayment"), data);
    };

    return (

  
        
        <body id="checkoutBody">
            
            
            <AnimateModal auth={auth} baskIcon={baskIcon}>   
            <div class="checkoutContainer">
            <h1 id="checkoutTitle">Checkout Form</h1>
                <form id="checkoutForm" onSubmit={submit}>
                    <label
                        class="checkoutlabel"
                        style={{ color: "white" }}
                        htmlFor="cardNumber"
                    >
                        Card Number:
                    </label>
                    <input
                        class="inputCheckout"
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        placeholder="Card Number"
                        required
                        value={data.cardNumber}
                        onChange={(e) => setData("cardNumber", e.target.value)}
                    />
                    <br />

                    <label
                        class="checkoutlabel"
                        style={{ color: "white" }}
                        htmlFor="expiryDate"
                    >
                        Expiry Date (MM/YYYY):
                    </label>
                    <input
                        class="inputCheckout"
                        type="text"
                        id="expiryDate"
                        name="expiryDate"
                        placeholder="MM/YYYY"
                        required
                        value={data.expiryDate}
                        onChange={(e) => setData("expiryDate", e.target.value)}
                    />
                    <br />

                    <label
                        class="checkoutLabel"
                        style={{ color: "white" }}
                        htmlFor="cvv"
                    >
                        CVV:
                    </label>
                    <input
                        class="inputCheckout"
                        type="text"
                        id="cvv"
                        name="cvv"
                        placeholder="CVV"
                        required
                        value={data.cvv}
                        onChange={(e) => setData("cvv", e.target.value)}
                    />
                    <br />

                    <button class="checkoutBtn"type="submit">Pay</button>
                </form>
            </div>
            </AnimateModal>
        </body>
    );
}
