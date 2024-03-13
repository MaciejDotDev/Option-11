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



    const orderItemsList = ordersItems.map((item) => {
        return (
            <div>
                <ListItem>
                    <ListItemText
                        primary={item.products.productname}
                        secondary={item.products.description +"   ds"}
                        third="ds"
                    />
                    <Link to={`/product/${item.products.id}`}>View Product</Link>

                </ListItem>
                <Divider component="li" />
            </div>
        );
    });

    return (
        <div>
            <AdminNavbar auth={auth} />

            <div
                style={{
                    width: "50%",
                    margin: "0 auto",
                    marginBottom: "1rem",
                    marginTop: "5rem",
                }}
            >
                <List sx={style} aria-label="mailbox folders">
                    {orderItemsList}
                </List>
            </div>
        </div>
    );
}
