// Desc: BikeParts page for the user to view all bike parts
// We use react because we are using react components
import React, { useState } from "react";
// We use inertia link to link to other pages
import { InertiaLink } from "@inertiajs/inertia-react";
// We import the bikepart component to use in the page
import BikePart from "@/Components/BikePart"; // Updated import name
import { AnimatePresence, motion } from "framer-motion";
import AnimateModal from "@/Components/AnimateModal";

// In React, we use a function to create a component, which can be a page or a component
// In this case, this is a page, so we create a function called BikeParts
// In the page bikeparts, we pass in the props auth and bikeparts, which we get from the controller, to use in the page
import Footer from "@/Components/Footer";
const BikeParts = ({ auth, bikePart }) => {
    // State for parts filtering process, with default value set to all parts.
    const [filter, setFilter] = useState("All Parts");
    const [priceFilter, setPriceFilter] = useState("All Prices");

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const handlePriceFilterChange = (e) => {
        setPriceFilter(e.target.value);
    };

    return (
        <div>
            <AnimateModal auth={auth}>
                <div className="heading backdrop-brightness-90 my-2"   style={{    backgroundColor: '#17191b',

}}>
                    <h1 className="display-4 text-white text-center py-2">
                        Bike Parts Section
                    </h1>
                    <p className="lead text-white text-center pb-4">
                        Find the perfect parts to enhance your ride.
                    </p>

                    <section className="filters-section flex justify-center gap-10 pb-3">
                        <form className="max-w-sm">
                            <label
                                htmlFor="part-filters"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Filter Parts
                            </label>

                            <select
                                id="part-filters"
                                value={filter}
                                onChange={handleFilterChange}
                                className="cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-24 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option value="All Parts">All Parts</option>
                                <option value="Chain">Chain</option>
                                <option value="Pedals">Pedals</option>
                                <option value="Grips">Grips</option>
                                <option value="Saddle">Seats</option>
                            </select>
                        </form>

                        <form className="max-w-sm">
                            <label
                                htmlFor="part-price-filters"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Filter Prices
                            </label>

                            <select
                                id="part-price-filters"
                                value={priceFilter}
                                onChange={handlePriceFilterChange}
                                className="cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option value="All Prices">All Prices</option>
                                <option value="0-25">£0 to £25</option>
                                <option value="25-50">£25 to £50</option>
                                <option value="50-100">£50 to £100</option>
                                <option value="100plus">£100 +</option>
                            </select>
                        </form>
                    </section>
                </div>

                <BikePart
                    bikePart={bikePart}
                    auth={auth}
                    filter={filter}
                    priceFilter={priceFilter}
                />

<Footer/>
            </AnimateModal>
        </div>
    );
};

// We export the component so we can use it in other pages
export default BikeParts;
