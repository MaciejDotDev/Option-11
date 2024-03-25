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

    const [searchQuery, setSearchQuery] = useState("");
    const [filter, setFilter] = useState("All orders");
    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };
    // Apply filter based on the selected option
    const filteredBikeParts = ordersItems.filter((user) => {



        const searchFilterid = user.orderitemid == searchQuery|| user.productid == searchQuery ||  user.products.productname
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ;
        // Filter based on search query
         // Filter based on search query
        return searchFilterid  ;
    });


    const bikePartList = filteredBikeParts.map((orderItem) => {
        const date = new Date(orderItem.created_at);

        // Format date using toLocaleDateString and toLocaleTimeString
        const formattedDate = date.toLocaleDateString();
        const formattedTime = date.toLocaleTimeString();
        return (

            <tr>

            <td scope="row">{orderItem.orderitemid}</td>
            <td scope="row">{orderItem.products.productname}</td>
            <td scope="row"><a  class="font-medium text-blue-600 dark:text-blue-500 hover:underline" href={route("editProducts", { productid: orderItem.productid  })}>{orderItem.productid} </a></td>
            <td scope="row">{orderItem.quantity}</td>
            <td scope="row">{orderItem.totalprice}</td>

            <td scope="row">{formattedDate} {formattedTime}</td>

            <td scope="row">
                <a   class="font-medium text-blue-600 dark:text-blue-500 hover:underline" href={route("editItemOrderPage", { itemOrderid: orderItem.orderitemid })}>
                    View Item
                </a>{" "}


            </td>
        </tr>
        );




    });




    return (
        <div>
            <AdminNavbar auth={auth} />
            <h2 className="text-light h2 text-center pt-3">All order items</h2>

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
            <table class="table table-bordered" >
                <thead>
                    <tr>


                        <th scope="col">ID</th>
                        <th scope="col">Product name</th>
                        <th scope="col">Product ID</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total price</th>
                        <th scope="col">Date created</th>
                        <th scope="col">Action</th>




                    </tr>
                </thead>
                <tbody>{bikePartList}</tbody>

            </table>
        </div>
    );
}
