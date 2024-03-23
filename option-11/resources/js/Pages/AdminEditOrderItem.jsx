import React from 'react';
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Link, useForm } from "@inertiajs/react";
import { useEffect } from "react";

import InputError from "@/Components/InputError";

import AdminNavbar from "@/Pages/AdminNavbar";
function AdminEditOrderItem({products,product, auth}) {

    const { data, setData, post, processing, errors, reset } = useForm({
        itemid: product.orderitemid,
        productid: null,
        quantity: product.quantity,

    });
    const submit = (e) => {
        e.preventDefault();
        post(route("editOrderItem"));
    };

    const submit2 = (e) => {
        e.preventDefault();
        post(route("deleteOrderItem"));
    };
  return (
    <div>
 <AdminNavbar auth={auth} />
            <h2 className="pt-3 text-center text-light h2">Edit Order Item</h2>

            <div>
                <Container className="mt-4 d-flex justify-content-center">
                    <Form className="rounded" onSubmit={submit}>



                            <Col md={6} style={ { width: "100%"}}>
                                <Form.Label className="text-white">
                                    Change product
                                </Form.Label>

                                <Form.Group
                                    controlId="formBasicProductCategory"
                                    className="mb-3"
                                >
                                    <Form.Select
                                        className="form-control-lg"
                                        onChange={(e) =>
                                            setData("productid", e.target.value)
                                        }

                                    >
                                        <option key={product.productid} value={product.productid}>{product.productid}: {product.products.productname}</option>
                                          {products.map((product) => (
                        <option key={product.productid} value={product.productid}>{product.productid}: {product.productname}</option>
                    ))}
                                    </Form.Select>
                                    <InputError
                                        message={errors.itemid}
                                        className="mt-2"
                                    />
                                </Form.Group>
                                <Form.Label className="text-white">
                                        Quantity
                                    </Form.Label>
                                    <Form.Control
                                        id="quantity"
                                        name="quantity"
                                        value={data.quantity}
                                        className="mt-1 form-control-lg"
                                        autoComplete="quantity"
                                        onChange={(e) =>
                                            setData(
                                                "quantity",
                                                e.target.value
                                            )
                                        }
                                        required
                                        style={{ width: "20rem" }}
                                        type='number'
                                    />
                                    <InputError
                                        message={errors.quantity}
                                        className="mt-2"
                                    />
                            </Col>



                        <Row className="mb-4">
                            <Col className="mt-2 flex" md={6}>
                                <Button
                                    variant="primary"
                                    type="submit"
                                    className="mt-2 "
                                    disabled={processing}
                                >
                                    Update
                                </Button>

                                <Button
                                    variant="danger"
                                    type="button"
                                    className="mt-2 mr-2 float-left"
                                    disabled={processing}
                                    onClick={submit2}
                                >
                                    remove
                                </Button>




                            </Col>

                            <InputError
                                        message={errors.stock}
                                        className="mt-2"
                                    />
                        </Row>
                    </Form>
                </Container>
            </div>
    </div>
  );
}

export default AdminEditOrderItem;
