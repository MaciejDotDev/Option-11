import React, { useState, useEffect } from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import NavBar from "@/Components/NavBar";
import { HSquareFill } from "react-bootstrap-icons";
import { Link } from "@inertiajs/react";
import AdminNavbar from "@/Pages/AdminNavbar";
const AdminViewProducts = ({ address }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [filter, setFilter] = useState("All products");
    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };
    // Apply filter based on the selected option
    const filteredBikeParts = address.filter((user) => {
        const searchFilterid =
            user.addressid == searchQuery ||
            user.userid == searchQuery ||
            user.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.postcode.toLowerCase().includes(searchQuery.toLowerCase());
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
            <tr key={product.addressid}>
                <td scope="row">{product.addressid}</td>
                <td scope="row">
                    <a
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        href={route("adminViewUser", {
                            userid: product.userid,
                        })}
                    >
                        {product.userid}
                    </a>
                </td>
                <td scope="row">{product.postcode}</td>
                <td scope="row">{product.city}</td>
                <td scope="row" className="editDescription">
                    {product.country}
                </td>
                <td scope="row">{product.street}</td>

                <td scope="row">
                    {formattedDate} {formattedTime}
                </td>
                <td scope="row">
                    {formattedDate1} {formattedTime1}
                </td>
                <td scope="row">
                    {" "}
                    <a>
                        <a
                            class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            href={route("addressView", {
                                addressid: product.addressid,
                            })}
                        >
                            Edit Address
                        </a>
                    </a>
                </td>
            </tr>
        );
    });

    return (
        <div>
            {" "}
            <AdminNavbar />
            <h2 className="text-light h2 text-center pt-3">All addresses</h2>
            <div >
                <input
                style={{ margin:"0 auto" }}
                    type="text"
                    className="form-control w-25"
                    placeholder="Search users by ID, user id, post code or city"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </div>
            <table class="table table-bordered editProducts">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">User ID</th>
                        <th scope="col">Post code</th>
                        <th scope="col">City</th>
                        <th scope="col">Country</th>
                        <th scope="col">Streeet</th>
                        <th scope="col">Created at</th>
                        <th scope="col">Updated</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>{bikePartList}</tbody>
            </table>

        </div>
    );
};

export default AdminViewProducts;
