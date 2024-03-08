import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Link, useForm, usePage, Head } from "@inertiajs/react";

import { useEffect } from "react";
import NavBar from "@/Components/NavBar";
import AnimateModal from "@/Components/AnimateModal";
import InputError from "@/Components/InputError";

import FormDropdown from "@/Components/FormDropdown";
export default function AdminViewUser({ users }) {
    const [state, setState] = useState(false);

    //below is a form template, needs to be replaced

    const { data, setData, post, processing, errors, reset } = useForm({
        firstname: users.firstname,
        lastname: users.lastname,
        email: users.email,
        phonenumber: users.phonenumber,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("adminViewUser"));
    };

    const formEmail = () => {
        const { data, setData, post, processing, errors, reset } = useForm({
            email: users.email,
            phonenumber: users.phonenumber,
        });

        const submit2 = (e) => {
            e.preventDefault();
            post(route("adminViewUser"));
        };

        return (
            <Form
                className="p-5 rounded shadow-sm bg-dark text-light"
                onSubmit={submit2}
            >
                <Row className="mb-3">
                    <Col md={6} className="pr-md-2">
                        <FormDropdown
                            cardId={users.email}
                            cardName={"Email"}
                            state={state}
                            setState={setState}
                            processing={processing}
                        >
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="block w-full mt-1"
                                    autoComplete="email"
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.email}
                                    className="mt-2"
                                />
                                <div className="flex items-center justify-end mt-4"></div>
                            </Form.Group>
                        </FormDropdown>
                    </Col>

                    <Col md={6} className="pl-md-2">
                        <Form.Group controlId="formBasicPhoneNumber">
                            <FormDropdown
                                cardId={users.phonenumber}
                                cardName={"Phone number"}
                                state={state}
                                setState={setState}
                                processing={processing}
                            >
                                <Form.Control
                                    id="phonenumber"
                                    type="number"
                                    name="phonenumber"
                                    value={data.phonenumber}
                                    className="block w-full mt-1"
                                    autoComplete="phonenumber"
                                    onChange={(e) =>
                                        setData("phonenumber", e.target.value)
                                    }
                                    required
                                />
                                <InputError
                                    message={errors.phonenumber}
                                    className="mt-2"
                                />

                                <div className="flex items-center justify-end mt-4"></div>
                            </FormDropdown>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        );
    };

    return (
        <div className="viewuser">
            <Form
                className="p-5 rounded shadow-sm bg-dark text-light"
                onSubmit={submit}
            >
                <h2 className="pt-4 mb-4 text-center h2">
                    Personal Information
                </h2>
                <Row className="mb-3">
                    <Col md={6} className="pr-md-2">
                        <FormDropdown
                            cardId={users.firstname}
                            cardName={"First Name"}
                            state={state}
                            setState={setState}
                            processing={processing}
                        >
                            <Form.Group controlId="formFirstName">
                                <Form.Control
                                    id="firstname"
                                    type="firstname"
                                    name="firstname"
                                    value={data.firstname}
                                    className="block w-full mt-1"
                                    autoComplete="email"
                                    onChange={(e) =>
                                        setData("firstname", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.email}
                                    className="mt-2"
                                />
                                <div className="flex items-center justify-end mt-4"></div>
                            </Form.Group>
                        </FormDropdown>
                    </Col>

                    <Col md={6} className="pl-md-2">
                        <Form.Group controlId="formBasicLastName">
                            <FormDropdown
                                cardId={users.lastname}
                                cardName={"Last Name"}
                                state={state}
                                setState={setState}
                                processing={processing}
                            >
                                <Form.Control
                                    id="lastname"
                                    type="lastname"
                                    name="lastname"
                                    value={data.lastname}
                                    className="block w-full mt-1"
                                    autoComplete="lastname"
                                    onChange={(e) =>
                                        setData("lastname", e.target.value)
                                    }
                                    required
                                />
                                <InputError
                                    message={errors.phonenumber}
                                    className="mt-2"
                                />

                                <div className="flex items-center justify-end mt-4"></div>
                            </FormDropdown>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
            {formEmail()}

            <div style={{display: "flex"}}>

            <Link
                href={route("logout")}
                className="px-4 py-2 text-center text-white bg-yellow-500 rounded-md "
            >
                View address
            </Link>
            <Link
                href={route("logout")}
                className="px-4 py-2 text-center text-white bg-yellow-500 rounded-md "
            >
               View payment information
            </Link>

            <Link
                href={route("adminDeleteUsers", { userid: users.userid })}
                className="px-4 py-2 text-center text-white bg-yellow-500 rounded-md "
            >
               delete
               
            </Link>
            </div>

           
        </div>
    );
}
