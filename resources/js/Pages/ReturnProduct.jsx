import React, { useState } from "react";
import { Container, Form, Button, Modal } from "react-bootstrap";
import NavBar from "@/Components/NavBar";
import AnimateModal from "@/Components/AnimateModal";
import Footer from "@/Components/Footer";
import { Head, useForm } from "@inertiajs/react";
const ReturnProduct = ({ auth, baskIcon,orderitem }) => {
    const { data, setData, post, errors } = useForm({
        orderItemid:orderitem.orderitemid,
        refundReason: "",
        other: ""
    });

    // Modla that will be displayed on succesfull submission.

    const submit = (e) => {
        e.preventDefault();
        post(route('createRefund'), data);
    };


    return (
        <AnimateModal auth={auth} baskIcon={baskIcon}>
            <Container className="text-light py-4">
                <div className="col-md-6 mx-auto">
                    <div className=" pb-4">
                        <h1 className=" display-5 text-center">Return your product</h1>
                        <p className="text-center fs-6 text-gray-500">
                            Not satisfied with your product? Our return policy is simple and quick!
                        </p>
                    </div>
                    <Form onSubmit={submit}>

                        <Form.Group controlId="formQueryType">
                            <Form.Label>Tell us why the reason for your refund</Form.Label>
                            <Form.Select required name="queryType"  onChange={(e) => setData('refundReason', e.target.value)}>
                                <option value="">Select...</option>
                                <option value="item came damaged">Item came damaged</option>
                                <option value="not satisfied with the product">Not satisfied with the product</option>
                                <option value="ordered wrong product">Ordered wrong product</option>
                                <option value="other">Other</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group controlId="formDescription" className=" pb-2">
                            <Form.Label className=" mt-2">Description</Form.Label>
                            <Form.Control required maxLength="300" as="textarea" rows={3} name="description"  onChange={(e) => setData('other', e.target.value)} placeholder="Query... (300 characters max)" />
                        </Form.Group>

                        <div className=" flex justify-center">
                            <Button variant="outline-light" type="submit" className="w-50 mt-4">
                                Submit
                            </Button>
                        </div>
                    </Form>
                </div>
            </Container>

            <Footer  />
        </AnimateModal>
    );
};

export default ReturnProduct;
