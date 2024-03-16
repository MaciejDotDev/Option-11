// resources/js/pages/BikeProducts.jsx

import { InertiaLink } from "@inertiajs/inertia-react";

import Bike from "@/Components/Bike";

import Form from "react-bootstrap/Form";

import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import NavBar from "@/Components/NavBar";
import Login from "@/Pages/Auth/Login";
import AnimateModal from "@/Components/AnimateModal";
import Footer from "@/Components/Footer";
const BikeProducts = ({ auth, bikes }) => {
    // State for bikes filtering process, with default value set to all bikes.
    const [filter, setFilter] = useState("All Bikes");
    const [priceFilter, setPriceFilter] = useState("All Prices");

    // // Check to see if the filter state updates correctly.
    // useEffect(() => {
    //     console.log(filter); // Logging the updated state value
    // }, [filter]); // Will run this funciton whenever the filter state is changed.

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const handlePriceFilterChange = (e) => {
        setPriceFilter(e.target.value);
    };

    return (
        <div>
            <AnimateModal auth={auth}>
                <div className="heading backdrop-brightness-90 my-2" style={{    backgroundColor: '#17191b',

                 }}>
                    <h1 className="display-4 text-white text-center py-2">
                    Bikes
                    </h1>
                    <p className="lead text-white text-center pb-4">
                        Where quality meets affordability &ndash; our bikes
                        redefine the ride.
                    </p>

                    <section className="filters-section flex justify-center gap-10 pb-3">
                        <form class="max-w-sm">
                            <label
                                for="bike-filters"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Filter Bikes
                            </label>
                            <select
                                id="bike-filters"
                                value={filter}
                                onChange={handleFilterChange}
                                class=" cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option selected>All Bikes</option>
                                <option value="Mountain">Mountain Bikes</option>
                                <option value="Electric">Electric Bikes</option>
                                <option value="Hybrid">Hybrid Bikes</option>
                                <option value="Kids">Kids Bikes</option>
                            </select>
                        </form>

                        <form className="max-w-sm">
                            <label
                                htmlFor="price-filters"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Filter Prices
                            </label>
                            <select
                                id="price-filters"
                                value={priceFilter}
                                onChange={handlePriceFilterChange}
                                className="cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option value="All Prices">All Prices</option>
                                <option value="0-500">£0 to £500</option>
                                <option value="500-1000">£500 to £1000</option>
                                <option value="1000-1500">
                                    £1000 to £1500
                                </option>
                                <option value="1500plus">£1500 +</option>
                            </select>
                        </form>
                    </section>
                </div>
                <Bike
                    bikes={bikes}
                    auth={auth}
                    filter={filter}
                    priceFilter={priceFilter}
                />

<Footer  />
            </AnimateModal>
        </div>
    );
};

export default BikeProducts;
