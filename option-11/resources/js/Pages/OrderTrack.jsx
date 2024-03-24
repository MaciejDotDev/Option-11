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
import Alert from "@mui/material/Alert";
const OrderTrack = ({ auth, orderItem, status, errors }) => {
    const card = (
        <React.Fragment>
            <CardContent>
                <div>
                    {errors.refund && (
                        <Alert
                            severity="error"
                            style={{ marginBottom: "1rem" }}
                        >
                            {errors.refund}
                        </Alert>
                    )}
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

                {status == "delivered" && (
                    <Button
                        size="small"
                        href={`/refund/${orderItem.orderitemid}`}
                        sx={{ color: "white" }}
                    >
                        Return Product
                    </Button>
                )}
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
                <div>
                    <Box sx={{ maxWidth: 1000 }} style={{ margin: "0 auto" }}>
                        <div
                            className="orderTrack"
                            style={{


                            }}
                        >
                            <Card
                                style={{
                                    backgroundColor: "#212529",
                                }}
                                variant="outlined"
                            >
                                {card}
                            </Card>
                        </div>
                    </Box>
                    <div
                        style={{

                        }}

                        className="orderProgressBar"
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
                                                orderStatus >= 50
                                                    ? "#b8011b"
                                                    : "",
                                            borderColor:
                                                orderStatus >= 50
                                                    ? "#b8011b"
                                                    : "",
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
                                                orderStatus >= 100
                                                    ? "#b8011b"
                                                    : "",
                                            borderColor:
                                                orderStatus >= 100
                                                    ? "#b8011b"
                                                    : "",
                                        }}
                                        className="step"
                                    ></div>
                                )}
                            </Step>
                        </ProgressBar>
                    </div>

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

                <Footer  position="absolute"/>
            </AnimateModal>
        </div>
    );
};

export default OrderTrack;
