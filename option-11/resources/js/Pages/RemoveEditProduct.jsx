import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Link, useForm } from "@inertiajs/react";
import { useEffect } from "react";

import InputError from "@/Components/InputError";

import AdminNavbar from "@/Pages/AdminNavbar";
import Footer from "@/Components/Footer";
const RemoveEditProduct = ({ auth,products }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        productid: products.productid,
        productname: products.productname,
        productdescription: products.description,
        action: "",
        imageURL: products.imageURL,
        productprice: products.price,
        category: products.products.name,

    });


    // I made these so that if the admin types in one, the other cannot be active.


    const submit = (e) => {
        e.preventDefault();
        post(route("remEditProduct"));

    };

    return (
        <div>
            <AdminNavbar auth={auth} />
            <h2 className="pt-3 text-center text-light h2">Remove/Edit Product</h2>

            <div key={products.productid}>
            <Container className="mt-4 d-flex justify-content-center">
                <Form className="rounded" onSubmit={submit}>
                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="formBasicProductName" className="mb-3">
                                <Form.Label className="text-white">Product Name</Form.Label>
                                <Form.Control
                                    id="productname"
                                    name="productname"
                                    value={data.productname}
                                    className="mt-1 form-control-lg"
                                    autoComplete="productName"
                                    onChange={(e) => setData("productname", e.target.value)}
                                    required
                                    style={{ width: '20rem' }}
                                />
                                <InputError message={errors.productname} className="mt-2" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="formBasicProductDescription" className="mb-3">
                                <Form.Label className="text-white">Product Description</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    id="productdescription"
                                    name="productdescription"
                                    value={data.productdescription}
                                    className="form-control-lg"
                                    autoComplete="productdescription"
                                    onChange={(e) => setData("productdescription", e.target.value)}
                                    required
                                    style={{ width: '20rem' }}
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
                                    controlId="formBasicImageURL"
                                    className="mb-3"
                                >
                                    <Form.Label className="text-white">
                                        Image URL
                                    </Form.Label>
                                    <Form.Control
                                        id="imageURL"
                                        name="imageURL"
                                        value={data.imageURL}
                                        className="mt-1 form-control-lg"
                                        autoComplete="imageURL"
                                        onChange={(e) =>
                                            setData(
                                                "imageURL",
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
                            <Form.Label className="text-white">Category</Form.Label>
                                <Form.Select className="form-control-lg"   onChange={(e) =>
                                            setData(
                                                "category",
                                                e.target.value
                                            )
                                        }
                                        value={data.category}>
                                    <option>Choose a category</option>
                                    <option value="bike">Bike</option>
                                    <option value="accessory">Accessory</option>
                                    <option value="bikepart">Bike Part</option>
                                    <option value="clothing">Clothing</option>
                                    <option value="repairkit">Repair kit</option>
                                </Form.Select>
                            </Col>
                        </Row>
                    <Row>

                        <Col md={6}>
                            <Form.Group controlId="formBasicProductPrice" className="mb-3">
                                <Form.Label className="text-white">Product Price</Form.Label>
                                <Form.Control
                                    id="productprice"
                                    name="productprice"
                                    value={data.productprice}
                                    className="form-control-lg"
                                    autoComplete="productprice"
                                    onChange={(e) => setData("productprice", e.target.value)}
                                    required
                                    style={{ width: '10rem' }}
                                />
                                <InputError
                                    message={errors.productprice}
                                    className="mt-2"
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="mb-4">
                        <Col className="mt-2" md={6}>
                            <Button
                                variant="primary"
                                type="submit"
                                className="mt-2 "
                                disabled={processing}
                                onClick={(e) => setData("action","update")}
                            >
                                Update Product
                            </Button>
                        </Col>
                        <Col className="mt-2" md={6}>
                            <Button
                                variant="danger"
                                type="submit"
                                className="mt-2"
                                disabled={processing}
                                onClick={(e) => setData("action","remove")}
                            >
                                Remove Product
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Container>

            </div>

        </div>
    );
};

export default RemoveEditProduct;
