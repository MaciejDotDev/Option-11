import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Link, useForm, usePage,Head } from "@inertiajs/react";

import { useEffect } from "react";
import NavBar from "@/Components/NavBar";
import AnimateModal from "@/Components/AnimateModal";
import InputError from "@/Components/InputError";
import Footer from "@/Components/Footer";
import FormDropdown from "@/Components/FormDropdown";
export default function UpdateAccount({ auth, baskIcon }) {

    const [state, setState] = useState(false);



    //below is a form template, needs to be replaced




    const { data, setData, post, processing, errors, reset } = useForm({
        firstname: auth.user.firstname,
        lastname: auth.user.lastname,
        email: auth.user.email,
        phonenumber: auth.user.phonenumber,
        action: "",
    });

    const resetField = (fieldName) => {
        reset({
            ...data,
            [fieldName]: '', // Reset the specific field to an empty string
        });
    };

    // Example usage: reset the 'email' field



    const submit = (e) => {
        e.preventDefault();
        post(route("update"));
    };

    const formEmail = () => {
        const { data, setData, post, processing, errors, reset } = useForm({
            email: auth.user.email,
            phonenumber: auth.user.phonenumber,
        });

        const submit2 = (e) => {
            e.preventDefault();
            post(route("update"));
        };

        return (
            <Form
                className="p-5 rounded shadow-sm bg-dark text-light"
                onSubmit={submit2}
            >
                <Row className="mb-3">
                    <Col md={6} className="pr-md-2">
                        <FormDropdown
                              cardId= {
                                auth.user.email
                            }
                            cardName={
                                "Email"
                            }
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
                                <div className="flex items-center justify-end mt-4">


                                </div>
                            </Form.Group>
                        </FormDropdown>
                    </Col>

                    <Col md={6} className="pl-md-2">
                        <Form.Group controlId="formBasicPhoneNumber">
                            <FormDropdown
                                cardId= {
                                    auth.user.phonenumber
                                }
                                cardName={
                                    "Phone number"
                                }
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
        <AnimateModal auth={auth} baskIcon={baskIcon}>
            <div className="basketContainer">
            <Form
                className="p-5 rounded shadow-sm bg-dark text-light"
                onSubmit={submit}
            >
                <h2 className="pt-4 mb-4 text-center h2">Personal Information</h2>
                <Row className="mb-3">
                    <Col md={6} className="pr-md-2">
                        <FormDropdown
                               cardId= {
                                auth.user.firstname
                            }
                            cardName={
                                "First Name"
                            }

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
                                <div className="flex items-center justify-end mt-4">


                                </div>
                            </Form.Group>
                        </FormDropdown>
                    </Col>

                    <Col md={6} className="pl-md-2">
                        <Form.Group controlId="formBasicLastName">
                            <FormDropdown
                                 cardId= {
                                    auth.user.lastname
                                }
                                cardName={
                                    "Last Name"
                                }

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
            </div>
            <Footer  />
        </AnimateModal>
    );
}
