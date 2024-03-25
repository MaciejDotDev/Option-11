import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Link, useForm } from "@inertiajs/react";
import { useEffect } from "react";

import InputError from "@/Components/InputError";

import AdminNavbar from "@/Pages/AdminNavbar";

const AdminEditAddress = ({ auth, address }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        addressid: address.addressid,
        postcode: address.postcode,
        country:address.country,
        city: address.city,
        street: address.street,
    });

    // I made these so that if the admin types in one, the other cannot be active.

    const submit = (e) => {
        e.preventDefault();
        post(route("updateAddress"));
    };

    return (
        <div>
            <AdminNavbar auth={auth} />
            <h2 className="pt-3 text-center text-light h2">View/Edit Address</h2>

            <div key={address.addressid}>
                <Container className="mt-4 d-flex justify-content-center">
                    <Form className="rounded" onSubmit={submit}>
                        <Row>
                            <Col md={6}>
                                <Form.Group
                                    controlId="formBasicProductName"
                                    className="mb-3"
                                >
                                    <Form.Label className="text-white">
                                        Postcode
                                    </Form.Label>
                                    <Form.Control
                                        id="postcode"
                                        name="postcode"
                                        value={data.postcode}
                                        className="mt-1 form-control-lg"
                                        autoComplete="postcode"
                                        onChange={(e) =>
                                            setData(
                                                "postcode",
                                                e.target.value
                                            )
                                        }
                                        required
                                        style={{ width: "20rem" }}
                                    />
                                    <InputError
                                        message={errors.postcode}
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
                                        Country
                                    </Form.Label>
                                    <Form.Control
                                        id="country"
                                        name="country"
                                        value={data.country}
                                        className="form-control-lg"
                                        autoComplete="country"
                                        onChange={(e) =>
                                            setData(
                                                "country",
                                                e.target.value
                                            )
                                        }
                                        required
                                        style={{ width: "20rem" }}
                                    />
                                    <InputError
                                        message={errors.country}
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
                                        City
                                    </Form.Label>
                                    <Form.Control
                                        id="city"
                                        name="city"
                                        value={data.city}
                                        className="form-control-lg"
                                        autoComplete="city"
                                        onChange={(e) =>
                                            setData(
                                                "city",
                                                e.target.value
                                            )
                                        }
                                        required
                                    />
                                    <InputError
                                        message={errors.city}
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
                                       Street & house num
                                    </Form.Label>
                                    <Form.Control
                                        id="street"
                                        name="street"
                                        value={data.street}
                                        className="form-control-lg"
                                        autoComplete="street"
                                        onChange={(e) =>
                                            setData(
                                                "street",
                                                e.target.value
                                            )
                                        }
                                        required
                                    />
                                    <InputError
                                        message={errors.street}
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

                                >
                                    Update
                                </Button>
                            </Col>

                        </Row>
                    </Form>
                </Container>
            </div>
        </div>
    );
};

export default AdminEditAddress;
