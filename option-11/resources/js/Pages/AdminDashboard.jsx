import { InertiaLink } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import axios from "axios";
import { Link } from "@inertiajs/react";
import { Button } from 'react-bootstrap';
import AdminNavbar from "@/Pages/AdminNavbar";
import DashboardCard from "@/Components/DashboardCard";
import { useState, useEffect,useRef } from "react";
import List from "@mui/material/List";
import Modal from '@/Components/Modal';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import { useForm } from "@inertiajs/react";
import PrimaryButton from '@/Components/PrimaryButton';
import { Transition } from '@headlessui/react'
const AdminDashboard = ({ auth, notifications }) => {
    const { data, setData, post,put, reset, processing, recentlySuccessful, delete: destroy, errors } = useForm({
        itemId: null, //custom hoook so we can delete the wishlistitem
        password: '',
        current_password: '',

        password_confirmation: '',
    });
    const [confirmingUpdateForm, setConfirmingUpdate] = useState(false);
    const currentPasswordInput = useRef();
    const passwordInput = useRef();

    const confirmUserDeletionUpdate = () => {
        setConfirmingUpdate(true);
    };


    const updatePassword = (e) => {
        e.preventDefault();

        put(route('admin.password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current.focus();
                }
            },
        });
    };
    const [notification, setNotification] = useState([]);

    const [logs, setLogs] = useState([]);
    const closeModalUpdateAccount = () => {
        setConfirmingUpdate(false);

        reset();
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/adminNotifications");
                const data1 = await response.json();
                setNotification(data1);
            } catch (error) {
                console.error("Error getting notification:", error);
            }

            try {
                const response = await fetch("/api/adminLogs");
                const logsData = await response.json();
                setLogs(logsData);
            } catch (error) {
                console.error("Error getting logs:", error);
            }
        };

        fetchData();

        const intervalId = setInterval(fetchData, 5000);

        return () => clearInterval(intervalId);
    }, []); ///The useEffect hook has an empty dependency array ([]), which means it will only run once when the component mounts and will not re-run when any state or props change. This ensures that the interval is set up only once.

    const countNot = () => {
        //onnly shows the icon if there is an item in the basket
        if (notification.length > 0) {
            return (
                <div
                    className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                    style={{
                        width: "1.5rem",
                        height: "1.5rem",
                        position: "absolute",
                        display: "inline-flex",
                        transform: "translateY(-300%)",
                    }}
                >
                    <span style={{ color: "#fff", fontSize: "1.2rem" }}>
                        {notification.length}
                    </span>
                </div>
            );
        }
    };

    const countLog = () => {
        //onnly shows the icon if there is an item in the basket
        if (logs.length > 0) {
            return (
                <div
                    className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                    style={{
                        width: "1.5rem",
                        height: "1.5rem",
                        position: "absolute",
                        // top: "150px",  // Adjust the top value as needed
                        // left: "820px",
                        display: "inline-flex",
                        transform: "translateY(-300%)", // Adjust the right value as needed
                    }}
                >
                    <span style={{ color: "#fff", fontSize: "1.2rem" }}>
                        {logs.length}
                    </span>
                </div>
            );
        }
    };

    return (
        <div>
            <AdminNavbar />

            <div class="adminDashboard-container">
                <DashboardCard
                    style={{ display: "inline-flex" }}
                    cardName="Notifications  "
                >
                    {countNot()}
                    <List
                        sx={{
                            width: "100%",
                            maxWidth: 2000,
                            bgcolor: "#212529",

                            overflow: "auto",
                            maxHeight: 200,
                        }}
                        subheader={<li />}
                    >
                        {notification.length > 0 ? (
                            notification.map((orderItem, index) => (
                                <div
                                    style={{ backgroundColor: "#212529" }}
                                    key={index}
                                >
                                    <h4
                                        style={{
                                            fontSize: "1.5rem",
                                        }}
                                        className="h2basket"
                                    >
                                        {orderItem.notification_title}
                                    </h4>

                                    <p>
                                        <strong>Type:</strong>{" "}
                                        {orderItem.notification_type}
                                    </p>
                                    <p
                                        style={{
                                            wordWrap: "break-word",
                                            overflowWrap: "break-word",
                                        }}
                                    >
                                        <strong>description: </strong>
                                        {
                                            orderItem.notification_description
                                        }{" "}
                                    </p>

                                    <p
                                        style={{
                                            fontSize: "10px",

                                            color: "grey",
                                            paddingBottom: "1rem",
                                        }}
                                    >
                                        {new Date(
                                            orderItem.created_at
                                        ).toLocaleDateString()}
                                    </p>
                                    <div className="line"></div>
                                </div>
                            ))
                        ) : (
                            <p style={{ textAlign: "center" }}>
                                You have not notifications yet
                            </p>
                        )}
                    </List>
                </DashboardCard>
                <DashboardCard cardName="Logs">
                    {countLog()}
                    <List
                        sx={{
                            width: "100%",
                            maxWidth: 2000,
                            bgcolor: "#212529",

                            overflow: "auto",
                            maxHeight: 200,
                        }}
                        subheader={<li />}
                    >
                        {logs.length > 0 ? (
                            logs.map((orderItem, index) => (
                                <div
                                    style={{ backgroundColor: "#212529" }}
                                    key={index}
                                >
                                    <h4
                                        style={{
                                            fontSize: "1.5rem",
                                        }}
                                        className="h2basket"
                                    >
                                        {orderItem.notification_title}
                                    </h4>

                                    <p>
                                        <strong>Type:</strong>{" "}
                                        {orderItem.notification_type}
                                    </p>
                                    <p
                                        style={{
                                            wordWrap: "break-word",
                                            overflowWrap: "break-word",
                                        }}
                                    >
                                        <strong>description: </strong>
                                        {
                                            orderItem.notification_description
                                        }{" "}
                                    </p>

                                    <p
                                        style={{
                                            fontSize: "10px",

                                            color: "grey",
                                            paddingBottom: "1rem",
                                        }}
                                    >
                                        {new Date(
                                            orderItem.created_at
                                        ).toLocaleDateString()}
                                    </p>
                                    <div className="line"></div>
                                </div>
                            ))
                        ) : (
                            <p style={{ textAlign: "center" }}>
                                You have not logs yet
                            </p>
                        )}
                    </List>
                </DashboardCard>
                <DashboardCard cardName="Settings">
                    <Button

                        onClick={confirmUserDeletionUpdate}
                        className="text-white btn btn-dark"
                        style={{
                            justifyContent: "flex-start",
                            width: "100%",
                            textAlign: "left",
                            marginBottom: "1rem",
                        }}
                    >
                       Change password
                    </Button>
                    <Link
                       href="/adminLogout"
                        className="text-white btn btn-dark"
                        style={{
                            justifyContent: "flex-start",
                            width: "100%",
                            textAlign: "left",
                            marginBottom: "1rem",
                        }}
                    >
                       Log out
                    </Link>


                </DashboardCard>
            </div>

            <Modal show={confirmingUpdateForm} onClose={closeModalUpdateAccount} style={{  }}>
                                <div style={{ padding:"3rem", backgroundColor:"#212529" }}>
                                <header>
                                <h2 className="text-lg font-medium text-white">Update Password</h2>

                                <p className="mt-1 text-sm text-white">
                                    Ensure your account is using a long, random password to stay secure.
                                </p>
            </header>

            <form onSubmit={updatePassword}  className="mt-6 space-y-6">
                <div >
                    <InputLabel htmlFor="current_password" value="Current Password" className="text-white" />

                    <TextInput
                        id="current_password"
                        ref={currentPasswordInput}
                        value={data.current_password}
                        onChange={(e) => setData('current_password', e.target.value)}
                        type="password"
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                    />

                    <InputError message={errors.current_password} className="mt-2"  />
                </div>

                <div>
                    <InputLabel htmlFor="password" value="New Password" className="text-white" />

                    <TextInput
                        id="password"
                        ref={passwordInput}
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        type="password"
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" className="text-white" />

                    <TextInput
                        id="password_confirmation"
                        value={data.password_confirmation}
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        type="password"
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>
                    <Button className="`inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150" onClick={closeModalUpdateAccount}>Cancel</Button>
                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-white">Saved.</p>
                    </Transition>
                </div>

            </form>


                                </div>

                        </Modal>
        </div>
    );
};

export default AdminDashboard;
