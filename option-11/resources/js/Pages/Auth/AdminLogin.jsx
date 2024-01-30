import { motion } from "framer-motion";
import React, { useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Head, Link, useForm } from '@inertiajs/react';
import NavBar from "@/Components/NavBar";
import Backdrop from "@/Components/Backdrop";


const AdminLogin = ({ handleClose,auth }) => {

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
      className="d-flex align-items-center justify-content-center "
      style={{ minHeight: '75vh' }}
    >
     
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
            className="mt-1 block w-full"
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