import React, { useState,useEffect } from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import NavBar from "@/Components/NavBar";
import { HSquareFill } from "react-bootstrap-icons";
import { Link } from "@inertiajs/react";
import AdminNavbar from '@/Pages/AdminNavbar';

const AdminEditUsers = ({ users }) => {


    const [searchQuery, setSearchQuery] = useState("");
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };
    // Apply filter based on the selected option
    const filteredBikeParts = users.filter((user) => {

        const searchFilterid = user.userid.toString().includes(searchQuery);
        const searchFilterfirstname = user.firstname.toLowerCase().includes(searchQuery.toLowerCase()); // Filter based on search query
        const searchFilterlastname = user.lastname.toLowerCase().includes(searchQuery.toLowerCase()); // Filter based on search query
        return  searchFilterid || searchFilterfirstname || searchFilterlastname ;
    });

    const bikePartList = filteredBikeParts.map((user) => {
        const date = new Date(user.created_at);

        // Format date using toLocaleDateString and toLocaleTimeString
        const formattedDate = date.toLocaleDateString();
        const formattedTime = date.toLocaleTimeString();
        return (

            <tr>

            <td scope="row">{user.userid}</td>
            <td scope="row">{user.firstname}</td>
            <td scope="row">{user.lastname}</td>

            <td scope="row">{formattedDate} {formattedTime}</td>

            <td scope="row">
                <a  class="font-medium text-blue-600 dark:text-blue-500 hover:underline" href={route("adminViewUser", { userid: user.userid })}>
                    View User
                </a>{" "}


            </td>
        </tr>
        );




    });

    return (

      <div>  <AdminNavbar/>

        <div className="container">

        <h2 className="text-light h2 text-center pt-3">All users</h2>
        <input
                    type="text"
                    className="form-control w-25 "
                    placeholder="Search users by ID or name"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    style={{
                        margin: "0 auto"
                     }}
                />
            <table class="table table-bordered ">
                <thead>
                    <tr>

                        <th scope="col">ID</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>

                        <th scope="col">Date created</th>
                        <th scope="col">Action</th>

                    </tr>
                </thead>
                <tbody>{bikePartList}</tbody>

            </table>

        </div>
        </div>

    );
};

export default AdminEditUsers;
