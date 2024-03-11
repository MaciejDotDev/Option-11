import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import Dropdown from "@/Components/Dropdown";
import NavBar from "@/Components/NavBar";
import AnimateModal from "@/Components/AnimateModal";
import DashboardCard from "@/Components/DashboardCard";
import Button from "react-bootstrap/Button";

export default function Dashboard({ auth, baskIcon }) {
    const handleDeleteConfirmation = (e) => {
        if (window.confirm("Are you sure you wish to delete your account?")) {
            this.onCancel(item);
        } else {
            e.preventDefault();
        }
    };

    return (
        <>
            <AnimateModal auth={auth} baskIcon={baskIcon}>
                <div className="dashboard-groups">
                    <div className="dashboard-container">
                        <DashboardCard cardName="My orders">
                            <Link
                                href={route("updateAccount")}
                                className="text-white btn btn-dark"
                                style={{
                                    width: "100%",
                                    textAlign: "left",
                                }}
                            >
                                Track my order
                            </Link>

                            <Button
                                href={route("updateAccount")}
                                className="text-white btn btn-dark"
                                style={{
                                    width: "100%",
                                    textAlign: "left",
                                }}
                            >
                                View my orders
                            </Button>
                        </DashboardCard>
                        <DashboardCard cardName="My account">
                            <div style={{}}>
                                <Link
                                    href={route("updateAccount")}
                                    className="text-white btn btn-dark"
                                    style={{
                                        width: "100%",
                                        textAlign: "left",
                                    }}
                                >
                                    Personal information
                                </Link>

                                <Link
                                    href={route("addresses")}
                                    className="text-white btn btn-dark"
                                    style={{
                                        margin: "0.5rem auto",
                                        width: "100%",
                                        textAlign: "left",
                                    }}
                                >
                                    Manage my addresses
                                </Link>
                                <Link
                                    href={route("logout")}
                                    className="text-warning btn btn-dark"
                                    style={{
                                        margin: "0.5rem auto",
                                        width: "100%",
                                        textAlign: "left",
                                    }}
                                >
                                    Logout
                                </Link>
                                <Link
                                    href={route("logout")}
                                    className="text-danger btn btn-dark"
                                    style={{
                                        margin: "0.5rem auto",
                                        width: "100%",
                                        textAlign: "left",
                                    }}
                                >
                                    Delete account
                                </Link>
                            </div>
                        </DashboardCard>
                    </div>
                    <div className="dashboard-container">
                        <DashboardCard cardName="Wishlist"></DashboardCard>

                        <DashboardCard cardName="Additional services">
                            {/* add tracking tracking seervice for bikes, repair service,  */}

                            <Link
                                href={route("updateAccount")}
                                className="text-white btn btn-dark"
                                style={{
                                    width: "100%",
                                    textAlign: "left",
                                }}
                            >
                                Repair service
                            </Link>
                            <Link
                                href={route("updateAccount")}
                                className="text-white btn btn-dark"
                                style={{
                                    width: "100%",
                                    textAlign: "left",
                                }}
                            >
                                Report problem
                            </Link>
                        </DashboardCard>
                    </div>
                </div>
            </AnimateModal>
        </>
    );
}
