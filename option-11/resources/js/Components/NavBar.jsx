import { Container, Nav, Navbar, Image, NavDropdown } from "react-bootstrap";
import krakenLogo from "../../assets/Kraken_logo.png";
import basketIcon from "../../assets/basket-icon.png";

const NavBar = ({ auth, openModal, baskIcon }) => {
    const itemBasket = () => {
        //onnly shows the icon if there is an item in the basket
        if (baskIcon.basketCount > 0) {
            return (
                <div
                    className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                    style={{
                        width: "1.5rem",
                        height: "1.5rem",
                        position: "absolute",
                        top: "20%",  // Adjust the top value as needed
        right: "28%", // Adjust the right value as needed
        transform: "translate(50%, -50%)", // Center the div
                    }}
                >
                    <span style={{ color: "#fff", fontSize: "1.2rem" }}>
                        {baskIcon.basketCount}
                    </span>
                </div>
            );
        }
    };
    return (
        <Navbar
            className="navbar"
            collapseOnSelect
            expand="lg"
            data-bs-theme="dark"
        >
            <Container>
                <Navbar.Brand className="nav-logo fs-1" href="/">
                    Option 11
                    <Image
                        src={krakenLogo}
                        rounded
                        fluid
                        className="kraken-logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/* Empty space between the Navbar*/}
                    </Nav>
                    <Nav className="gap-5 nav-links fs-4">
                        <NavDropdown
                            title="Products"
                            id="collasible-nav-dropdown"
                        >
                            <NavDropdown.Item href={route("products")}>
                                Bikes
                            </NavDropdown.Item>
                            <NavDropdown.Item href={route("clothing")}>
                                Clothing
                            </NavDropdown.Item>
                            <NavDropdown.Item href={route("accessoryProducts")}>
                                Accessories
                            </NavDropdown.Item>
                            <NavDropdown.Item href={route("repairKits")}>
                                Repair Kits
                            </NavDropdown.Item>
                            <NavDropdown.Item href={route("BikeParts")}>
                                Bike Parts
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className="text-grey  " href="/contactUs">
                            Contact us
                        </Nav.Link>
                        <Nav.Link className="text-grey  " href="/aboutus">
                            About us
                        </Nav.Link>
                        {auth.user ? (
                            <>
                                <Nav.Link className="px-4 position-relative" href="/basket">
                                    <div>{itemBasket()}</div>
                                    
                                    <Image
                                        src={basketIcon}
                                        rounded
                                        fluid
                                        className="basket-icon"
                                    />
                                </Nav.Link>

                                <Nav.Link
                                    className="text-black bg-info rounded-2 px-4 "
                                    href="/dashboard"
                                >
                                    My Account
                                </Nav.Link>
                            </>
                        ) : (
                            <Nav.Link
                                className="text-black bg-info rounded-2 px-4 "
                                onClick={openModal}
                            >
                                Login
                            </Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
