import React, { useState, useEffect } from "react";
import { useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import { usePage } from "@inertiajs/react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import {
    Container,
    Row,
    Col,
    Button,
    Image,
    Form,
    Modal,
} from "react-bootstrap";
import ReviewProducts from '@/Pages/ReviewProducts';
import axios from 'axios';

import AnimateModal from "@/Components/AnimateModal";

export default function IndividualProductPage({ product, auth,reviews, starsAvg,commentsCount }) {
    const { flash } = usePage().props;
    const { data, setData, post, errors } = useForm({
        productid_hidden: product.productid,
        quantity: 1,
        size: "",
    });

    // This is the state we are using to control the visibility of the size guide modal.
    const [showSizeGuideModal, setShowSizeGuideModal] = useState(false);

    const handleSizeChange = (e) => {
        const { value } = e.target;
        setData("size", value);
    };

const [placeHolderImage, setPlaceHolderImage] = useState(null);

useEffect(() => { // because reeact doesn't  allow static imports we're importing them dybamically and then setting it to the placeholder state
 import(`../../../public/${product.products.imageURL}`)
    .then((module) => {
      setPlaceHolderImage(module.default);
    })

}, [product.products.imageURL]); // ensuring that the useeffect occurs when the change of the value is heppning


    const submit = (e) => {
        e.preventDefault();
        post("/addBasket", data);
    };

    // Function below will be used to open the size guide modal.
    const handleSizeGuideModalOpen = () => {
        setShowSizeGuideModal(true);
    };

    // This one will close the size guide modal.
    const handleSizeGuideModalClose = () => {
        setShowSizeGuideModal(false);
    };

    return (
        <>
            <AnimateModal auth={auth}>
                <Container className="mt-4">
                    <Row className="justify-content-center align-items-center gap-16">
                        <Col md={4}>
                            <Image
                               src={placeHolderImage}
                                alt={product.products.productname}
                                className="img-fluid mb-4 rounded"
                                rounded
                                thumbnail
                            />
                        </Col>
                        <Col md={3} className="text-white text-left">
                            <h1 className="text-center text-white fs-2 mb-10">
                                {product.products.productname}
                            </h1>
                            <p className="mb-3">
                                <strong>Description:</strong>{" "}
                                {product.products.description}{" "}
                            </p>
                            <p className="mb-4">
                                <strong>Price:</strong> £{product.products.price}
                            </p>
                            <p className="mb-4">
                                <strong>Category:</strong> {product.category}
                            </p>
                            <p className="mb-4">
                                <strong>Colour:</strong> {product.colour}
                            </p>
                            <p className="mb-4">
                                <strong>Stock Quantity:</strong>{" "}
                                {product.products.stockquantity}
                            </p>
                            {/* Size selector */}
                            <Form.Group controlId="sizeSelect" className="mb-4">
                                <Form.Label>Select Size:</Form.Label>
                                <Form.Control
                                    as="select"
                                    onChange={handleSizeChange}
                                    value={data.size}
                                >
                                    <option value="">-- Select --</option>
                                    <option value="Small">Small</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Large">Large</option>
                                </Form.Control>
                                {/* Size Guide link */}
                                <div className=" pt-2">
                                    <a
                                        href="#"
                                        className=" link-info underline"
                                        onClick={handleSizeGuideModalOpen}
                                    >
                                        Size Guide
                                    </a>
                                </div>
                            </Form.Group>
                            {/* Add to Basket button */}
                            <Button
                                type="submit"
                                variant="outline-primary"
                                onClick={submit}
                            >
                                Add to Basket
                            </Button>
                        </Col>
                    </Row>
                    <Tabs
                        defaultActiveKey="profile"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                        style={{  width:"72%" , margin: "0 auto", paddingTop:"1rem"}}
                    >
                        <Tab eventKey="description" title="Description"   style={{  width:"62%" , margin: "0 auto", color:"white",paddingBottom:"2rem"}}>
                            {product.products.description}
                        </Tab>
                        <Tab eventKey="delivery" title="Delivery options" style={{  width:"62%" , margin: "0 auto", color:"white",paddingBottom:"2rem"}}>
                            Tab content for Profile
                        </Tab>
                        <Tab eventKey="contact" title="Contact" style={{  width:"62%" , margin: "0 auto", color:"white",paddingBottom:"2rem"}}>
                            Tab content for Contact
                        </Tab>
                    </Tabs>
                </Container>
                <ReviewProducts reviews={reviews} starsAvg={starsAvg} commentsCount={commentsCount} auth={auth} productid={product.productid} ></ReviewProducts>
            </AnimateModal>

            {/* Size Guide Modal */}
            <Modal show={showSizeGuideModal} onHide={handleSizeGuideModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Size Guide</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image
                        src="https://www.oemhelmet.com/uploads/knowledge/general%20size.jpg"
                        alt="Size Guide"
                        fluid
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant=" btn-outline-dark"
                        onClick={handleSizeGuideModalClose}
                    >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
