import { Container, Nav, Navbar, Image, NavDropdown } from "react-bootstrap";
import krakenLogo from "../../assets/Kraken_logo.png";
import basketIcon from "../../assets/basket-icon.png";

const AdminNavbar = ({ auth, openModal }) => {
    

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
                        <NavDropdown title="Other" id="collasible-nav-dropdown">
                            <NavDropdown.Item href={route('products')}>Reports</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link
                            className="text-grey "
                            href={route("adminEditUsers")}
                        >
                            Manage users
                        </Nav.Link>
                        <Nav.Link
                            className="text-grey "
                            href="/contactus"
                        >
                            Add Product
                        </Nav.Link>
                        <Nav.Link
                            className="text-grey "
                            href="/aboutus"
                        >
                            Remove/Edit Product
                        </Nav.Link>
                        <Nav.Link
                                    className="px-4 text-black bg-info rounded-2 "
                                    href="/adminLogout"
                                >
                                    Logout
                                </Nav.Link>
                   
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AdminNavbar;