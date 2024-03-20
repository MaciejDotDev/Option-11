import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import NavBar from "@/Components/NavBar";
import { HSquareFill } from "react-bootstrap-icons";
import { Link } from "@inertiajs/react";
import AdminNavbar from '@/Pages/AdminNavbar';
const AdminEditUsers = ({ users }) => {

    const [searchResults, setSearchResults] = useState([]);

    // Apply filter based on the selected option
    const filteredBikeParts = searchResults.filter((part) => {
        const categoryFilter =
            filter === "All Parts" || part.category === filter;
        const priceFilterCondition =
            priceFilter === "All Prices" ||
            (part.products.price >= parseInt(priceFilter.split("-")[0], 10) &&
                part.products.price <= parseInt(priceFilter.split("-")[1], 10));

        const searchFilter = part.products.productname
            .toLowerCase()
            .includes(searchQuery.toLowerCase()); // Filter based on search query
        return categoryFilter && priceFilterCondition && searchFilter;
    });

    const bikePartList = users.map((user) => {
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
        <input
                    type="text"
                    className="form-control w-25 "
                    placeholder="Search users..."
                    value=""
                    onChange=""
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
            <a   className="px-4 py-2 text-center text-white bg-blue-500 rounded-md" href="users/export/" >Export</a>
        </div>
        </div>

    );
};

export default AdminEditUsers;
