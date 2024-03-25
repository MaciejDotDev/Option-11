import React, { useState } from "react";

import { InertiaLink } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import NavBar from "@/Components/NavBar";
import { HSquareFill } from "react-bootstrap-icons";
import { Link } from "@inertiajs/react";
import AdminNavbar from '@/Pages/AdminNavbar';
const AdminViewOrder = ({ orders }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [filter, setFilter] = useState("All products");
    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };
    // Apply filter based on the selected option
    const filteredBikeParts = orders.filter((user) => {



        const searchFilterid = user.orderid == searchQuery || user.userid == searchQuery  ||  user.trackingcode
        .toLowerCase()
        .includes(searchQuery.toLowerCase())  || user.transaction.customerid
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ;
        // Filter based on search query
         // Filter based on search query
        return searchFilterid  ;
    });

    const bikePartList = filteredBikeParts.map((order) => {
        const date = new Date(order.created_at);

        // Format date using toLocaleDateString and toLocaleTimeString
        const formattedDate = date.toLocaleDateString();
        const formattedTime = date.toLocaleTimeString();
        return (

            <tr>

            <td scope="row">{order.orderid}</td>
            <td scope="row"> <a class="font-medium text-blue-600 dark:text-blue-500 hover:underline" href={route("adminViewUser", { userid: order.userid })}>
            {order.userid}
                </a></td>
            <td scope="row">{order.trackingcode}</td>
            <td scope="row">{order.transaction.customerid}</td>
            <td scope="row"> <a class="font-medium text-blue-600 dark:text-blue-500 hover:underline" href={route("addressView", { addressid: order.addressid })}>
            {order.addressid}
                </a></td>
            <td scope="row">{order.totalprice}</td>
            <td scope="row">{order.status}</td>
            <td scope="row">{formattedDate} {formattedTime}</td>

            <td scope="row">
                <a  class="font-medium text-blue-600 dark:text-blue-500 hover:underline" href={route("editOrder", { orderid: order.orderid })}>
                    View Order
                </a>{" "}


            </td>
        </tr>
        );




    });

    return (

      <div>  <AdminNavbar/>

        <div className="ordersTable" >

        <h2 className="text-light h2 text-center pt-3">All orders</h2>

        <div style={{  display:"flex", alignItems:"center"  }}>
<input
 style={{ margin:"0 auto" }}
                type="text"
                className="form-control w-25"
                placeholder="Search orders by order id, cus id, user id or tracking code"
                value={searchQuery}
                onChange={handleSearchChange}

            />



</div>
            <table class="table table-bordered">
                <thead>
                    <tr>

                        <th scope="col"> Order ID</th>
                        {/* add a link that deirects to the user page */}
                        <th scope="col">User ID</th>
                        <th scope="col">Tracking code</th>
                        <th scope="col">Stripe customer ID</th>
                        <th scope="col">Address ID</th>
                        <th scope="col">Total Price</th>
                        <th scope="col">Status</th>

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

export default AdminViewOrder;
