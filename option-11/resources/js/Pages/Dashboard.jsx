import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import Dropdown from "@/Components/Dropdown";
import NavBar from "@/Components/NavBar";
import AnimateModal from "@/Components/AnimateModal";
import DashboardCard from "@/Components/DashboardCard";
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
                        <DashboardCard cardName="My orders"></DashboardCard>
                        <DashboardCard cardName="My account">
                            <div
                                style={{
                                    width: "10rem",
                                    height: "1rem",
                                    position: "relative",
                                    // Adjust the top value as needed
                                    left: "12px", // Adjust the right value as needed
                                    bottom: "24px",
                                }}
                            >
                                <Link
                                    href={route("updateAccount")}
                                    className="text-white btn btn-dark"
                                >
                                    Personal information
                                </Link>

                                <Link
                                    href={route("updateAccount")}
                                    className="text-white btn btn-dark"
                                >
                                    Manage my addresses
                                </Link>
                                <Link
                                    href={route("logout")}
                                    className="btn btn-outline-warning"
                                >
                                    Logout
                                </Link>
                                <Link
                                    href={route("logout")}
                                    className="btn btn-outline-danger"
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
                        </DashboardCard>
                    </div>
                </div>
            </AnimateModal>
        </>
    );
}
