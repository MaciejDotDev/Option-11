import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Link, useForm } from "@inertiajs/react";
import { useEffect } from "react";

import InputError from "@/Components/InputError";

import AdminNavbar from "@/Pages/AdminNavbar";

const AdminAddProducts = ({ auth }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        productName: '',
        productDescription: '',
        productQuantity: '',
        productPrice: '',
        productImageLink: '',
    });

    useEffect(() => {
        return () => {
            reset(
                'productName',
                'productDescription',
                'productQuantity',
                'productPrice',
                'productImageLink'
            );
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <AdminNavbar auth={auth} />
            <h2 className="text-light h2 text-center pt-3">Add Product</h2>

            <Container className="d-flex justify-content-center mt-4">
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
                        <Col md={6}>
                            <Form.Group controlId="formBasicProductImageLink" className="mb-3">
                                <Form.Label className="text-white">Product Image Link</Form.Label>
                                <Form.Control
                                    id="productImageLink"
                                    name="productImageLink"
                                    value={data.productImageLink}
                                    className="form-control-lg"
                                    autoComplete="productImageLink"
                                    onChange={(e) => setData("productImageLink", e.target.value)}
                                    required
                                    style={{ width: '20rem' }}
                                />
                                <InputError
                                    message={errors.productImageLink}
                                    className="mt-2"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col md={6}>
                            <Form.Group controlId="formBasicProductImage" className="mb-3">
                                <Form.Label className="text-white">Product Image</Form.Label>
                                <Form.Control
                                    type="file"
                                    id="productImage"
                                    name="productImage"
                                    onChange={(e) => handleImageChange(e)}
                                    accept="image/*"
                                    required
                                />
                                <InputError message={errors.productImage} className="mt-2" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mb-4 d-flex justify-center">
                        <Col className="mt-2" md={6}>
                            <Button
                                variant="primary"
                                type="submit"
                                className=""
                                disabled={processing}
                            >
                                Add Product
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    );
};

export default AdminAddProducts;
