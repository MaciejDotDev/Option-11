import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import NavBar from "@/Components/NavBar";
import { HSquareFill } from "react-bootstrap-icons";
import { Link } from "@inertiajs/react";
import AdminNavbar from '@/Pages/AdminNavbar';
const AdminEditUsers = ({ users }) => {

    const bikePartList = users.map((user) => {
        const date = new Date(user.created_at);

        // Format date using toLocaleDateString and toLocaleTimeString
        const formattedDate = date.toLocaleDateString();
        const formattedTime = date.toLocaleTimeString();
        return (

            <tr>
                        <td scope="row" width="5%"><input type="checkbox" className="form-check-input" /></td>
            <td scope="row">{user.userid}</td>
            <td scope="row">{user.firstname}</td>
            <td scope="row">{user.lastname}</td>

            <td scope="row">{formattedDate} {formattedTime}</td>

            <td scope="row">
                <a href={route("adminViewUser", { userid: user.userid })}>
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

            <table class="table table-bordered">
                <thead>
                    <tr>
                    <th scope="col">All <input type="checkbox" className="form-check-input" /></th>
                        <th scope="col">ID</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>

                        <th scope="col">Date created</th>
                        <th scope="col">Action</th>

                    </tr>
                </thead>
                <tbody>{bikePartList}</tbody>

            </table>
            <a   className="px-4 py-2 text-center text-white bg-blue-500 rounded-md" href="users/export/" >Export</a>
        </div>
        </div>

    );
};

export default AdminEditUsers;
