import React, { useState, useEffect } from "react";

import AdminNavbar from "@/Pages/AdminNavbar";
const AdminEditProducts = ({ products }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [filter, setFilter] = useState("All products");
    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };
    // Apply filter based on the selected option
    const filteredBikeParts = products.filter((user) => {
        const searchFilterid =
            user.productid == searchQuery ||
            (user.productname
                .toLowerCase()
                .includes(searchQuery.toLowerCase()) &&
                (filter === "All products" || user.products.name === filter));
        // Filter based on search query
        // Filter based on search query
        return searchFilterid;
    });

    const bikePartList = filteredBikeParts.map((product) => {
        const date = new Date(product.created_at);
        const date1 = new Date(product.updated_at);

        // Format date using toLocaleDateString and toLocaleTimeString
        const formattedDate = date.toLocaleDateString();
        const formattedTime = date.toLocaleTimeString();
        const formattedDate1 = date1.toLocaleDateString();
        const formattedTime1 = date1.toLocaleTimeString();
        return (
            <tr key={product.productid}>
                <td scope="row">{product.productid}</td>
                <td scope="row">{product.productname}</td>
                <td scope="row">{product.price}</td>
                <td scope="row" className="editDescription">
                    {product.description}
                </td>
                <td scope="row">{product.products.name}</td>
                <td scope="row">
                    {formattedDate} {formattedTime}
                </td>
                <td scope="row">
                    {formattedDate1} {formattedTime1}
                </td>
                <td scope="row">
                    {" "}
                    <a  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        href={route("editProducts", {
                            productid: product.productid,
                        })}
                    >
                        Edit Product
                    </a>
                </td>
            </tr>
        );
    });

    return (
        <div style={{  borderRadius:"10px" }}>
            {" "}
            <AdminNavbar />
            <h2 className="text-light h2 text-center pt-3 ">Products</h2>
            <div className="flex align-middle justify-center items-center p-6 mr-2" >
                <input class=" inline-flex p-2 mr-3 rounded-md "
                    style={{ width:"30%" }}
                    type="text"
                    className="flex s"
                    placeholder="Search users by ID or name"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />

                <select
                    id="part-filters"
                    value={filter}
                    onChange={handleFilterChange}
                    className="cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-24 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                    <option value="All products">All</option>
                    <option value="bike">Bikes</option>
                    <option value="accessory">Accessory</option>
                    <option value="bikepart">Bike Part</option>
                    <option value="repairkit">RepairKit</option>
                </select>
            </div>
            <table class="table table-bordered editProducts" style={{ margin:"16px auto", padding:"10px 5px" }}>
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Description</th>
                        <th scope="col">Category</th>
                        <th scope="col">Created</th>
                        <th scope="col">Updated</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>{bikePartList}</tbody>
            </table>
        </div>
    );
};

export default AdminEditProducts;
