import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import axios from "axios";
import { useRef, useState,useEffect } from "react";

import Pusher from 'pusher-js';


import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import AnimateModal from "@/Components/AnimateModal";
import DashboardCard from "@/Components/DashboardCard";
import { router } from "@inertiajs/react";
import { Button } from "react-bootstrap";
import Modal from "@/Components/Modal";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";
import Footer from "@/Components/Footer";
import List from "@mui/material/List";
import { useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import SecondaryButton from "@/Components/SecondaryButton";
import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton";
import { Transition } from "@headlessui/react";
export default function Dashboard({
    auth,
    baskIcon,
    orderItems,
    wishlistItems,
    wishlistAmount,
    flash
}) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const [confirmingUpdateForm, setConfirmingUpdate] = useState(false);
    const passwordInput = useRef();

    const currentPasswordInput = useRef();

    useEffect(() => {



        if (!flash.message == "") {

            toastr.success(flash.message);
        }





    }, [flash.message]);

    const updatePassword = (e) => {
        e.preventDefault();

        put(route("password.update"), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset("password", "password_confirmation");
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset("current_password");
                    currentPasswordInput.current.focus();
                }
            },
        });
    };
    const {
        data,
        setData,
        post,
        put,
        reset,
        processing,
        recentlySuccessful,
        delete: destroy,
        errors,
    } = useForm({
        itemId: null, //custom hoook so we can delete the wishlistitem
        password: "",
        current_password: "",

        password_confirmation: "",
    });
    const submit = (e) => {
        e.preventDefault();
        post(route("wishlist.remove"));
    };

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const confirmUserDeletionUpdate = () => {
        setConfirmingUpdate(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route("profile.destroy"), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        reset();
    };

    const closeModalUpdateAccount = () => {
        setConfirmingUpdate(false);

        reset();
    };
    const orderItemsList =
        orderItems.length > 0 ? (
            orderItems.map((orderItem) => (
                <div style={{ backgroundColor: "#212529" }}>
                    <h4
                        style={{
                            fontSize: "1.5rem",
                        }}
                        className="h2basket"
                    >
                        {orderItem.products.productname}
                    </h4>

                    <p>
                        Tracking Code:{" "}
                        <a
                            href={`/orderTrack/${orderItem.orders.trackingcode}/${orderItem.productid}`}
                            class="text-blue-500 hover:text-blue-700"
                            style={{}}
                        >
                            {orderItem.orders.trackingcode}
                        </a>
                    </p>
                    <p>Quantity: {orderItem.quantity} </p>
                    <p>Total Price: {orderItem.totalprice} </p>

                    <p
                        style={{
                            fontSize: "10px",

                            color: "grey",
                            paddingBottom: "1rem",
                        }}
                    >
                        {new Date(orderItem.created_at).toLocaleDateString()}
                    </p>
                    <div className="line"></div>
                </div>
            ))
        ) : (
            <p style={{ textAlign: "center" }}>No orders yet</p>
        );

    const wishlistItemsList =
        wishlistItems.length > 0 ? (
            wishlistItems.map((wishlistItem) => (
                <form onSubmit={submit}>
                    <div style={{ backgroundColor: "#212529" }}>
                        <h4
                            style={{
                                fontSize: "1.5rem",
                            }}
                            className="h2basket"
                        >
                            {wishlistItem.products.productname}
                        </h4>
                        <p>Price: {wishlistItem.products.price} </p>
                        <p>
                            Stock left: {wishlistItem.products.stockquantity}{" "}
                        </p>
                        <a
                            class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                            href={`viewProduct/${wishlistItem.productid}`}
                        >
                            View item
                        </a>
                        <p>
                            <button
                                class="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                                data-value="someValue"
                                onClick={(e) => {
                                    setData({
                                        itemId: wishlistItem.wishlistid,
                                    });
                                    submit();
                                }}
                            >
                                Remove
                            </button>
                        </p>
                        <p
                            style={{
                                fontSize: "10px",

                                color: "grey",
                                paddingBottom: "1rem",
                            }}
                        >
                            {new Date(
                                wishlistItem.created_at
                            ).toLocaleDateString()}
                        </p>
                        <div className="line"></div>
                    </div>
                </form>
            ))
        ) : (
            <p style={{ textAlign: "center" }}>Nothing in your wishlist</p>
        );

    return (
        <>
            <AnimateModal auth={auth} baskIcon={baskIcon}>
                <div className="dashboard-groups">
                    <div className="dashboard-container">
                        <DashboardCard cardName="My orders">
                            <List
                                sx={{
                                    width: "100%",
                                    maxWidth: 560,
                                    bgcolor: "#212529",

                                    overflow: "auto",
                                    maxHeight: 200,
                                }}
                                subheader={<li />}
                            >
                                {orderItemsList}
                            </List>
                        </DashboardCard>
                        <DashboardCard cardName="My account">
                            <div style={{}}>
                                <Link
                                    href={route("updateAccount")}
                                    className="text-white btn btn-dark"
                                    style={{
                                        justifyContent: "flex-start",
                                        width: "100%",
                                        textAlign: "left",
                                        marginBottom: "1rem",
                                    }}
                                >
                                    Personal information
                                </Link>

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
                                    Change your password
                                </Button>
                                <Link
                                    href={route("logout")}
                                    className="text-warning btn btn-dark"
                                    style={{
                                        justifyContent: "flex-start",
                                        width: "100%",
                                        textAlign: "left",
                                        marginBottom: "1rem",
                                    }}
                                >
                                    Logout
                                </Link>
                                <Button
                                    onClick={confirmUserDeletion}
                                    className="text-danger btn btn-dark"
                                    style={{
                                        justifyContent: "flex-start",
                                        width: "100%",
                                        textAlign: "left",
                                        marginBottom: "1rem",
                                    }}
                                >
                                    Delete account
                                </Button>
                            </div>
                        </DashboardCard>
                        <Modal
                            show={confirmingUpdateForm}
                            onClose={closeModalUpdateAccount}
                            style={{}}
                        >
                            <div
                                style={{
                                    padding: "3rem",
                                    backgroundColor: "#212529",
                                }}
                            >
                                <header>
                                    <h2 className="text-lg font-medium text-white">
                                        Update Password
                                    </h2>

                                    <p className="mt-1 text-sm text-white">
                                        Ensure your account is using a long,
                                        random password to stay secure.
                                    </p>
                                </header>

                                <form
                                    onSubmit={updatePassword}
                                    className="mt-6 space-y-6"
                                >
                                    <div>
                                        <InputLabel
                                            htmlFor="current_password"
                                            value="Current Password"
                                            className="text-white"
                                        />

                                        <TextInput
                                            id="current_password"
                                            ref={currentPasswordInput}
                                            value={data.current_password}
                                            onChange={(e) =>
                                                setData(
                                                    "current_password",
                                                    e.target.value
                                                )
                                            }
                                            type="password"
                                            className="mt-1 block w-full"
                                            autoComplete="current-password"
                                        />

                                        <InputError
                                            message={errors.current_password}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div>
                                        <InputLabel
                                            htmlFor="password"
                                            value="New Password"
                                            className="text-white"
                                        />

                                        <TextInput
                                            id="password"
                                            ref={passwordInput}
                                            value={data.password}
                                            onChange={(e) =>
                                                setData(
                                                    "password",
                                                    e.target.value
                                                )
                                            }
                                            type="password"
                                            className="mt-1 block w-full"
                                            autoComplete="new-password"
                                        />

                                        <InputError
                                            message={errors.password}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div>
                                        <InputLabel
                                            htmlFor="password_confirmation"
                                            value="Confirm Password"
                                            className="text-white"
                                        />

                                        <TextInput
                                            id="password_confirmation"
                                            value={data.password_confirmation}
                                            onChange={(e) =>
                                                setData(
                                                    "password_confirmation",
                                                    e.target.value
                                                )
                                            }
                                            type="password"
                                            className="mt-1 block w-full"
                                            autoComplete="new-password"
                                        />

                                        <InputError
                                            message={
                                                errors.password_confirmation
                                            }
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <PrimaryButton disabled={processing}>
                                            Save
                                        </PrimaryButton>
                                        <Button
                                            className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                                            onClick={closeModalUpdateAccount}
                                        >
                                            Cancel
                                        </Button>
                                        <Transition
                                            show={recentlySuccessful}
                                            enter="transition ease-in-out"
                                            enterFrom="opacity-0"
                                            leave="transition ease-in-out"
                                            leaveTo="opacity-0"
                                        >
                                            <p className="text-sm text-white">
                                                Saved.
                                            </p>
                                        </Transition>
                                    </div>
                                </form>
                            </div>
                        </Modal>
                    </div>
                    <div className="dashboard-container">
                        <DashboardCard
                            cardName="Wishlist"
                            wish={wishlistAmount}
                            wishlistAmount={wishlistAmount}
                        >
                            {" "}
                            <List
                                style={{}}
                                sx={{
                                    width: "100%",
                                    maxWidth: 560,
                                    bgcolor: "#212529",

                                    overflow: "auto",
                                    maxHeight: 200,
                                }}
                                subheader={<li />}
                            >
                                {" "}
                                {wishlistItemsList}
                            </List>
                        </DashboardCard>

                        <DashboardCard cardName="Additional services">
                            {/* add tracking tracking seervice for bikes, repair service,  */}

                            <Link
                                href={route("repairBooking")}
                                className="text-white btn btn-dark"
                                style={{
                                    justifyContent: "flex-start",
                                    width: "100%",
                                    textAlign: "left",
                                    marginBottom: "1rem",
                                }}
                            >
                                Repair service
                            </Link>
                            <Link
                                className="text-white btn btn-dark"
                                style={{
                                    justifyContent: "flex-start",
                                    width: "100%",
                                    textAlign: "left",
                                    marginBottom: "1rem",
                                }}
                            >
                                Report a problem
                            </Link>
                        </DashboardCard>
                    </div>
                </div>
                <Footer  />
                <Modal show={confirmingUserDeletion} onClose={closeModal}>
                    <form onSubmit={deleteUser} className="p-6 bg-dark">
                        <h2 className="text-lg font-medium text-white">
                            Are you sure you want to delete your account?
                        </h2>

                        <p className="mt-1 text-sm text-white">
                            Once your account is deleted, all of its resources
                            and data will be permanently deleted. Please enter
                            your password to confirm you would like to
                            permanently delete your account.
                        </p>

                        <div className="mt-6 flex justify-center">
                            <InputLabel
                                htmlFor="password"
                                value="Password"
                                className="sr-only"
                            />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                ref={passwordInput}
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                className="mt-1 block w-3/4 "
                                isFocused
                                placeholder="Password"
                            />

                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-6 flex justify-end">
                            <SecondaryButton onClick={closeModal}>
                                Cancel
                            </SecondaryButton>

                            <DangerButton
                                className="ms-3"
                                disabled={processing}
                            >
                                Delete Account
                            </DangerButton>
                        </div>
                    </form>
                </Modal>
            </AnimateModal>
        </>
    );
}
