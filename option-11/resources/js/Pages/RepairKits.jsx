import React, { useState } from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import RepairKit from "@/Components/RepairKit";
import AnimateModal from "@/Components/AnimateModal";
import Footer from "@/Components/Footer";
const RepairKits = ({ auth, repairKit }) => {
    const [filter, setFilter] = useState("All Repair Kits");
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
                        Repair Kits Section
                    </h1>
                    <p className="lead text-white text-center pb-4">
                        Browse our diverse range of repair kits
                    </p>

                    <section className="filters-section flex justify-center gap-10 pb-3">
                        <form className="max-w-sm">
                            <label
                                htmlFor="repair-kit-filters"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Filter Repair Kits
                            </label>
                            <select
                                id="repair-kit-filters"
                                value={filter}
                                onChange={handleFilterChange}
                                className="cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option value="All Repair Kits">All Repair Kits</option>
                                <option value="Toolkits">Toolkits</option>
                                <option value="Puncture Kits">Puncture Kits</option>
                                <option value="Cleaning Kits">Cleaning Kits</option>
                            </select>
                        </form>

                        <form className="max-w-sm">
                            <label
                                htmlFor="repair-kit-price-filters"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Filter Prices
                            </label>
                            <select
                                id="repair-kit-price-filters"
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

                <RepairKit
                    repairKit={repairKit}
                    auth={auth}
                    filter={filter}
                    priceFilter={priceFilter}
                />

    <Footer/>
            </AnimateModal>
        </div>
    );
};

export default RepairKits;
