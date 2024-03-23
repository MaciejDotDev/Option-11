import { InertiaLink } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import { useEffect } from "react";

import AnimateModal from "@/Components/AnimateModal";
import React, { useState } from "react";
import { ProgressBar, Step } from "react-step-progress-bar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Footer from "@/Components/Footer";
import CardMedia from "@mui/material/CardMedia";
import {
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    TextField,
    LinearProgress,
} from "@mui/material";
const OrderTrack = ({ auth, orderItem, status }) => {
    const card = (
        <React.Fragment>
            <CardContent>
                <div>
                    <Typography
                        sx={{ fontSize: 25, color: "white" }}
                        color="text.primary"
                        gutterBottom
                    >
                        {orderItem.products.productname}
                    </Typography>

                    <Typography
                        sx={{ mb: 1.5, fontSize: 15, color: "white" }}
                        color="text.secondary"
                    >
                        Total price: {orderItem.totalprice}
                    </Typography>
                    <Typography
                        sx={{ mb: 1.5, fontSize: 15, color: "white" }}
                        color="text.secondary"
                    >
                        Quantity: {orderItem.quantity}
                    </Typography>
                    <Typography
                        sx={{ mb: 1.5, fontSize: 15, color: "white" }}
                        color="text.secondary"
                    >
                        Status: {status}
                    </Typography>
                </div>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    href={`/viewProduct/${orderItem.productid}`}
                    sx={{ color: "white" }}
                >
                    View Product
                </Button>
                <Button
                    size="small"
                    href={`/refund/${orderItem.orderitemid}`}
                    sx={{ color: "white" }}
                >
                    Return Product
                </Button>
            </CardActions>
        </React.Fragment>
    );

    const [orderStatus, setOrderStatus] = useState(0);

    useEffect(() => {
        if (status === "paid") {
            setOrderStatus(20);
        } else if (status === "dispatched") {
            setOrderStatus(50);
        } else if (status === "delivered") {
            setOrderStatus(100);
        }
    }, [status]);
    return (
        <div>
            {/* Navigation */}
            <AnimateModal auth={auth}>
                <Box sx={{ maxWidth: 1000 }} style={{ margin: "0 auto" }}>
                    <Card
                        style={{
                            margin: "0 auto",
                            width: "40%",
                            marginBottom: "3rem",
                            backgroundColor: "#212529",
                        }}
                        variant="outlined"
                    >
                        {card}
                    </Card>
                </Box>
                <div
                    style={{
                        margin: "0 auto",
                        backgroundColor: "#17191B",
                        width: "50%",
                        paddingBottom: "10rem",
                    }}
                >
                    <ProgressBar percent={orderStatus}>
                        <Step>
                            {({ accomplished }) => (
                                <div>
                                    {" "}
                                    <div
                                        style={{
                                            backgroundColor: "#b8011b",

                                            borderColor: "#b8011b",
                                        }}
                                        className="step"
                                    ></div>
                                </div>
                            )}
                        </Step>
                        <Step>
                            {({ accomplished }) => (
                                <div
                                    style={{
                                        backgroundColor:
                                            orderStatus >= 50 ? "#b8011b" : "",
                                        borderColor:
                                            orderStatus >= 50 ? "#b8011b" : "",
                                    }}
                                    className="step"
                                ></div>
                            )}
                        </Step>
                        <Step>
                            {({ accomplished }) => (
                                <div
                                    style={{
                                        backgroundColor:
                                            orderStatus >= 100 ? "#b8011b" : "",
                                        borderColor:
                                            orderStatus >= 100 ? "#b8011b" : "",
                                    }}
                                    className="step"
                                ></div>
                            )}
                        </Step>
                    </ProgressBar>
                    <p
                        style={{
                            marginTop: "3rem",
                            marginBottom: "3rem",
                            color: "white",
                            textAlign: "center",
                        }}
                    >
                        {orderStatus == 50
                            ? "Order has been shipped you should expect your product in a couple of weeks"
                            : orderStatus == 100
                            ? "Order has been delivered"
                            : "Your order has been paid now waiting for shipping....."}
                    </p>
                </div>
                <Footer />
            </AnimateModal>
        </div>
    );
};

export default OrderTrack;
