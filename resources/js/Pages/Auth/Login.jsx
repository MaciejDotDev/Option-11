import React, { useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Head, Link, useForm } from '@inertiajs/react';

const Login = ({ status}) => {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  useEffect(() => {
    return () => {
      reset('password');
    };
  }, []);

  const submit = (e) => {
    e.preventDefault();

    post(route('login'));
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

        {status && (
          <div className="mb-4 font-medium text-sm text-green-600">{status}</div>
        )}

        <div>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={data.email}
            className="mt-1 block w-full"
            autoComplete="username"
            onChange={(e) => setData('email', e.target.value)}
          />
          <Form.Text className="text-danger">{errors.email}</Form.Text>
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

        <div className="block mt-4">
          <Form.Check
            type="checkbox"
            label="Remember me"
            name="remember"
            checked={data.remember}
            onChange={(e) => setData('remember', e.target.checked)}
          />
        </div>

        <div className="flex items-center justify-end mt-4">
            <Link href="/register" className="link-info text-center">
                Not Registered? Click here to sign-up!
            </Link>

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

export default Login;
