import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container
      className='d-flex align-items-center justify-content-center '
      style={{ minHeight: '75vh' }}
    >
      <Form className='p-5 rounded shadow-sm bg-dark text-light'>
        <h2 className='text-center mb-5 pt-4'>Login</h2>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter email' />
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>

        <Button variant='primary' type='submit' className='w-100 mt-3 mb-5'>
          Login
        </Button>
        <Link to={`/register`} className='link-info text-center'>
          Not Registered? Click here to sign-up!
        </Link>
      </Form>
    </Container>
  );
};

export default Login;
