import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, Link } from "@inertiajs/react";
import { usePage } from '@inertiajs/react'
import NavBar from "@/Components/NavBar";
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import AnimateModal from "@/Components/AnimateModal";
export default function Checkout({ auth, baskIcon }) {

    const { csrf_token } = usePage().props
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        amount: "",
        _token: csrf_token,
       
    });

    const submit = (e) => {
        e.preventDefault();

      

        // If all validations pass, proceed to submit the form
        post("/addPayment");
        
    };

    return (
        <body id="checkoutBody">
            <AnimateModal auth={auth} baskIcon={baskIcon}>
                <div class="checkoutContainer">
                    <form onSubmit={submit}>
                    <button type="submit" id="checkout-live-button">Checkout</button>
                    </form>

             
                </div>
                
            </AnimateModal>
        </body>
    );
}
