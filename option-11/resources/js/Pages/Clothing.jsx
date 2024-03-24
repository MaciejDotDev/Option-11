import { InertiaLink } from "@inertiajs/inertia-react";
import Clothes from "@/Components/Clothes"; // Import the Clothes component

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import NavBar from "@/Components/NavBar";
import AnimateModal from "@/Components/AnimateModal";
import Footer from "@/Components/Footer";
const Clothing = ({ auth, clothes }) => {
    const [filter, setFilter] = useState("All Clothes");
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
                <div className="heading backdrop-brightness-90 my-2" style={{    backgroundColor: '#17191b',

}}>
                    <h1 className="display-4 text-white text-center py-2">
                        Clothing Section
                    </h1>
                    <p className="lead text-white text-center pb-4">
                        Explore our stylish collection of clothing items.
                    </p>

                    <section className="filters-section flex justify-center gap-10 pb-3">
                        <form className="max-w-sm">
                            <label
                                htmlFor="clothing-filters"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Filter Clothes
                            </label>
                            <select
                                id="clothing-filters"
                                value={filter}
                                onChange={handleFilterChange}
                                className="cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option value="All Clothes">All Clothes</option>
                                <option value="Jersey">Jersey</option>
                                <option value="Shorts">Shorts</option>
                                <option value="Jacket">Jacket</option>
                                <option value="Tights">Tights</option>
                            </select>
                        </form>

                        <form className="max-w-sm">
                            <label
                                htmlFor="clothing-price-filters"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Filter Prices
                            </label>
                            <select
                                id="clothing-price-filters"
                                value={priceFilter}
                                onChange={handlePriceFilterChange}
                                className="cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option value="All Prices">All Prices</option>
                                <option value="0-50">£0 to £50</option>
                                <option value="50-100">£50 to £100</option>
                                <option value="100-200">£100 to £200</option>
                                <option value="200plus">£200 +</option>
                            </select>
                        </form>
                    </section>
                </div>

                <Clothes
                    clothes={clothes}
                    auth={auth}
                    filter={filter}
                    priceFilter={priceFilter}
                />

<Footer/>
            </AnimateModal>
        </div>
    );
};

export default Clothing;
