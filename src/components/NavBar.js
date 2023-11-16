import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import krakenLogo from '../assets/Kraken_logo.png';
import basketIcon from '../assets/basket-icon.png';

const NavBar = () => {
  let loggedIn = false;

  return (
    <Navbar
      className='navbar'
      collapseOnSelect
      expand='lg'
      data-bs-theme='dark'
    >
      <Container>
        <Navbar.Brand className='nav-logo fs-1' href='/'>
          Option 11
          <Image src={krakenLogo} rounded fluid className='kraken-logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>{/* Empty Space between Navbar*/}</Nav>
          <Nav className='gap-5 nav-links fs-4'>
            <Nav.Link className='nav-link text-white' href='#bikes'>
              Bikes
            </Nav.Link>
            <Nav.Link className='nav-link text-white' href='#clothing'>
              Clothing
            </Nav.Link>
            <Nav.Link className='nav-link text-white' href='#accessories'>
              Accessories
            </Nav.Link>
            {loggedIn ? (
              <>
                {' '}
                <Nav.Link className='px-4' href='#memes'>
                  <Image
                    src={basketIcon}
                    rounded
                    fluid
                    className='basket-icon'
                  />
                </Nav.Link>
                <Nav.Link
                  className='text-black bg-info rounded-2 px-4 '
                  href='#memes'
                >
                  My Account
                </Nav.Link>
              </>
            ) : (
              <Nav.Link
                className='text-black bg-info rounded-2 px-4 '
                href='/login'
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
