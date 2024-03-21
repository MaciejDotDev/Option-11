import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Link, useForm, usePage,Head } from "@inertiajs/react";
import AdminNavbar from "@/Pages/AdminNavbar";
import { useEffect } from "react";


const AdminStockUpdate = () => {
    const [message, setMessage] =useState(null);
    const { data, setData, post, processing, errors, reset } = useForm({
        
        productid:null,
        stockquantity: null,

        
    });
    const submit = async (e) => {
        e.preventDefault();
        try{
            const response = await post(route("adminStockUpdate"));
            setMessage(response.message);
        } catch(error){
            setMessage("Stock update success");
        }
    };

    return (
        <div>
            <AdminNavbar/>

        <div style={{ fontsize: '20px',fontFamily: 'Arial', color: 'white' }}>

            <center><h1 style={{ fontSize: '50px', color: 'white' }}>Admin Stock Update</h1></center>
            <form onSubmit={submit}>
                <center><label htmlFor="productid" style={{color:'white'}}>Select Product ID:</label></center>
                <center><select id="productid" onChange={(e) => setData("productid", e.target.value)} style={{color:'black'}} >
                    <option value="">Select Product ID</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4 </option>
                    <option value="5">5 </option>
                    <option value="6">6 </option>
                    <option value="7">7 </option>
                    <option value="8">8 </option>
                    <option value="9">9 </option>
                    <option value="10">10 </option>
                    <option value="11">11 </option>
                    <option value="12">12 </option>
                    <option value="13">13 </option>
                    <option value="14">14 </option>
                    <option value="15">15 </option>
                    <option value="16">16 </option>
                    <option value="17">17 </option>
                    <option value="18">18 </option>
                    <option value="19">19 </option>
                    <option value="20">20 </option>
                    <option value="21">21 </option>
                    <option value="22">22 </option>
                    <option value="23">23 </option>
                    <option value="24">24 </option>
                    <option value="25">25</option>
                </select></center>
                <p></p>
                <p> </p>
                <center><label htmlFor="stockquantity">Enter Quantity:</label></center>
                <center><input type="number" id="stockquantity" onChange={(e) => setData("stockquantity", e.target.value)} style={{color:'black'}}/></center>
                <p></p>
                <center>
                <Row className="mb-4">
                            <Col className="mt-2" md={15}>
                                <Button
                                    variant="primary"
                                    type="submit"
                                    className="mt-2 "
                                    disabled={processing}
                                >
                                    Update
                                </Button>
                            </Col>
                        </Row> 
                </center>               
                {message && <center><p style={{ color: message === "Update Stock failed" ? "red" : "green" }}>{message}</p></center>}

                <p></p>

            </form>
        </div>
        </div>
    );
}

export default AdminStockUpdate;
