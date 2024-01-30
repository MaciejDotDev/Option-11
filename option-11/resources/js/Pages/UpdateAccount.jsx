import React, { useState } from "react";
import { AnimatePresence } from 'framer-motion';
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Link, useForm, usePage } from "@inertiajs/react";
import { useEffect } from "react";
import NavBar from "@/Components/NavBar";
import AnimateModal from '@/Components/AnimateModal';
import InputError from "@/Components/InputError";
export default function UpdateAccount({ auth,baskIcon }) {

//below is a form template, needs to be replaced
const { data, setData, post, processing, errors, reset } = useForm({

    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    password: "",
    password_confirmation: "",
});

useEffect(() => {
    return () => {
        reset("password", "password_confirmation");
    };
}, []);

const submit = (e) => {
    e.preventDefault();
    post(route("update"));
};

return (

    <div>

<AnimateModal auth={auth} baskIcon={baskIcon}>   

<Form
            className="p-5 rounded shadow-sm bg-dark text-light"
            onSubmit={submit}
        >
            <h2 className="text-center mb-4 pt-4 h2">Update Account</h2>

            <Row className="mb-3">
                <Col md={6} className="pr-md-2">
                    <Form.Group controlId="formBasicFirstName">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            id="firstname"
                            name="firstname"
                            value={data.firstname}
                            className="mt-1 block w-full"
                            autoComplete="firstname"
                            isFocused={true}
                            onChange={(e) =>
                                setData("firstname", e.target.value)
                            }
                            required
                        />
                        <InputError
                            message={errors.firstname}
                            className="mt-2"
                        />
                    </Form.Group>
                </Col>

                <Col md={6} className="pl-md-2">
                    <Form.Group controlId="formBasicLastName">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            id="lastname"
                            name="lastname"
                            value={data.lastname}
                            className="mt-1 block w-full"
                            autoComplete="lastname"
                            isFocused={true}
                            onChange={(e) =>
                                setData("lastname", e.target.value)
                            }
                            required
                        />
                        <InputError
                            message={errors.lastname}
                            className="mt-2"
                        />
                    </Form.Group>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col md={6} className="pr-md-2">
                <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                 id="email"
                                 type="email"
                                 name="email"
                                 value={data.email}
                                 className="mt-1 block w-full"
                                 autoComplete="email"
                                 onChange={(e) =>
                                     setData("email", e.target.value)
                                 }
                                 required
                            />
                            <InputError
                            message={errors.email}
                            className="mt-2"
                        />
                        </Form.Group>
                </Col>

                <Col md={6} className="pl-md-2">
                    <Form.Group controlId="formBasicPhoneNumber">
                        <Form.Label>Phone number </Form.Label>
                        <Form.Control
                            id="phonenumber"
                            type="number"
                            name="phonenumber"
                            value={data.phonenumber}
                            className="mt-1 block w-full"
                            autoComplete="phonenumber"
                            onChange={(e) =>
                                setData("phonenumber", e.target.value)
                            }
                            required
                        />
                        <InputError
                            message={errors.phonenumber}
                            className="mt-2"
                        />
                    </Form.Group>
                </Col>
            </Row>
           
            <Row className="mb-3">
            <Col md={6} className="pl-md-2">
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password </Form.Label>
                        <Form.Control
                             id="password"
                             type="password"
                             name="password"
                             value={data.password}
                             className="mt-1 block w-full"
                             autoComplete="new-password"
                             onChange={(e) =>
                                 setData("password", e.target.value)
                             }
                             required
                        />
                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </Form.Group>
                </Col>

                <Col md={6} className="pl-md-2">
                    <Form.Group controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm password</Form.Label>
                        <Form.Control
                             id="password_confirmation"
                             type="password"
                             name="password_confirmation"
                             value={data.password_confirmation}
                             className="mt-1 block w-full"
                             autoComplete="new-password"
                             onChange={(e) =>
                                 setData("password_confirmation", e.target.value)
                             }
                             required
                        />
                        <InputError
                            message={errors.password_confirmation}
                            className="mt-2"
                        />
                    </Form.Group>
                </Col>
            </Row>

            <div className="flex items-center justify-end mt-4">
             

                <Button
                    variant="primary"
                    type="submit"
                    className="ms-4"
                    disabled={processing}
                >
                    Update
                </Button>

               
            </div>

          
         
   
    
        </Form>
        </AnimateModal>
    
    </div>

  



   
       

);
        
      }
  

