import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Link, useForm } from "@inertiajs/react";
import { useEffect } from "react";

import InputError from "@/Components/InputError";

import AdminNavbar from "@/Pages/AdminNavbar";

const AdminEditOrder = ({ auth, orders }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        orderid: orders.productid,
        trackingcode: orders.trackingcode,
        addressid: orders.addressid,
        totalPrice: orders.totalprice,
        status: orders.status,
        category: orders.products,
        transactionid: orders.transaction.paymentIntent,
        customerId: orders.transaction.customerid,
    });

    useEffect(() => {
        return () => {
            reset(
                "productId",
                "productSearchName",
                "productName",
                "productDescription",
                "productQuantity",
                "productPrice"
            );
        };
    }, []);

    // I made these so that if the admin types in one, the other cannot be active.

    const submit = (e) => {
        e.preventDefault();
        post(route("remEditProduct"));
    };

    return (
        <div>
            <AdminNavbar auth={auth} />
            <h2 className="pt-3 text-center text-light h2">View/Edit Order</h2>

            <div key={orders.productid}>
                <Container className="mt-4 d-flex justify-content-center">
                    <Form className="rounded" onSubmit={submit}>
                        <Row>
                            <Col md={6}>
                                <Form.Group
                                    controlId="formBasicProductName"
                                    className="mb-3"
                                >
                                    <Form.Label className="text-white">
                                        Tracking code
                                    </Form.Label>
                                    <Form.Control
                                        id="productname"
                                        name="productname"
                                        value={data.trackingcode}
                                        className="mt-1 form-control-lg"
                                        autoComplete="productName"
                                        onChange={(e) =>
                                            setData(
                                                "productname",
                                                e.target.value
                                            )
                                        }
                                        required
                                        style={{ width: "20rem" }}
                                    />
                                    <InputError
                                        message={errors.productname}
                                        className="mt-2"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group
                                    controlId="formBasicProductDescription"
                                    className="mb-3"
                                >
                                    <Form.Label className="text-white">
                                        Total Price
                                    </Form.Label>
                                    <Form.Control
                                        id="productdescription"
                                        name="productdescription"
                                        value={data.totalPrice}
                                        className="form-control-lg"
                                        autoComplete="productdescription"
                                        onChange={(e) =>
                                            setData(
                                                "productdescription",
                                                e.target.value
                                            )
                                        }
                                        required
                                        style={{ width: "20rem" }}
                                    />
                                    <InputError
                                        message={errors.productdescription}
                                        className="mt-2"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Label className="text-white">
                                    Status
                                </Form.Label>
                                <Form.Select
                                    className="form-control-lg"
                                    onChange={(e) =>
                                        setData("status", e.target.value)
                                    }
                                    value={data.status}
                                >
                                    <option value="unpaid">Unpaid</option>
                                    <option value="paid">Paid</option>
                                    <option value="dispatched">
                                        Dispatched
                                    </option>
                                    <option value="delivered">Delivered</option>
                                </Form.Select>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group
                                    controlId="formBasicProductPrice"
                                    className="mb-3"
                                >
                                    <Form.Label className="text-white">
                                        Customer ID
                                    </Form.Label>
                                    <Form.Control
                                        id="productprice"
                                        name="productprice"
                                        value={data.customerId}
                                        className="form-control-lg"
                                        autoComplete="productprice"
                                        onChange={(e) =>
                                            setData(
                                                "productprice",
                                                e.target.value
                                            )
                                        }
                                        required

                                    />
                                    <InputError
                                        message={errors.productprice}
                                        className="mt-2"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group
                                    controlId="formBasicProductPrice"
                                    className="mb-3"
                                >
                                    <Form.Label className="text-white">
                                        Transaction id
                                    </Form.Label>
                                    <Form.Control
                                        id="productprice"
                                        name="productprice"
                                        value={data.transactionid}
                                        className="form-control-lg"
                                        autoComplete="productprice"
                                        onChange={(e) =>
                                            setData(
                                                "productprice",
                                                e.target.value
                                            )
                                        }
                                        required
                                    />
                                    <InputError
                                        message={errors.productprice}
                                        className="mt-2"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-4">
                            <Col className="mt-2" md={6}>
                                <Button
                                    variant="primary"
                                    type="submit"
                                    className="mt-2 "
                                    disabled={processing}
                                    onClick={(e) => setData("action", "update")}
                                >
                                    Update Order
                                </Button>
                            </Col>
                            <Col className="mt-2" md={6}>
                                <Button
                                    variant="danger"
                                    type="submit"
                                    className="mt-2"
                                    disabled={processing}
                                    onClick={(e) => setData("action", "remove")}
                                >
                                    Remove Order
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </div>
        </div>
    );
};

export default AdminEditOrder;
