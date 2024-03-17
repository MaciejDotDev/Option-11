import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Link, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";

import InputError from "@/Components/InputError";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AdminNavbar from "@/Pages/AdminNavbar";

const AdminReports = ({ auth }) => {
    // I made these so that if the admin types in one, the other cannot be active.

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
                            <a href="users/stats/export/">Download</a>{" "}
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
                            <a href="products/stats/export/">Download</a>{" "}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AdminReports;
