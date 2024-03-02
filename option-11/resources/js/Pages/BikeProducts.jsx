// resources/js/pages/BikeProducts.jsx

import { InertiaLink } from "@inertiajs/inertia-react";

import Bike from "../components/Bike";
import Bik from "@/Components/Bik";

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import NavBar from "@/Components/NavBar";
import Login from "@/Pages/Auth/Login";
import AnimateModal from "@/Components/AnimateModal";

const BikeProducts = ({ auth, bikes }) => {
    return (
        <div>
            <AnimateModal auth={auth}>
                <div className="heading backdrop-brightness-90 my-2">
                    <h1 className="display-4 text-white text-center py-2">
                        Bikes Section
                    </h1>
                    <p className="lead text-white text-center pb-4">
                        Where quality meets affordability &ndash; our bikes
                        redefine the ride.
                    </p>
                </div>
                <Bike bikes={bikes} auth={auth} />

                <div className="text-center mt-4">
                    <InertiaLink
                        className="btn btn-light"
                        href={route("basket")}
                    >
                        Go to Basket
                    </InertiaLink>
                </div>
            </AnimateModal>
        </div>
    );
};

export default BikeProducts;
