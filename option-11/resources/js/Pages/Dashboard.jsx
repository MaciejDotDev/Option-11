import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import axios from "axios";
import AnimateModal from "@/Components/AnimateModal";
import DashboardCard from "@/Components/DashboardCard";
import { router } from "@inertiajs/react";

import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";
import Footer from "@/Components/Footer";
import List from "@mui/material/List";
import { useForm } from "@inertiajs/react";
export default function Dashboard({
    auth,
    baskIcon,
    orderItems,
    wishlistItems,
    wishlistAmount,
}) {
    const handleDeleteConfirmation = (e) => { // not needed yer
        if (window.confirm("Are you sure you wish to delete your account?")) {
            this.onCancel(item);
        } else {
            e.preventDefault();
        }
    };

    const { data, setData, post, processing, errors, reset } = useForm({
        itemId: null, //custom hoook so we can delete the wishlistitem
    });
    const submit = (e) => {
        e.preventDefault();
        post(route("wishlist.remove"));
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
                        <a   class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href={`bike/${wishlistItem.productid}`}>View item</a>
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

                                <Link
                                    href={route("addresses")}
                                    className="text-white btn btn-dark"
                                    style={{
                                        justifyContent: "flex-start",
                                        width: "100%",
                                        textAlign: "left",
                                        marginBottom: "1rem",
                                    }}
                                >
                                    Manage my addresses
                                </Link>
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
                                <Link
                                    href={route("logout")}
                                    className="text-danger btn btn-dark"
                                    style={{
                                        justifyContent: "flex-start",
                                        width: "100%",
                                        textAlign: "left",
                                        marginBottom: "1rem",
                                    }}
                                >
                                    Delete account
                                </Link>
                            </div>
                        </DashboardCard>
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
                                Check part compatability
                            </Link>
                        </DashboardCard>
                    </div>
                </div>
                <Footer />
            </AnimateModal>
        </>
    );
}
