import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Link, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";

import Pusher from 'pusher-js';


import toastr from 'toastr';
import AdminNavbar from "@/Pages/AdminNavbar";

const AdminReports = ({ auth }) => {
    // I made these so that if the admin types in one, the other cannot be active.
    useEffect(() => {
        // Initialize Pusher
        const pusher = new Pusher('b11836fcfa155e7399cb', {
          cluster: 'eu',
        });

        // Subscribe to a channel
        const channel = pusher.subscribe('notification-channel');

        // Bind to an event
        channel.bind('order-placed', (data) => {


            toastr.success('Order placed successfully!' + data);
        });

        // Clean up the subscription when the component unmounts
        return () => {
          channel.unbind_all();
          channel.unsubscribe();
        };
     }, []);
    const [state, setState] = useState("");
    const submit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <AdminNavbar auth={auth} />
            <h2 className="text-light h2 text-center pt-3">Admin Reports</h2>
            <table class="table table-bordered editProducts">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Tables being used</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row">User stats report</td>
                        <td scope="row">
                            Shows various stats about user registering
                        </td>
                        <td scope="row">User</td>
                        <td scope="row">
                            {" "}
                            <a  class="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="users/stats/export/">Download</a>{" "}
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td scope="row">Products stats report</td>
                        <td scope="row">
                            Shows various stats about products sold
                        </td>
                        <td scope="row">ProductHistory</td>
                        <td scope="row">
                            {" "}
                            <a  class="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="products/stats/export/">Download</a>{" "}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AdminReports;
