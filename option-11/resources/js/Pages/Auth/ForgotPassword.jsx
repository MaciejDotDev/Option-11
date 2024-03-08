import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/react";
import { Container, Form, Button } from "react-bootstrap";
export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <div>
            {" "}
            <Head title="Forgot Password" />
            <Container
                className="d-flex align-items-center justify-content-center "
                style={{ minHeight: "100vh", maxWidth: "30rem" }}
            >
                <Form
                    className="p-5 rounded shadow-sm bg-dark text-light"
                    onSubmit={submit}
                >
                    
                    <div className="mb-4 text-sm text-white-600">
                        Forgot your password? No problem. Just let us know your
                        email address and we will email you a password reset
                        link that will allow you to choose a new one.
                    </div>

                    {status && (
                        <div className="mb-4 font-medium text-sm text-green-600">
                            {status}
                        </div>
                    )}

                    <Form.Control
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        isFocused={true}
                        onChange={(e) => setData("email", e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />

                    <div className="flex items-center justify-end mt-4">
                        <PrimaryButton className="ms-4" disabled={processing}>
                            Email Password Reset Link
                        </PrimaryButton>
                    </div>
                </Form>
            </Container>
        </div>
    );
}
