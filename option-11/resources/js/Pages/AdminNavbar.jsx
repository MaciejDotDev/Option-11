import { Container, Nav, Navbar, Image, NavDropdown } from "react-bootstrap";
import krakenLogo from "../../assets/Kraken_logo.png";
import basketIcon from "../../assets/basket-icon.png";
import React, { useEffect } from 'react';
import Pusher from 'pusher-js';


import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
const AdminNavbar = ({ auth, openModal }) => {

    useEffect(() => {

        const pusher = new Pusher('e090badc6993a1fe1e83', {
          cluster: 'eu', //because we're in the europe we define cluser as eu
        });


        const channel = pusher.subscribe('notification-channel');

  // create channel name that pusher dashboard uses, if two applications with the same pusher key will result into double notifcation
        channel.bind('order-placed', (data) => {


            toastr.success(data.orderid); //  send notifcation to admin
        });



        return () => {
          channel.unbind_all();
          channel.unsubscribe();
        };
     }, []);
    return (
        <Navbar className="navbar" collapseOnSelect expand="lg" data-bs-theme="dark">
            <Container>
                <Navbar.Brand className="nav-logo fs-1"  href={route('adminDashboard')}>
                    Admin
                    <Image src={krakenLogo} rounded fluid className="kraken-logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/* Empty space between the Navbar*/}
                    </Nav>
                    <Nav className="gap-5 nav-links fs-4">


                    <Nav.Link className="text-grey "  href={route('adminReports')}>
                        Reports
                        </Nav.Link>
                        <Nav.Link className="text-grey "  href={route('adminUsers')}>
                        Users
                        </Nav.Link>
                        <NavDropdown title="Products" id="collasible-nav-dropdown">
                            <NavDropdown.Item href={route('addProduct')}> Add Product</NavDropdown.Item>
                            <NavDropdown.Item href={route('adminStockUpdateshow')}>Add Stock</NavDropdown.Item>
                            <NavDropdown.Item href={route('adminProducts')}>View all products</NavDropdown.Item>



                        </NavDropdown>

                        <Nav.Link className="text-grey " href="/address">
                            Addresses
                        </Nav.Link>
                        <Nav.Link className="text-grey "  href={route('orders')}>
                        Orders
                        </Nav.Link>
                        <Nav.Link className="text-grey "  href="/admin/refunds">
                        Refunds
                        </Nav.Link>




                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AdminNavbar;
