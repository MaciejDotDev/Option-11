import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Link, useForm, usePage, Head } from "@inertiajs/react";

import { useEffect } from "react";
import NavBar from "@/Components/NavBar";
import AnimateModal from "@/Components/AnimateModal";
import InputError from "@/Components/InputError";
import AdminNavbar from '@/Pages/AdminNavbar';
import FormDropdown from "@/Components/FormDropdown";
export default function AdminViewUser({ users,auth }) {
    const [state, setState] = useState(false);

    //below is a form template, needs to be replaced

    const { data, setData, post, processing, errors, reset } = useForm({
        userid: users.userid,
        firstname: users.firstname,
        lastname: users.lastname,
        email: users.email,
        phonenumber: users.phonenumber,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("adminUpdateUser"));
    };



    return (

        <div>
        <AdminNavbar auth={auth} />
        <h2 className="pt-3 text-center text-light h2">View/Edit User</h2>

        <div key={users.userid}>
            <Container className="mt-4 d-flex justify-content-center">
                <Form className="rounded" onSubmit={submit}>
                    <Row>
                        <Col md={6}>
                            <Form.Group
                                controlId="formBasicProductName"
                                className="mb-3"
                            >
                                <Form.Label className="text-white">
                                    First Name
                                </Form.Label>
                                <Form.Control
                                    id="firstname"
                                    name="firstname"
                                    value={data.firstname}
                                    className="mt-1 form-control-lg"
                                    autoComplete="firstname"
                                    onChange={(e) =>
                                        setData(
                                            "firstname",
                                            e.target.value
                                        )
                                    }
                                    required
                                    style={{ width: "20rem" }}
                                />
                                <InputError
                                    message={errors.firstname}
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
                                    Last Name
                                </Form.Label>
                                <Form.Control
                                    id="lastname"
                                    name="lastname"
                                    value={data.lastname}
                                    className="form-control-lg"
                                    autoComplete="lastname"
                                    onChange={(e) =>
                                        setData(
                                            "lastname",
                                            e.target.value
                                        )
                                    }
                                    required
                                    style={{ width: "20rem" }}
                                />
                                <InputError
                                    message={errors.lastname}
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
                                    Email
                                </Form.Label>
                                <Form.Control
                                    id="email"
                                    name="email"
                                    value={data.email}
                                    className="form-control-lg"
                                    autoComplete="email"
                                    onChange={(e) =>
                                        setData(
                                            "email",
                                            e.target.value
                                        )
                                    }
                                    required
                                />
                                <InputError
                                    message={errors.email}
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
                                   Phone Number
                                </Form.Label>
                                <Form.Control
                                    id="phonenumber"
                                    name="phonenumber"
                                    value={data.phonenumber}
                                    className="form-control-lg"
                                    autoComplete="street"
                                    onChange={(e) =>
                                        setData(
                                            "phonenumber",
                                            e.target.value
                                        )
                                    }
                                    required
                                />
                                <InputError
                                    message={errors.phonenumber}
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
}
