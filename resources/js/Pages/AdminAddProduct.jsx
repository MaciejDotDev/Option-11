import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Link, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";

import InputError from "@/Components/InputError";

import AdminNavbar from "@/Pages/AdminNavbar";

const AdminAddProduct = ({ auth }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        productname: "",
        productdescription: "",
        category: "",
        productprice: "",
        stockquantity: "",
        imageURL: "",
        colour: "",
        size: "",
        productCategory: "",
        compatibleWith: "",
    });

    useEffect(() => {
        return () => {
            reset(
                "productSearchName",
                "productName",
                "productDescription",
                "productQuantity",
                "productPrice"
            );
        };
    }, []);

    // I made these so that if the admin types in one, the other cannot be active.

    const submit = (e) => {
        e.preventDefault();
        post(route("createProduct"));
    };

    const [type, setType] = useState("");

    const showAdditionalForm = () => {
        switch (type) {
            case "repairkit":
                return (
                    <div>
                        <Row>
                            <Col md={6}>
                                <Form.Group
                                    controlId="formBasicProductCategory"
                                    className="mb-3"
                                >
                                    <Form.Label className="text-white">
                                        Product category
                                    </Form.Label>
                                    <Form.Control

                                        id="productCategory"
                                        name="productCategory"
                                        value={data.productCategory}
                                        className="form-control-lg"
                                        autoComplete="productCategory"
                                        onChange={(e) =>
                                            setData(
                                                "productCategory",
                                                e.target.value
                                            )
                                        }
                                        required
                                        style={{ width: "20rem" }}
                                    />
                                    <InputError
                                        message={errors.productCategory}
                                        className="mt-2"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group
                                    controlId="formBasicProductDescription"
                                    className="mb-3"
                                >
                                    <Form.Label className="text-white">
                                        Compatible with
                                    </Form.Label>
                                    <Form.Control

                                        id="compatibleWith"
                                        name="compatibleWith"
                                        value={data.compatibleWith}
                                        className="form-control-lg"
                                        autoComplete="compatibleWith"
                                        onChange={(e) =>
                                            setData(
                                                "compatibleWith",
                                                e.target.value
                                            )
                                        }
                                        required
                                        style={{ width: "20rem" }}
                                    />
                                    <InputError
                                        message={errors.compatibleWith}
                                        className="mt-2"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </div>
                );
            default:
                return (
                    <div>
                        <Row>
                            <Col md={6}>
                                <Form.Group
                                    controlId="formBasicProductDescription"
                                    className="mb-3"
                                >
                                    <Form.Label className="text-white">
                                        Product category
                                    </Form.Label>
                                    <Form.Control

                                        id="productCategory"
                                        name="productCategory"
                                        value={data.productCategory}
                                        className="form-control-lg"
                                        autoComplete="productCategory"
                                        onChange={(e) =>
                                            setData(
                                                "productCategory",
                                                e.target.value
                                            )
                                        }
                                        required
                                        style={{ width: "20rem" }}
                                    />
                                    <InputError
                                        message={errors.productCategory}
                                        className="mt-2"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group
                                    controlId="formBasicProductDescription"
                                    className="mb-3"
                                >
                                    <Form.Label className="text-white">
                                        Colour
                                    </Form.Label>
                                    <Form.Control

                                        id="colour"
                                        name="colour"
                                        value={data.colour}
                                        className="form-control-lg"
                                        autoComplete="colour"
                                        onChange={(e) =>
                                            setData(
                                                "colour",
                                                e.target.value
                                            )
                                        }
                                        required
                                        style={{ width: "20rem" }}
                                    />
                                    <InputError
                                        message={errors.colour}
                                        className="mt-2"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group
                                    controlId="formBasicProductDescription"
                                    className="mb-3"
                                >
                                    <Form.Label className="text-white">
                                        Size
                                    </Form.Label>
                                    <Form.Control

                                        id="size"
                                        name="size"
                                        value={data.size}
                                        className="form-control-lg"
                                        autoComplete="size"
                                        onChange={(e) =>
                                            setData(
                                                "size",
                                                e.target.value
                                            )
                                        }
                                        required
                                        style={{ width: "20rem" }}
                                    />
                                    <InputError
                                        message={errors.size}
                                        className="mt-2"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </div>
                );
        }
    };

    useEffect(() => {
        switch (data.category) {
            case "bike":
                setType("bike");
                break;
            case "bikepart":
                setType("bikepart");
                break;
            case "accessory":
                setType("accessory");
                break;
            case "clothing":
                setType("clothing");
                break;
            case "repairkit":
                setType("repairkit");
                break;
            default:
                setType("");
        }
    }, [data.category]);

    return (
        <div>
            <AdminNavbar auth={auth} />
            <h2 className="pt-3 text-center text-light h2">Add product</h2>

            <div>
                <Container className="mt-4 d-flex justify-content-center">
                    <Form className="rounded" onSubmit={submit}>
                        <Row>
                            <Col md={6}>
                                <Form.Group
                                    controlId="formBasicProductName"
                                    className="mb-3"
                                >
                                    <Form.Label className="text-white">
                                        Product Name
                                    </Form.Label>
                                    <Form.Control
                                        id="productname"
                                        name="productname"
                                        value={data.productname}
                                        className="mt-1 form-control-lg"
                                        autoComplete="productName"
                                        onChange={(e) =>
                                            setData(
                                                "productname",
                                                e.target.value
                                            )
                                        }
                                        required
                                        style={{ width: "20rem" }}
                                    />
                                    <InputError
                                        message={errors.productname}
                                        className="mt-2"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group
                                    controlId="formBasicProductDescription"
                                    className="mb-3"
                                >
                                    <Form.Label className="text-white">
                                        Product Description
                                    </Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        id="productdescription"
                                        name="productdescription"
                                        value={data.productdescription}
                                        className="form-control-lg"
                                        autoComplete="productdescription"
                                        onChange={(e) =>
                                            setData(
                                                "productdescription",
                                                e.target.value
                                            )
                                        }
                                        required
                                        style={{ width: "20rem" }}
                                    />
                                    <InputError
                                        message={errors.productdescription}
                                        className="mt-2"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group
                                    controlId="formBasicProductPrice"
                                    className="mb-3"
                                >
                                    <Form.Label className="text-white">
                                        Product Price
                                    </Form.Label>
                                    <Form.Control
                                        id="productprice"
                                        name="productprice"
                                        value={data.productprice}
                                        className="form-control-lg"
                                        autoComplete="productprice"
                                        onChange={(e) =>
                                            setData(
                                                "productprice",
                                                e.target.value
                                            )
                                        }
                                        required
                                        style={{ width: "10rem" }}
                                    />
                                    <InputError
                                        message={errors.productprice}
                                        className="mt-2"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Label className="text-white">
                                    Category
                                </Form.Label>

                                <Form.Group
                                    controlId="formBasicProductCategory"
                                    className="mb-3"
                                >
                                    <Form.Select
                                        className="form-control-lg"
                                        onChange={(e) =>
                                            setData("category", e.target.value)
                                        }
                                    >
                                        <option>Select</option>
                                        <option value="bike">Bike</option>
                                        <option value="accessory">
                                            Accessory
                                        </option>
                                        <option value="bikepart">
                                            Bike Part
                                        </option>
                                        <option value="clothing">
                                            Clothing
                                        </option>
                                        <option value="repairkit">
                                            Repair kit
                                        </option>
                                    </Form.Select>
                                    <InputError
                                        message={errors.category}
                                        className="mt-2"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Group
                                    controlId="formBasicProductPrice"
                                    className="mb-3"
                                >
                                    <Form.Label className="text-white">
                                        Stock quantity
                                    </Form.Label>
                                    <Form.Control
                                        id="stockquantity"
                                        name="stockquantity"
                                        value={data.stockquantity}
                                        className="form-control-lg"
                                        autoComplete="productprice"
                                        onChange={(e) =>
                                            setData(
                                                "stockquantity",
                                                e.target.value
                                            )
                                        }
                                        required
                                        style={{ width: "10rem" }}
                                    />
                                    <InputError
                                        message={errors.stockquantity}
                                        className="mt-2"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group
                                    controlId="formBasicProductPrice"
                                    className="mb-3"
                                >
                                    <Form.Label className="text-white">
                                        Image URL
                                    </Form.Label>
                                    <Form.Control
                                        id="imageURL"
                                        name="imageURL"
                                        value={data.imageURL}
                                        className="form-control-lg"
                                        autoComplete="imageURL"
                                        onChange={(e) =>
                                            setData("imageURL", e.target.value)
                                        }
                                        required
                                        style={{ width: "20rem" }}
                                    />
                                    <InputError
                                        message={errors.imageURL}
                                        className="mt-2"
                                    />
                                </Form.Group>

                                {showAdditionalForm()}
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col className="mt-2" md={6}>
                                <Button
                                    variant="primary"
                                    type="submit"
                                    className="mt-2 "
                                    disabled={processing}
                                >
                                    Create
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </div>
        </div>
    );
};

export default AdminAddProduct;
