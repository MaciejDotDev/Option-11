import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import NavBar from "@/Components/NavBar";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Footer from "@/Components/Footer";
import AnimateModal from "@/Components/AnimateModal";
import {
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    TextField,
} from "@mui/material";
import Box from "@mui/material/Box";

const RepairBooking = ({ auth, baskIcon, bikes }) => {
    return (
        <div>
            <AnimateModal auth={auth} baskIcon={baskIcon}>
                <Container className="text-light py-4">
                    <div className="col-md-6 mx-auto">
                        <div className=" pb-4">
                            <h1 className="display-4 text-white text-center py-2">
                                Repair form
                            </h1>
                        </div>
                        <Form>
                            <Form.Group controlId="formQueryType">
                                <Form.Label>Select Query Type</Form.Label>
                                <Form.Select required name="queryType">
                                    {bikes.map((bike) => (
                                        <option value={bike.products.productid}>
                                            {" "}
                                            {bike.products.productname}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>

                            <Form.Group controlId="formQueryType">
                                {" "}
                                <Form.Label>
                                    Selec type of repair
                                </Form.Label>{" "}
                                <Form.Select
                                    labelId="demo-simple-select-filled-label"
                                    id="demo-simple-select-filled"
                                    style={{ backgroundColor: "white" }}
                                >
                                    <option value="frameInspection">
                                        Frame Inspection
                                    </option>
                                    <option value="brakeService">
                                        Brake Service
                                    </option>
                                    <option value="chainLube">
                                        Chain Lubing
                                    </option>
                                    <option value="tireReplacement">
                                        Tire Replacement
                                    </option>
                                    <option value="oilChange">
                                        Oil Change
                                    </option>
                                    <option value="suspensionAdjustment">
                                        Suspension Adjustment
                                    </option>
                                    <option value="pedalService">
                                        Pedal Service
                                    </option>
                                    <option value="wheelAlignment">
                                        Wheel Alignment
                                    </option>
                                    <option value="seatAdjustment">
                                        Seat Adjustment
                                    </option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group
                                controlId="formDescription"
                                className=" pb-2"
                            >
                                <Form.Label className=" mt-2">
                                    Description
                                </Form.Label>
                                <Form.Control
                                    required
                                    maxLength="300"
                                    as="textarea"
                                    rows={3}
                                    name="description"
                                    placeholder="Query... (300 characters max)"
                                />
                            </Form.Group>

                            <div className=" flex justify-center">
                                <Button
                                    variant="outline-light"
                                    type="submit"
                                    className="w-50 mt-4"
                                >
                                    Submit
                                </Button>
                            </div>
                        </Form>
                    </div>
                </Container>
                <Footer />
            </AnimateModal>
        </div>
    );
};

export default RepairBooking;
