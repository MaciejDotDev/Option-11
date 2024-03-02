import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Link, useForm } from "@inertiajs/react";
import { useEffect } from "react";

import InputError from "@/Components/InputError";

import AdminNavbar from "@/Pages/AdminNavbar";

const RemoveEditProduct = ({ auth }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        productId: "",
        productSearchName: "",
        productName: "",
        productDescription: "",
        productQuantity: "",
        productPrice: "",
    });

    useEffect(() => {
        return () => {
            reset("productId", "productSearchName", "productName", "productDescription", "productQuantity", "productPrice");
        };
    }, []);

    // I made these so that if the admin types in one, the other cannot be active.
    const isProductIdNotEmpty = !!data.productId.trim();
    const isProductSearchNameNotEmpty = !!data.productSearchName.trim();

    const submit = (e) => {
        e.preventDefault();

    };

    return (
        <div>
            <AdminNavbar auth={auth} />
            <h2 className="pt-3 text-center text-light h2">Remove/Edit Product</h2>
            <Container className="mt-4 d-flex justify-content-center">
                <Form className="rounded" onSubmit={submit}>
                    <Row className="align-items-center justify-content-center">
                        <Col md={6}>
                            <Form.Group controlId="formBasicProductId" className="mb-3">
                                <Form.Label className="text-white">Product ID</Form.Label>
                                <Form.Control
                                    id="productId"
                                    name="productId"
                                    value={data.productId}
                                    className="block w-full mt-1"
                                    autoComplete="productId"
                                    onChange={(e) => setData("productId", e.target.value)}
                                    required
                                    disabled={isProductSearchNameNotEmpty}
                                    style={{
                                        backgroundColor: isProductSearchNameNotEmpty ? 'inherit' : '#e9e9e9',
                                    }}
                                />
                                <InputError message={errors.productId} className="mt-2" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="formBasicProductSearchName" className="mb-3">
                                <Form.Label className="text-white">Product Name</Form.Label>
                                <Form.Control
                                    id="productSearchName"
                                    name="productSearchName"
                                    value={data.productSearchName}
                                    className="block w-full mt-1"
                                    autoComplete="productSearchName"
                                    onChange={(e) => setData("productSearchName", e.target.value)}
                                    required
                                    disabled={isProductIdNotEmpty}
                                    style={{
                                        backgroundColor: isProductIdNotEmpty ? 'inherit' : '#e9e9e9',
                                    }}
                                />
                                <InputError message={errors.productSearchName} className="mt-2" />
                            </Form.Group>
                        </Col>
                        <Button
                            variant="primary"
                            type="submit"
                            className="mt-2 ms-4 d-block w-50"
                            disabled={processing}
                        >
                            Search
                        </Button>
                    </Row>
                </Form>
            </Container>

            <Container className="mt-4 d-flex justify-content-center">
                <Form className="rounded" onSubmit={submit}>
                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="formBasicProductName" className="mb-3">
                                <Form.Label className="text-white">Product Name</Form.Label>
                                <Form.Control
                                    id="productName"
                                    name="productName"
                                    value={data.productName}
                                    className="mt-1 form-control-lg"
                                    autoComplete="productName"
                                    onChange={(e) => setData("productName", e.target.value)}
                                    required
                                    style={{ width: '20rem' }}
                                />
                                <InputError message={errors.productName} className="mt-2" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="formBasicProductDescription" className="mb-3">
                                <Form.Label className="text-white">Product Description</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    id="productDescription"
                                    name="productDescription"
                                    value={data.productDescription}
                                    className="form-control-lg"
                                    autoComplete="productDescription"
                                    onChange={(e) => setData("productDescription", e.target.value)}
                                    required
                                    style={{ width: '20rem' }}
                                />
                                <InputError
                                    message={errors.productDescription}
                                    className="mt-2"
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="formBasicProductQuantity" className="mb-3">
                                <Form.Label className="text-white">Product Quantity</Form.Label>
                                <Form.Control
                                    id="productQuantity"
                                    name="productQuantity"
                                    value={data.productQuantity}
                                    className="form-control-lg"
                                    autoComplete="productQuantity"
                                    onChange={(e) => setData("productQuantity", e.target.value)}
                                    required
                                    style={{ width: '10rem' }}
                                />
                                <InputError
                                    message={errors.productQuantity}
                                    className="mt-2"
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="formBasicProductPrice" className="mb-3">
                                <Form.Label className="text-white">Product Price</Form.Label>
                                <Form.Control
                                    id="productPrice"
                                    name="productPrice"
                                    value={data.productPrice}
                                    className="form-control-lg"
                                    autoComplete="productPrice"
                                    onChange={(e) => setData("productPrice", e.target.value)}
                                    required
                                    style={{ width: '10rem' }}
                                />
                                <InputError
                                    message={errors.productPrice}
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
                            >
                                Remove Product
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    );
};

export default RemoveEditProduct;
