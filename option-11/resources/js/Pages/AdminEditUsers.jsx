import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import NavBar from "@/Components/NavBar";
import { HSquareFill } from "react-bootstrap-icons";
import { Link } from "@inertiajs/react";
import AdminNavbar from "@/Pages/AdminNavbar";
import { useState } from "react";
import Pagination from "react-bootstrap/Pagination";

const AdminEditUsers = ({ users }) => {
    // The search criteria that can be used to search a user.
    const [searchInput, setSearchInput] = useState("");

    const handleSearchChange = (e) => {
        setSearchInput(e.target.value);
    };

    // Combining the users firstname and last name into a string, and checking if it matches the search input.
    const filteredUsers = users.filter((user) =>
        `${user.firstname} ${user.lastname}`
            .toLowerCase()
            .includes(searchInput.toLowerCase())
    );

    // This function will match the search input to a user in the table and update the table to be narrowed down to those search results.
    const bikePartList = filteredUsers.map((user) => {
        // Formatting the dates using toLocalDateString and toLocaleTimeString
        const date = new Date(user.created_at);
        const formattedDate = date.toLocaleDateString();
        const formattedTime = date.toLocaleTimeString();

        return (
            <tr
                key={user.userid}
                className={
                    searchInput &&
                    `${user.firstname} ${user.lastname}`
                        .toLowerCase()
                        .includes(searchInput.toLowerCase())
                }
            >
                <td scope="row">{user.userid}</td>
                <td scope="row">{user.firstname}</td>
                <td scope="row">{user.lastname}</td>
                <td scope="row">
                    {formattedDate} {formattedTime}
                </td>
                <td scope="row">
                    <a href={route("adminUpdateShow", { userid: user.userid })}>
                        Edit User |
                    </a>{" "}
                    <a
                        href={route("adminDeleteUsers", {
                            userid: user.userid,
                        })}
                    >
                        Delete user
                    </a>{" "}
                </td>
            </tr>
        );
    });

    // This is the original table that is displayed when the page loads.
    return (
        <div>
            <AdminNavbar />
            <div className="container flex flex-col items-center">
                <div className="my-6">
                    <input
                        type="text"
                        placeholder="Search by name"
                        className="rounded-md"
                        value={searchInput}
                        onChange={handleSearchChange}
                    />
                </div>
                <table className="table table-bordered">
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
                <div className="my-6">
                    <a
                        className="text-center bg-blue-500 text-white px-4 py-2 rounded-md"
                        href="users/export/"
                    >
                        Export
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AdminEditUsers;
