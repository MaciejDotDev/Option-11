import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Link, useForm } from "@inertiajs/react";
import { useEffect,useState } from "react";

import InputError from "@/Components/InputError";

import AdminNavbar from "@/Pages/AdminNavbar";

const AdminReports = ({ auth }) => {



    // I made these so that if the admin types in one, the other cannot be active.

    const [state, setState] = useState();
    const submit = (e) => {
        e.preventDefault();

    };

    return (
        <div>
            <AdminNavbar auth={auth} />
            <h2 className="text-light h2 text-center pt-3">Admin Reports</h2>
            <Container className="d-flex justify-content-center mt-6">
                <Form className="rounded" onSubmit={submit}>
                    <Row className="align-items-center justify-content-center mb-10">

                        <Col md={3}>
                            <Form.Check
                                type='radio'
                                id='order-history'
                                label='Revenue History Report'
                                className="text-white form-control-lg"
                                name='reportType'
                            />
                        </Col>
                        <Col md={3}>
                            <Form.Check
                                type='radio'
                                id='users-list'
                                label='Users Stats Report'
                                className="text-white form-control-lg"
                                name='reportType'
                                onClick={() => {
                                    setState('users/stats/export/');
                                }}
                            />
                        </Col>
                        <Col md={3}>
                            <Form.Check
                                type='radio'
                                id='product-list'
                                label='Product Stats Report'
                                className="text-white form-control-lg"
                                name='reportType'
                            />
                        </Col>
                        <Button
                            variant="primary"
                            type="submit"
                            className="ms-4 mt-8 d-block w-50"
                        >
                            Generate Report
                        </Button>
                    </Row>
                </Form>
            </Container>

        </div>
    );
};

export default AdminReports;
