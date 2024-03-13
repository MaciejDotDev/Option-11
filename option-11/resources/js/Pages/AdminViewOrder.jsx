import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import NavBar from "@/Components/NavBar";
import { HSquareFill } from "react-bootstrap-icons";
import { Link } from "@inertiajs/react";
import AdminNavbar from '@/Pages/AdminNavbar';
const AdminViewOrder = ({ orders }) => {

    const bikePartList = orders.map((order) => {
        const date = new Date(order.created_at);

        // Format date using toLocaleDateString and toLocaleTimeString
        const formattedDate = date.toLocaleDateString();
        const formattedTime = date.toLocaleTimeString();
        return (

            <tr>
                        <td scope="row" width="5%"><input type="checkbox" className="form-check-input" /></td>
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
                <a href={route("editOrder", { orderid: order.orderid })}>
                    View Order
                </a>{" "}


            </td>
        </tr>
        );




    });

    return (

      <div>  <AdminNavbar/>

        <div className="ordersTable" >


            <table class="table table-bordered">
                <thead>
                    <tr>
                    <th scope="col">All <input type="checkbox" className="form-check-input" /></th>
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
