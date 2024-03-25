import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Link, useForm, usePage, Head } from "@inertiajs/react";
import AdminNavbar from "@/Pages/AdminNavbar";
import { useEffect } from "react";

import InputError from "@/Components/InputError";
const AdminStockUpdate = ({ products }) => {
    const [message, setMessage] = useState(null);
    const { data, setData, post, processing, errors, reset } = useForm({
        productid: null,
        stockquantity: null,
    });
    const submit = async (e) => {
        e.preventDefault();
        try {
            const response = await post(route("adminStockUpdate")); /// makes setMessage happen only after the form submitts
            setMessage("Stock update success");
        } catch (error) {
            setMessage("Stock update failed");
        }
    };

    return (
        <div>
            <AdminNavbar />

            <div
                style={{
                    fontsize: "20px",
                    fontFamily: "Arial",
                    color: "white",
                }}
            >
                <center>
                    <h1 style={{ fontSize: "50px", color: "white" }}>
                        Admin Stock Update
                    </h1>
                </center>
                <form onSubmit={submit}>
                    <center>
                        <label htmlFor="productid" style={{ color: "white" }}>
                            Select Product ID:
                        </label>
                    </center>
                    <center>
                        <select
                            id="productid"
                            onChange={(e) =>
                                setData("productid", e.target.value)
                            }
                            style={{ color: "black" }}
                        >
                            <option value="">Select Product ID</option>
                            {products.map((product) => (
                                <option
                                    key={product.productid}
                                    value={product.productid}
                                >
                                    {product.productid}: {product.productname}
                                </option>
                            ))}
                        </select>
                        <InputError
                            message={errors.productid}
                            className="mt-2"
                        />
                    </center>
                    <p></p>
                    <p> </p>
                    <center>
                        <label htmlFor="stockquantity">Enter Quantity:</label>
                    </center>

                    <center>
                        <input
                            type="number"
                            id="stockquantity"
                            onChange={(e) =>
                                setData("stockquantity", e.target.value)
                            }
                            style={{ color: "black" }}
                        />{" "}
                        <InputError
                            message={errors.stockquantity}
                            className="mt-2"
                        />
                    </center>
                    <p></p>
                    <center>
                        <Row className="mb-4 w-full">
                            <Col className="mt-2" md={15}>
                                <Button
                                    variant="primary"
                                    type="submit"
                                    className="mt-2 "
                                    disabled={processing}
                                >
                                    Update
                                </Button>
                            </Col>
                        </Row>
                    </center>

                    <p></p>
                </form>
            </div>
        </div>
    );
};

export default AdminStockUpdate;
