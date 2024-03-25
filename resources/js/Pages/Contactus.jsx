import React, { useState } from "react";
import { Container, Form, Button, Modal } from "react-bootstrap";
import NavBar from "@/Components/NavBar";
import AnimateModal from "@/Components/AnimateModal";
import Footer from "@/Components/Footer";
const ContactUs = ({ auth, baskIcon }) => {
    const [formData, setFormData] = useState({
        queryType: "",
        name: `${auth.user ? `${auth.user.firstname} ${auth.user.lastname}` : ""}`,
        email: `${auth.user ? `${auth.user.email}` : ""}`,
        description: "",
    });

    // Modla that will be displayed on succesfull submission.
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleInputChange = (e) => {
        // Basically we're storing all the form data the user enters in the state above.
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Performing validation on form data (extra validation)
        if (!formData.queryType || !formData.name || !formData.email || !formData.description) {
            alert("Please fill in all fields.");
            return;
        }

        setTimeout(() => {
            handleShow();
        }, 700);

        // Testing (ignore)
        // console.log(formData);
    };

    return (
        <AnimateModal auth={auth} baskIcon={baskIcon}>
            <Container className="text-light py-4">
                <div className="col-md-6 mx-auto">
                    <div className=" pb-4">
                        <h1 className=" display-5 text-center">Contact Us</h1>
                        <p className="text-center fs-6 text-gray-500">
                            Fill in the form below for any queries you have!
                        </p>
                    </div>
                    <Form onSubmit={handleFormSubmit}>

                        <Form.Group controlId="formQueryType">
                            <Form.Label>Select Query Type</Form.Label>
                            <Form.Select required name="queryType" value={formData.queryType} onChange={handleInputChange}>
                                <option value="">Select...</option>
                                <option value="General">General Query</option>
                                <option value="Technical">Order Query</option>
                                <option value="Sales">Sales Query</option>
                                <option value="Other">Other</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group controlId="formName" className=" pb-2">
                            <Form.Label className=" mt-2">Full Name</Form.Label>
                            <Form.Control required type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Big Z" />
                        </Form.Group>

                        <Form.Group controlId="formEmail" className=" pb-2">
                            <Form.Label className=" mt-2">Email</Form.Label>
                            <Form.Control required type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="bigz@gmail.com" />
                        </Form.Group>

                        <Form.Group controlId="formDescription" className=" pb-2">
                            <Form.Label className=" mt-2">Description</Form.Label>
                            <Form.Control required maxLength="300" as="textarea" rows={3} name="description" value={formData.description} onChange={handleInputChange} placeholder="Query... (300 characters max)" />
                        </Form.Group>

                        <div className=" flex justify-center">
                            <Button variant="outline-light" type="submit" className="w-50 mt-4">
                                Submit
                            </Button>
                        </div>
                    </Form>
                </div>
            </Container>
            {/* Modal that will show once form is submitted */}
            <Modal centered size="sm" className="text-dark" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className=" text-red-600">Query Received!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Thank you for your query! We have received it and will get back to you within 48 hours.
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="outline-dark" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Footer  />
        </AnimateModal>
    );
};

export default ContactUs;
