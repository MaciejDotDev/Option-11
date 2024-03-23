import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm, Link } from "@inertiajs/react";
import { Container, Form, Button } from "react-bootstrap";

export default function ResetPassword({ token, email }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("password.store"));
    };

    return (
        <Container
            className="d-flex align-items-center justify-content-center "
            style={{ minHeight: "100vh" }}
        >
            <Form
                className="p-5 rounded shadow-sm bg-dark text-light"
                onSubmit={submit}
            >
                <Head title="Log in" />

                <h2 className="pt-4 mb-4 text-center h2">
                    Reset your password
                </h2>

                {status && (
                    <div className="mb-4 font-medium text-sm text-green-600">
                        {status}
                    </div>
                )}

                <div>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                    />
                    <Form.Text className="text-danger">
                        {errors.email}
                    </Form.Text>
                </div>

                <div className="mt-4">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={data.password}
                        autoComplete="current-password"
                        onChange={(e) => setData("password", e.target.value)}
                    />
                </div>
                <div className="mt-4">
                    <Form.Label>Confirm your password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                    />
                    <Form.Text className="text-danger">
                        {errors.password}
                    </Form.Text>
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
}
