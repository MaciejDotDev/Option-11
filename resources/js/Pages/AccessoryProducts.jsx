import React, { useState } from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import Accessory from "@/Components/Accessory";
import AnimateModal from "@/Components/AnimateModal";

const AccessoryProducts = ({ auth }) => {
    const [filter, setFilter] = useState("All Accessories");
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
                        Accessory Section
                    </h1>
                    <p className="lead text-white text-center pb-4">
                        Safety Meets Style: Your Accessory Haven
                    </p>

                    <section className="filters-section flex justify-center gap-10 pb-3">
                        <form className="max-w-sm">
                            <label
                                htmlFor="accessory-filters"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Filter Accessories
                            </label>
                            <select
                                id="accessory-filters"
                                value={filter}
                                onChange={handleFilterChange}
                                className="cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option value="All Accessories">
                                    All Accessories
                                </option>
                                <option value="Helmet">Helmet</option>
                                <option value="Gloves">Gloves</option>
                                <option value="Knee Pads">Knee Pads</option>
                                <option value="Water Bottle">
                                    Water Bottles
                                </option>
                            </select>
                        </form>

                        <form className="max-w-sm">
                            <label
                                htmlFor="accessory-price-filters"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Filter Prices
                            </label>
                            <select
                                id="accessory-price-filters"
                                value={priceFilter}
                                onChange={handlePriceFilterChange}
                                className="cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option value="All Prices">All Prices</option>
                                <option value="0-20">£0 to £20</option>
                                <option value="20-50">£20 to £50</option>
                                <option value="50-100">£50 to £100</option>
                                <option value="100">£100 +</option>
                            </select>
                        </form>
                    </section>
                </div>

                <Accessory

                    auth={auth}
                    filter={filter}
                    priceFilter={priceFilter}
                />


            </AnimateModal>
        </div>
    );
};

export default AccessoryProducts;
