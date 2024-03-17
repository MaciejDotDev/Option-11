import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useForm } from "@inertiajs/react";
import NavBar from "@/Components/NavBar";
import AnimateModal from "@/Components/AnimateModal";
import InputError from "@/Components/InputError";
import FormDropdown from "@/Components/FormDropdown";

export default function UpdateAccount({ auth, baskIcon }) {
    const [state, setState] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        firstname: auth.user.firstname,
        lastname: auth.user.lastname,
        email: auth.user.email,
        phonenumber: auth.user.phonenumber,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("update"));
    };

    const renderFormFields = () => {
        return (
            <Form className="p-5 rounded shadow-sm bg-dark text-light" onSubmit={handleSubmit}>
                <h2 className="pt-4 mb-4 text-center h2">Personal Information</h2>
                <Row className="mb-3">
                    <Col md={6} className="mb-3 mb-md-0">
                        <FormDropdown cardId={auth.user.firstname} cardName="First Name" state={state} setState={setState} processing={processing}>
                            <Form.Group className=" flex justify-center" controlId="formFirstName">
                                <Form.Control type="text" name="firstname" value={data.firstname} className="mt-3 w-50" autoComplete="firstname" onChange={(e) => setData("firstname", e.target.value)} />
                                <InputError message={errors.firstname} className="mt-2" />
                            </Form.Group>
                        </FormDropdown>
                    </Col>
                    <Col md={6}>
                        <FormDropdown cardId={auth.user.lastname} cardName="Last Name" state={state} setState={setState} processing={processing}>
                            <Form.Group className=" flex justify-center" controlId="formLastName">
                                <Form.Control type="text" name="lastname" value={data.lastname} className="mt-3 w-50" autoComplete="lastname" onChange={(e) => setData("lastname", e.target.value)} />
                                <InputError message={errors.lastname} className="mt-2" />
                            </Form.Group>
                        </FormDropdown>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col md={6} className="mb-3 mb-md-0">
                        <FormDropdown cardId={auth.user.email} cardName="Email" state={state} setState={setState} processing={processing}>
                            <Form.Group className=" flex justify-center" controlId="formEmail">
                                <Form.Control type="email" name="email" value={data.email} className="mt-3 w-50" autoComplete="email" onChange={(e) => setData("email", e.target.value)} />
                                <InputError message={errors.email} className="mt-2" />
                            </Form.Group>
                        </FormDropdown>
                    </Col>
                    <Col md={6}>
                        <FormDropdown cardId={auth.user.phonenumber} cardName="Phone number" state={state} setState={setState} processing={processing}>
                            <Form.Group className=" flex justify-center" controlId="formPhoneNumber">
                                <Form.Control type="number" name="phonenumber" value={data.phonenumber} className="mt-3 w-50" autoComplete="phonenumber" onChange={(e) => setData("phonenumber", e.target.value)} />
                                <InputError message={errors.phonenumber} className="mt-2" />
                            </Form.Group>
                        </FormDropdown>
                    </Col>
                </Row>
                {/* <div className="text-center">
                    <Button variant="primary" type="submit" disabled={processing}>
                        {processing ? "Submitting..." : "Submit"}
                    </Button>
                </div> */}
            </Form>
        );
    };

    return (
        <AnimateModal auth={auth} baskIcon={baskIcon}>
            <div className="container py-5">
                {renderFormFields()}
            </div>
        </AnimateModal>
    );
}
