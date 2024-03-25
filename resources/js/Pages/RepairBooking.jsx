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
                <div
                    style={{
                        margin: "0  auto",

                        backgroundColor: "#212529",
                        paddingRight: "5rem",
                        paddingLeft: "5rem",
                        borderRadius: "5px",
                        paddingTop: "5rem",
                        marginBottom: "10rem"
                    }}
                >
                  <h1 className="display-4 text-white text-center py-2">
                    Repair form
                    </h1>
                    <div style={{ minWidth: 120, marginBottom: "1rem" }}>
                        <Box sx={{ minWidth: 120 }}>
                            <InputLabel
                                style={{ color: "white" }}
                                id="demo-simple-select-label"
                            >
                                Select Bike
                            </InputLabel>
                            <FormControl fullWidth>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    style={{ backgroundColor: "white" }}
                                    inputProps={{
                                        "aria-label": "Without label",
                                    }}
                                >
                                    {bikes.map((bike) => (
                                        <MenuItem
                                            value={bike.products.productid}
                                        >
                                            {" "}
                                            {bike.products.productname}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    <div style={{ minWidth: 120, marginBottom: "1rem" }}>
                        <Box sx={{ minWidth: 120 }}>
                            <InputLabel
                                style={{ color: "white" }}
                                id="demo-simple-select-label"
                            >
                                Select repair option
                            </InputLabel>
                            <FormControl fullWidth>
                                <Select
                                    labelId="demo-simple-select-filled-label"
                                    id="demo-simple-select-filled"
                                    style={{ backgroundColor: "white" }}
                                >
                                    <MenuItem value="frameInspection">
                                        Frame Inspection
                                    </MenuItem>
                                    <MenuItem value="brakeService">
                                        Brake Service
                                    </MenuItem>
                                    <MenuItem value="chainLube">
                                        Chain Lubing
                                    </MenuItem>
                                    <MenuItem value="tireReplacement">
                                        Tire Replacement
                                    </MenuItem>
                                    <MenuItem value="oilChange">
                                        Oil Change
                                    </MenuItem>
                                    <MenuItem value="suspensionAdjustment">
                                        Suspension Adjustment
                                    </MenuItem>

                                    <MenuItem value="pedalService">
                                        Pedal Service
                                    </MenuItem>
                                    <MenuItem value="wheelAlignment">
                                        Wheel Alignment
                                    </MenuItem>
                                    <MenuItem value="seatAdjustment">
                                        Seat Adjustment
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </Box>

                    </div>
                    <InputLabel
                        style={{ color: "white" }}
                        id="demo-simple-select-label"
                    >
                        Comments:
                    </InputLabel>
                    <div style={{ minWidth: 120, marginBottom: "1rem" }}>
                    <TextField
                        id="filled-multiline-static"
                        multiline
                        rows={10}

                        style={{
                            backgroundColor: "white",
                            margin: "10px",
                            width: "520px",
                        }}
                        placeholder="Write about your problem....."
                    />
</div>

<Button
                variant="primary"
                type="submit"
                className="ms-4"

                style={{  marginBottom: "1rem" }}

            >
                Submit
            </Button>
                </div>
                <Footer  />
            </AnimateModal>
        </div>
    );
};

export default RepairBooking;
