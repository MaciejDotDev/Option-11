import React from "react";
import NavBar from "@/Components/NavBar";
import AnimateModal from '@/Components/AnimateModal';
import { Container, Form, Button, Row, Col } from "react-bootstrap";
const ContactUs = ({ auth }) => {
    return (
        <div>
           <AnimateModal auth={auth}>  
            <>
                <style>
               
                </style>

        
                <div className="basketContainer">
                   
                        <div className="col-md-5 p-lg-5 mx-auto my-5"   style={{ color: "white", backgroundColor: "#1b2c33" }} >
                            <h1 className="display-4 font-weight-normal">Contact Us</h1>

                            <div className="mb-3">
                                <label htmlFor="" className="form-label">
                                    Name
                                </label>
                                <input type="Name" className="form-control" name="" id="" placeholder="John Doe" />
                            </div>

                            <div className="mb-3">
                                <br />
                                <label htmlFor="" className="form-label">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name=""
                                    id=""
                                    aria-describedby="emailHelpId"
                                    placeholder="example@hotmail.com"
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="" className="form-label">
                                    Description
                                </label>
                                <input type="Name" className="form-control" name="" id="" placeholder="Query..." />
                                <br />
                                <a className="btn" href="#">
                                    <button type="submit" className="btn btn-primary">
                                        Submit
                                    </button>
                                </a>
                            </div>
                        </div>
                 
                
                    
                        </div>
            </>
            </AnimateModal>
        </div >
    );
};

export default ContactUs;