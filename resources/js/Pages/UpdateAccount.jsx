import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Link, useForm, usePage, Head } from "@inertiajs/react";
import axios from "axios";
import { useEffect } from "react";
import Alert from '@mui/material/Alert';
import AnimateModal from "@/Components/AnimateModal";
import InputError from "@/Components/InputError";
import Footer from "@/Components/Footer";
import FormDropdown from "@/Components/FormDropdown";
export default function UpdateAccount({ auth, baskIcon }) {
    const [state, setState] = useState(false);

    const [closed, setClosed] = useState(false);
    //below is a form template, needs to be replaced

    useEffect(() => {
        if (closed == true) {
            setClosed(false);
        }
        return () => {};
    }, [closed]); // the closed at the end  is used to specify which variables the effect depends on. If any of the variables in this array change, the effect will run again.

    const [firstName, setFirstName] = useState(auth.user.firstname);
    const [lastName, setLastName] = useState(auth.user.lastname);
    const [phoneNumber, setPhoneNumber] = useState(auth.user.phonenumber);
    const [emailAddress, setEmailAddress] = useState(auth.user.email);

    ///need to finish the errors
    const [errors, setErrors] = useState("");
    const editDetails = (detail, type) => {
        axios
            .post("/api/user/update", { detail: detail, type: type }) // using axios to post data to make it more simple and straigthfroward
            .then((response) => {
                console.log(response.data);
                window.location.reload(); // reloads to refresh the information
            })
            .catch((error) => {
                setErrors(error.response.data.message);
            });
    };
    return (
        <AnimateModal auth={auth} baskIcon={baskIcon}>
            <div
                className="updateContainer"
                style={{
                    margin: "0 auto",
                    paddingBottom: "5rem",
                    color: "white",
                    maxWidth:"700px"
                }}
            >
                <div>

                </div>
                <h2
                    className="pt-4 mb-4 text-center h2"
                    style={{ paddingBottom: "2rem" }}
                >
                    Personal Information
                </h2>
                {errors === "" ? (
                    <div></div>
                ) : (
                      <Alert severity="error" style={{ marginBottom:"3rem" }}> {errors}</Alert>
                )}
                <Row className="mb-3">
                    <Col
                        md={6}
                        className="pr-md-2"
                        style={{ margin: "0 auto" }}
                    >
                        <FormDropdown
                            cardId={auth.user.firstname}
                            cardName={"First Name"}
                            state={state}
                            setState={setState}
                            submit={editDetails}
                            data={firstName}
                            setClosed={setClosed}
                            type="firstname"
                        >
                            <Form.Group controlId="formFirstName">
                                <Form.Control
                                    id="firstname"
                                    type="firstname"
                                    name="firstname"
                                    value={firstName}
                                    key={auth.user.firstname}
                                    className="block w-full mt-1"
                                    autoComplete="email"
                                    onChange={(e) =>
                                        setFirstName(e.target.value)
                                    }
                                />
                                {/*

                                   } <InputError
                                        message={errors.firstname}
                                        className="mt-2"
                                    />
                                */}
                                <div className="flex items-center justify-end mt-4"></div>
                            </Form.Group>
                        </FormDropdown>
                    </Col>
                    <div className="line"></div>
                </Row>
                <Row className="mb-3">
                    <Col
                        md={6}
                        className="pl-md-2"
                        style={{ margin: "0 auto" }}
                    >
                        <Form.Group controlId="formBasicLastName">
                            <FormDropdown
                                cardId={auth.user.lastname}
                                cardName={"Last Name"}
                                state={state}
                                setState={setState}
                                submit={editDetails}
                                data={lastName}
                                setClosed={setClosed}
                                type="lastname"

                            >
                                <Form.Control
                                    id="lastname"
                                    type="lastname"
                                    name="lastname"
                                    key={auth.user.lastname}
                                    value={lastName}
                                    className="block w-full mt-1"
                                    autoComplete="lastname"
                                    onChange={(e) =>
                                        setLastName(e.target.value)
                                    }
                                    required

                                />

                                {/*  <InputError
                                        message={errors.lastname}
                                        className="mt-2"
                                    /> */}
<div className="flex items-center justify-end mt-4"></div>
                                <InputError message={errors} className="mt-2" />
                            </FormDropdown>
                        </Form.Group>
                    </Col>
                    <div className="line"></div>
                </Row>
                <Row className="mb-3">
                    <Col
                        md={6}
                        className="pr-md-2"
                        style={{ margin: "0 auto" }}
                    >
                        <FormDropdown
                            cardId={auth.user.email}
                            cardName={"Email"}
                            state={state}
                            setState={setState}
                            submit={editDetails}
                            data={emailAddress}
                            setClosed={setClosed}
                            type="email"
                        >
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={emailAddress}
                                    className="block w-full mt-1"
                                    autoComplete="email"
                                    onChange={(e) =>
                                        setEmailAddress(e.target.value)
                                    }
                                    key={auth.user.email}
                                />
                                {/*  <InputError
                                            message={errors.email}
                                            className="mt-2"
                                        /> */}
<div className="flex items-center justify-end mt-4"></div>
                                <InputError message={errors} className="mt-2" />
                            </Form.Group>
                        </FormDropdown>
                    </Col>
                    <div className="line"></div>
                </Row>
                <Row
                    className="mb-3"
                    style={{ justifyContent: "space-between" }}
                >
                    <Col
                        md={6}
                        className="pl-md-2"
                        style={{ margin: "0 auto" }}
                    >
                        <Form.Group controlId="formBasicPhoneNumber">
                            <FormDropdown
                                cardId={auth.user.phonenumber}
                                cardName={"Phone number"}
                                state={state}
                                setState={setState}
                                submit={editDetails}
                                data={phoneNumber}
                                setClosed={setClosed}
                                type="phonenumber"
                            >
                                <Form.Control
                                    id="phonenumber"
                                    type="text"
                                    name="phonenumber"
                                    value={phoneNumber}
                                    key={auth.user.phonenumber}
                                    className="block w-full mt-1"
                                    autoComplete="phonenumber"
                                    onChange={(e) =>
                                        setPhoneNumber(e.target.value)
                                    }
                                    required
                                />

                                {/* <InputError
                                            message={errors.phonenumber}
                                            className="mt-2"
                                        /> */}
<div className="flex items-center justify-end mt-4"></div>
                                <div className="flex items-center justify-end mt-4"></div>
                            </FormDropdown>
                        </Form.Group>
                    </Col>
                </Row>
            </div>
            <Footer />
        </AnimateModal>
    );
}
