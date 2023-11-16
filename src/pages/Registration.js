import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Registration = () => {
  return (
    <Container
      className='d-flex align-items-center justify-content-center '
      style={{ minHeight: '75vh' }}
    >
      <Form className='p-5 rounded shadow-sm bg-dark text-light'>
        <h2 className='text-center mb-4 pt-4'>Create Account</h2>

        <Row className='mb-3'>
          <Col md={6} className='pr-md-2'>
            <Form.Group controlId='formBasicFirstName'>
              <Form.Label>First name</Form.Label>
              <Form.Control type='text' placeholder='Enter first name' />
            </Form.Group>
          </Col>
          <Col md={6} className='pl-md-2'>
            <Form.Group controlId='formBasicLastName'>
              <Form.Label>Last name</Form.Label>
              <Form.Control type='text' placeholder='Enter last name' />
            </Form.Group>
          </Col>
        </Row>

        <Row className='mb-3'>
          <Col md={6} className='pr-md-2'>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email' placeholder='Enter email' />
            </Form.Group>
          </Col>
          <Col md={6} className='pl-md-2'>
            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' placeholder='Password' />
            </Form.Group>
          </Col>
        </Row>

        <Row className='mb-3'>
          <Col md={6} className='pr-md-2'>
            <Form.Group controlId='formBasicAddress'>
              <Form.Label>Delivery address</Form.Label>
              <Form.Control type='text' placeholder='Enter delivery address' />
            </Form.Group>
          </Col>
          <Col md={6} className='pl-md-2'>
            <Form.Group controlId='formBasicPostcode'>
              <Form.Label>Postcode</Form.Label>
              <Form.Control type='text' placeholder='Enter postcode' />
            </Form.Group>
          </Col>
        </Row>

        <Row className='mb-3 '>
          <Col md={6} className='pr-md-2'>
            <Form.Group controlId='formBasicPhoneNumber'>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type='text' placeholder='Enter phone number' />
            </Form.Group>
          </Col>
        </Row>

        <Button variant='primary' type='submit' className='w-100 mt-3 mb-5'>
          Sign-up
        </Button>
        <Link to={`/login`} className='link-info text-center'>
          Already Registered? Click here to login!
        </Link>
      </Form>
    </Container>
  );
};

export default Registration;
