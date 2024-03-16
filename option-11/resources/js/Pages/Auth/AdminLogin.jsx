import { motion } from "framer-motion";
import React, { useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Head, Link, useForm } from '@inertiajs/react';



const AdminLogin = ({ handleClose, auth }) => {

  const { data, setData, post, processing, errors, reset } = useForm({
    username: '',
    password: '',

  });


  useEffect(() => {
    return () => {
      reset('password');
    };
  }, []);

  const submit = (e) => {
    e.preventDefault();

    post(route('adminLogin'));
  };


  return (


    <Container
      className="d-flex align-items-center justify-content-center flex-col"
      style={{ minHeight: '75vh' }}
    >

      <div className=" mb-10 text-center">
        <h1 className=" text-white display-3">Admin Area</h1>
        <p className=" mt-2 text-red-600">If you are not authorised to view this page, <a className="link-info underline" href="/">please leave now.</a></p>
      </div>


      <Form
        className="p-5 rounded shadow-sm bg-dark text-light"
        onSubmit={submit}
      >
        <Head title="Log in" />



        <div>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={data.email}
            className="block w-full mt-1"
            autoComplete="username"
            onChange={(e) => setData('username', e.target.value)}
          />
          <Form.Text className="text-danger">{errors.username}</Form.Text>
        </div>

        <div className="mt-4">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={data.password}
            autoComplete="current-password"
            onChange={(e) => setData('password', e.target.value)}
          />
          <Form.Text className="text-danger">{errors.password}</Form.Text>
        </div>



        <div className="flex items-center justify-end mt-4">


          <Button
            variant="primary"
            type="submit"
            className="ms-4"
            disabled={processing}
          >
            Log in
          </Button>
        </div>
      </Form>
    </Container>

  );
};


export default AdminLogin;
