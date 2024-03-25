import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Link, useForm } from "@inertiajs/react";
import { useEffect } from "react";

import InputError from "@/Components/InputError";

import AdminNavbar from "@/Pages/AdminNavbar";
function AdminEditRefund({ refund }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        refundid: refund.refundid,
        reason_refund: refund.reason_refund,
        is_refunded: refund.is_refunded,
        totalprice: refund.totalprice,
        status: refund.status,
        quantity: refund.quantity,
    });
    const submit = (e) => {
        e.preventDefault();
        post(route("updateRefund"));
    };

    const submit2 = (e) => {
        e.preventDefault();
        post(route("deleteOrderItem"));
    };
    return (
        <div>
            <AdminNavbar />
            <h2 className="pt-3 text-center text-light h2">Edit Order Item</h2>

            <div>
                <Container className="mt-4 d-flex justify-content-center">
                    <Form className="rounded" onSubmit={submit}>
                        <Col md={6} style={{ width: "100%" }}>
                        <Form.Group
                                    controlId="formBasicProductPrice"
                                    className="mb-3"
                                >
                                    <Form.Label className="text-white">
                                        Reason for refund
                                    </Form.Label>
                                    <Form.Control
                                      as="textarea"
                                        id="reason_refund"
                                        name="reason_refund"
                                        value={data.reason_refund}
                                        className="form-control-lg"
                                        autoComplete="reason_refund"
                                        onChange={(e) =>
                                            setData("reason_refund", e.target.value)
                                        }
                                        required
                                        style={{ width: "20rem" }}
                                    />
                                    <InputError
                                        message={errors.reason_refund}
                                        className="mt-2"
                                    />
                                </Form.Group>
                                <Form.Group
                                    controlId="formBasicProductPrice"
                                    className="mb-3"
                                >

                                    <Form.Label className="text-white">
                                        Refunded
                                    </Form.Label>
                                   <Form.Select
                                    className="form-control-lg"
                                    onChange={(e) =>
                                        setData("is_refunded", e.target.value)
                                    }
                                    value={data.is_refunded}
                                >
                                    <option value="0">
                                        False
                                    </option>
                                    <option value="1">True</option>

                                </Form.Select>
                                <InputError
                                    message={errors.status}
                                    className="mt-2"
                                />
                                </Form.Group>


                            <Form.Label className="text-white">
                                Status
                            </Form.Label>

                            <Form.Group
                                controlId="formBasicstatus"
                                className="mb-3"
                            >
                                <Form.Select
                                    className="form-control-lg"
                                    onChange={(e) =>
                                        setData("status", e.target.value)
                                    }
                                    value={data.status}
                                >
                                    <option value="dispatched">
                                        Dispatched
                                    </option>
                                    <option value="delivered">Delivered</option>
                                    <option value="refunded">Refunded</option>
                                </Form.Select>
                                <InputError
                                    message={errors.status}
                                    className="mt-2"
                                />
                            </Form.Group>

                            <Form.Label className="text-white">
                                Total Price
                            </Form.Label>
                            <Form.Control
                                id="totalprice"
                                name="totalprice"
                                value={data.totalprice}
                                className="mt-1 form-control-lg"
                                autoComplete="totalprice"
                                onChange={(e) =>
                                    setData("totalprice", e.target.value)
                                }
                                required
                                style={{ width: "20rem" }}
                                type="number"
                            />
                            <InputError
                                message={errors.totalprice}
                                className="mt-2"
                            />
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
                                    setData("quantity", e.target.value)
                                }
                                required
                                style={{ width: "20rem" }}
                                type="number"
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

export default AdminEditRefund;
