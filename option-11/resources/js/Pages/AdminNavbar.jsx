import { Container, Nav, Navbar, Image, NavDropdown } from "react-bootstrap";
import krakenLogo from "../../assets/Kraken_logo.png";
import basketIcon from "../../assets/basket-icon.png";

const AdminNavbar = ({ auth, openModal }) => {


    return (
        <Navbar className="navbar" collapseOnSelect expand="lg" data-bs-theme="dark">
            <Container>
                <Navbar.Brand className="nav-logo fs-1" href={route('adminDashboard')}>
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
                            <NavDropdown.Item href={route('adminReports')}>Reports</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Users" id="collasible-nav-dropdown">
                            <NavDropdown.Item href={route('adminUsers')}>View users</NavDropdown.Item>
                            <NavDropdown.Item href={route('addProduct')}>Add user</NavDropdown.Item>
                            
                        </NavDropdown>
                        <NavDropdown title="Products" id="collasible-nav-dropdown">
                            <NavDropdown.Item href={route('addProduct')}>   Add Products</NavDropdown.Item>
                            <NavDropdown.Item href={route('adminProducts')}>View products</NavDropdown.Item>
                            <NavDropdown.Item href={route('products')}> Remove/Edit Product</NavDropdown.Item>
                            <NavDropdown.Item href={route('products')}> Add category</NavDropdown.Item>
                            
                        </NavDropdown>

                        <NavDropdown title="Orders" id="collasible-nav-dropdown">
                            <NavDropdown.Item href={route('adminUsers')}> View orders</NavDropdown.Item>
                            <NavDropdown.Item href={route('products')}>Manage products</NavDropdown.Item>
                            <NavDropdown.Item href={route('products')}> Remove/Edit Product</NavDropdown.Item>
                            
                        </NavDropdown>
                        
                        <Nav.Link
<<<<<<< HEAD
                            className="text-grey  "
                            href={route("adminEditUsers")}
                        >
                            Manage users
                        </Nav.Link>
                        <Nav.Link
                            className="text-grey  "
                            href="/addproduct"
                        >
                            Add Product
                        </Nav.Link>
                        <Nav.Link
                            className="text-grey  "
                            href="/aboutus"
                        >
                            Remove/Edit Product
                        </Nav.Link>


=======
                                    className="px-4 text-black bg-info rounded-2 "
                                    href="/adminLogout"
                                >
                                    Logout
                                </Nav.Link>
                   
                        
>>>>>>> dff58cfa8409bec97d6cb4bdbc29964178bb75db
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AdminNavbar;