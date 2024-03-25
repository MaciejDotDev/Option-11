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
import FormDropdown from "@/Components/FormDropdown";
export default function ViewAddress({ auth, baskIcon }) {

    const style = {
        p: 0,
        width: '100%',

        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'background.paper',
      };
    return (
        <AnimateModal auth={auth} baskIcon={baskIcon}>
            <div
                style={{
                    width: "50%",
                    margin: "0 auto",
                    marginBottom: "1rem",
                    marginTop: "5rem"
                }}
            >
                <List sx={style} aria-label="mailbox folders">
      <ListItem>
        <ListItemText primary="Inbox" />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary="Drafts" />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary="Trash" />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary="Spam" />
      </ListItem>
    </List>
    <Button
                    className="text-white btn btn-dark"
                    style={{
                        width: "100%",
                        marginTop: "1rem"
                    }}
                >
                   Add an address
                </Button>
            </div>
        </AnimateModal>
    );
}
