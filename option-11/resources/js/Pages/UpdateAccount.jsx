import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Link, useForm, usePage, Head } from "@inertiajs/react";

import { useEffect } from "react";
import NavBar from "@/Components/NavBar";
import AnimateModal from "@/Components/AnimateModal";
import InputError from "@/Components/InputError";
import Footer from "@/Components/Footer";
import FormDropdown from "@/Components/FormDropdown";
export default function UpdateAccount({ auth, baskIcon }) {
    const [state, setState] = useState(false);

    const [closed, setClosed] = useState(false);
    //below is a form template, needs to be replaced

    const { data, setData, post, processing, errors, reset } = useForm({
        firstname: auth.user.firstname,
        lastname: auth.user.lastname,
        email: auth.user.email,
        phonenumber: auth.user.phonenumber,

    });



    // Example usage: reset the 'email' field

    const first = auth.user.firstname;
    const last = auth.user.lastname;
    const phone = auth.user.phonenumber;
    const email = auth.user.email;

    const submit = (e) => {
        e.preventDefault();
        post(route("update")).then(() => reset());
    };
    useEffect(() => {
        if (closed == true) {


            setClosed(false);

        }
        return () => {};
    }, [closed]); // the closed at the end  is used to specify which variables the effect depends on. If any of the variables in this array change, the effect will run again.

    const addToWishlist = (bikeId) => {
        Inertia.post(
            route("update"),
            { itemId: bikeId }
        ).then(() => setSuccessMessage("Item successfully added to wishlist."));
    };
    return (
        <AnimateModal auth={auth} baskIcon={baskIcon}>
            <div className="updateContainer" style={{ width:"50%", margin:"0 auto", paddingBottom:"5rem" }} >
                <Form
                    className="p-5 rounded shadow-sm bg-dark text-light"
                    onSubmit={submit}
                >
                    <h2 className="pt-4 mb-4 text-center h2" style={{  paddingBottom:"2rem" }}>
                        Personal Information
                    </h2>
                    <Row className="mb-3">
                        <Col md={6} className="pr-md-2" style={{ margin:"0 auto" }} >
                            <FormDropdown
                                cardId={auth.user.firstname}
                                cardName={"First Name"}
                                state={state}
                                setState={setState}
                                processing={processing}
                                setClosed={setClosed}

                            >
                                <Form.Group controlId="formFirstName">
                                    <Form.Control
                                        id="firstname"
                                        type="firstname"
                                        name="firstname"
                                        value={data.firstname}
                                        key={auth.user.firstname}
                                        className="block w-full mt-1"
                                        autoComplete="email"
                                        onChange={(e) =>
                                            setData("firstname", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.firstname}
                                        className="mt-2"
                                    />
                                    <div className="flex items-center justify-end mt-4"></div>
                                </Form.Group>
                            </FormDropdown>
                        </Col>
                        <div className="line"></div>
                        </Row>
                        <Row className="mb-3">
                        <Col md={6} className="pl-md-2" style={{ margin:"0 auto" }} >
                            <Form.Group controlId="formBasicLastName">
                                <FormDropdown
                                    cardId={auth.user.lastname}
                                    cardName={"Last Name"}
                                    state={state}
                                    setState={setState}
                                    processing={processing}
                                    setClosed={setClosed}

                                >
                                    <Form.Control
                                        id="lastname"
                                        type="lastname"
                                        name="lastname"
                                        key={auth.user.lastname}
                                        value={data.lastname}
                                        className="block w-full mt-1"
                                        autoComplete="lastname"
                                        onChange={(e) =>
                                            setData("lastname", e.target.value)
                                        }
                                        required
                                    />
                                    <InputError
                                        message={errors.lastname}
                                        className="mt-2"
                                    />

                                    <div className="flex items-center justify-end mt-4"></div>
                                </FormDropdown>
                            </Form.Group>
                        </Col>
                        <div className="line"></div>
                        </Row>
                        <Row className="mb-3">
                            <Col md={6} className="pr-md-2" style={{ margin:"0 auto" }} >
                                <FormDropdown
                                    cardId={auth.user.email}
                                    cardName={"Email"}
                                    state={state}
                                    setState={setState}
                                    processing={processing}
                                    setClosed={setClosed}


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
                                            key={auth.user.email}
                                        />
                                        <InputError
                                            message={errors.email}
                                            className="mt-2"
                                        />
                                        <div className="flex items-center justify-end mt-4"></div>
                                    </Form.Group>
                                </FormDropdown>
                            </Col>
                            <div className="line"></div>
                            </Row>
                        <Row className="mb-3" style={{ justifyContent: 'space-between' }}>
                            <Col md={6} className="pl-md-2" style={{ margin:"0 auto" }}>
                                <Form.Group controlId="formBasicPhoneNumber"   >
                                    <FormDropdown
                                        cardId={auth.user.phonenumber}
                                        cardName={"Phone number"}
                                        state={state}
                                        setState={setState}
                                        processing={processing}
                                        setClosed={setClosed}


                                    >
                                        <Form.Control
                                            id="phonenumber"
                                            type="text"
                                            name="phonenumber"
                                            value={data.phonenumber}
                                            key={auth.user.phonenumber}
                                            className="block w-full mt-1"
                                            autoComplete="phonenumber"
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

                                        <div className="flex items-center justify-end mt-4"></div>
                                    </FormDropdown>
                                </Form.Group>
                            </Col>
                        </Row>

                </Form>
            </div>
            <Footer />
        </AnimateModal>
    );
}
