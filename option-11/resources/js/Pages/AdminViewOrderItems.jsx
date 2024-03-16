import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Container, Form, Row, Col } from "react-bootstrap";
import { Link, useForm, usePage, Head } from "@inertiajs/react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { useEffect } from "react";
import NavBar from "@/Components/NavBar";
import AnimateModal from "@/Components/AnimateModal";
import InputError from "@/Components/InputError";
import Button from "@mui/material/Button";
import AdminNavbar from "@/Pages/AdminNavbar";
import Typography from "@mui/material/Typography";
export default function AdminViewOrderItems({ ordersItems, auth }) {
    const style = {
        p: 0,
        width: "100%",

        borderRadius: 2,
        border: "1px solid",
        borderColor: "divider",
        backgroundColor: "background.paper",
    };
    const bikePartList = ordersItems.map((orderItem) => {
        const date = new Date(orderItem.created_at);

        // Format date using toLocaleDateString and toLocaleTimeString
        const formattedDate = date.toLocaleDateString();
        const formattedTime = date.toLocaleTimeString();
        return (

            <tr>
                        <td scope="row" width="5%"><input type="checkbox" className="form-check-input" /></td>
            <td scope="row">{orderItem.orderitemid}</td>
            <td scope="row">{orderItem.products.productname}</td>
            <td scope="row">{orderItem.quantity}</td>
            <td scope="row">{orderItem.totalprice}</td>

            <td scope="row">{formattedDate} {formattedTime}</td>

            <td scope="row">
                <a href={route("editItemOrderPage", { itemOrderid: orderItem.orderitemid })}>
                    View Item
                </a>{" "}


            </td>
        </tr>
        );




    });




    return (
        <div>
            <AdminNavbar auth={auth} />

            <table class="table table-bordered editProducts" >
                <thead>
                    <tr>

                        <th scope="col">ID</th>
                        <th scope="col">Product name</th>
                        <th scope="col">Total price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Description</th>
                        <th scope="col">Created</th>
                        <th scope="col">Action</th>




                    </tr>
                </thead>
                <tbody>{bikePartList}</tbody>

            </table>
        </div>
    );
}
