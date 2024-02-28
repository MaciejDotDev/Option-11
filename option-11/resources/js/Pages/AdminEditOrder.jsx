import { useState, useEffect } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import AdminNavbar from "@/Pages/AdminNavbar";
import InputError from "@/Components/InputError";

const AdminEditOrder = ({ auth }) => {
    const [searchOrderId, setSearchOrderId] = useState("");
    const [searchedOrder, setSearchedOrder] = useState(null);
    const [data, setData] = useState({
        orderId: "",
        customerName: "",
        productQuantity: "",
        deliveryStatus: "",
    });

    // Sample data for testing
    const sampleOrdersData = [
        {
            orderId: "123456",
            customerName: "John Doe",
            productQuantity: 3,
            deliveryStatus: "notDelivered",
            trackingCode: "No tracking code",
        },
        {
            orderId: "789012",
            customerName: "Jane Smith",
            productQuantity: 2,
            deliveryStatus: "delivered",
            trackingCode: "PG-GTRG6EDS",
        },
        {
            orderId: "345678",
            customerName: "Bob Johnson",
            productQuantity: 5,
            trackingCode: "No tracking code",
        },
    ];

    // I did this just to implement the appearning functionality one the user searches.
    // If you're doing backend feel free to delete the sample data and fetch from backend.
    const handleOrderSearch = async (e) => {
        e.preventDefault();
        try {
            // Checking if the searched order ID matches one that exists.
            const searchedOrder = sampleOrdersData.find(
                (order) => order.orderId === searchOrderId
            );

            if (searchedOrder) {
                // Setting the fetched order details to the state.
                setSearchedOrder(searchedOrder);
                setData(searchedOrder); // Setting the form data to the searched order.
            } else {
                setSearchedOrder(null);
                setData({
                    orderId: "",
                    customerName: "",
                    productQuantity: "",
                    deliveryStatus: "",
                    trackingCode: searchedOrder.trackingCode || "",
                });
            }
        } catch (error) {
            console.error("Error fetching order details:", error);
        }
    };

    const submit = (e) => {
        e.preventDefault();
        // Implement the logic to update order details
        console.log("Updated Order Details:", data);
    };

    // Clears the form
    const handleClear = () => {
        setSearchedOrder(null);
        setSearchOrderId("");
        setData({
            orderId: "",
            customerName: "",
            productQuantity: "",
            deliveryStatus: "",
        });
    };

    return (
        <div>
            <AdminNavbar auth={auth} />
            <h2 className="pt-3 text-center text-light h2">
                Edit Order Details
            </h2>

            <Container className="mt-4 d-flex justify-content-center">
                <Form className="rounded" onSubmit={handleOrderSearch}>
                    <Row>
                        <Col md={6}>
                            <Form.Group
                                controlId="formBasicSearchOrderId"
                                className="mb-3"
                            >
                                <Form.Label className="text-white">
                                    Search Order ID
                                </Form.Label>
                                <Form.Control
                                    id="searchOrderId"
                                    name="searchOrderId"
                                    value={searchOrderId}
                                    className="mt-1 form-control-lg"
                                    autoComplete="searchOrderId"
                                    onChange={(e) =>
                                        setSearchOrderId(e.target.value)
                                    }
                                    required
                                    style={{ width: "20rem" }}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Col md={6} className="align-self-end">
                        <Button
                            className="text-white"
                            variant="info"
                            type="submit"
                        >
                            Search Order
                        </Button>
                    </Col>
                </Form>
            </Container>

            <Container className="mt-4 d-flex justify-content-center">
                {/* Displays the order details in their corresponding fields once searched. */}
                {searchedOrder && (
                    <Form className="rounded" onSubmit={submit}>
                        <Row>
                            <Col md={6}>
                                <Form.Group
                                    controlId="formBasicOrderId"
                                    className="mb-3"
                                >
                                    <Form.Label className="text-white">
                                        Order ID
                                    </Form.Label>
                                    <Form.Control
                                        id="orderId"
                                        name="orderId"
                                        value={data.orderId}
                                        className="mt-1 form-control-lg"
                                        autoComplete="orderId"
                                        disabled
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group
                                    controlId="formBasicCustomerName"
                                    className="mb-3"
                                >
                                    <Form.Label className="text-white">
                                        Customer Name
                                    </Form.Label>
                                    <Form.Control
                                        id="customerName"
                                        name="customerName"
                                        value={data.customerName}
                                        className="mt-1 form-control-lg"
                                        autoComplete="customerName"
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                customerName: e.target.value,
                                            })
                                        }
                                        required
                                        style={{ width: "20rem" }}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group
                                    controlId="formBasicProductQuantity"
                                    className="mb-3"
                                >
                                    <Form.Label className="text-white">
                                        Product Quantity
                                    </Form.Label>
                                    <Form.Control
                                        id="productQuantity"
                                        name="productQuantity"
                                        value={data.productQuantity}
                                        className="form-control-lg"
                                        autoComplete="productQuantity"
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                productQuantity: e.target.value,
                                            })
                                        }
                                        required
                                        style={{ width: "10rem" }}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group
                                    controlId="formBasicTrackingCode"
                                    className="mb-3"
                                >
                                    <Form.Label className="text-white">
                                        Tracking Code
                                    </Form.Label>
                                    <Form.Control
                                        id="trackingCode"
                                        name="trackingCode"
                                        value={data.trackingCode}
                                        className="form-control-lg"
                                        autoComplete="trackingCode"
                                        onChange={(e) =>
                                            setData(
                                                "trackingCode",
                                                e.target.value
                                            )
                                        }
                                        style={{ width: "15rem" }}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group
                                    controlId="formBasicDeliveryStatus"
                                    className="mb-3"
                                >
                                    <Form.Label className="text-white">
                                        Delivery Status
                                    </Form.Label>
                                    <Form.Control
                                        as="select"
                                        id="deliveryStatus"
                                        name="deliveryStatus"
                                        value={data.deliveryStatus}
                                        className="form-control-lg"
                                        autoComplete="deliveryStatus"
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                deliveryStatus: e.target.value,
                                            })
                                        }
                                        required
                                        style={{ width: "15rem" }}
                                    >
                                        <option value="delivered">
                                            Delivered
                                        </option>
                                        <option value="notDelivered">
                                            Not Delivered
                                        </option>
                                        <option value="dispatched">
                                            Dispatched
                                        </option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>

                        {/* Clear Button to clear all data */}
                        <Row className="mb-4 d-flex justify-content-center">
                            <Col md={6}>
                                <Form.Group
                                    controlId="formBasicClear"
                                    className="mb-3"
                                >
                                    <Button
                                        variant="secondary"
                                        onClick={handleClear}
                                        disabled={!searchedOrder}
                                    >
                                        Clear
                                    </Button>
                                </Form.Group>
                            </Col>
                        </Row>

                        {/* Submit Button (Updates Order Details) */}
                        <Row className="mb-4 d-flex justify-content-center">
                            <Col md={6}>
                                <Form.Group
                                    controlId="formBasicSubmit"
                                    className="mb-3"
                                >
                                    <Button variant="primary" type="submit">
                                        Update Order
                                    </Button>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                )}
            </Container>
        </div>
    );
};

export default AdminEditOrder;
