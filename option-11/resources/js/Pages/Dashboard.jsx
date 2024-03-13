import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import Dropdown from "@/Components/Dropdown";
import NavBar from "@/Components/NavBar";
import AnimateModal from "@/Components/AnimateModal";
import DashboardCard from "@/Components/DashboardCard";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
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
                        <DashboardCard cardName="My orders" style={{}}>
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
                                <div style={{   backgroundColor: "#212529", }}>
                                <h5 className="h2basket">
                                   Product
                                </h5>
                                <p>Tracking Code: </p>
                                <p>Total Price: </p>

                                <p style={{
                                    fontSize:"10px",

                                    color: "grey"
                                 }}>Total Price: </p>

                                </div>
                                <div style={{   backgroundColor: "#212529", }}>
                                <h5 className="h2basket">
                                   Product
                                </h5>
                                <p>Tracking Code: </p>
                                <p>Total Price: </p>

                                <p style={{
                                    fontSize:"10px",

                                    color: "grey"
                                 }}>Total Price: </p>

                                </div>
                                <div style={{   backgroundColor: "#212529", }}>
                                <h5 className="h2basket">
                                   Product
                                </h5>
                                <p>Tracking Code: </p>
                                <p>Total Price: </p>

                                <p style={{
                                    fontSize:"10px",

                                    color: "grey"
                                 }}>Total Price: </p>

                                </div>
                                <div style={{   backgroundColor: "#212529", }}>
                                <h5 className="h2basket">
                                   Product
                                </h5>
                                <p>Tracking Code: </p>
                                <p>Total Price: </p>

                                <p style={{
                                    fontSize:"10px",

                                    color: "grey"
                                 }}>Total Price: </p>

                                </div>
                                <div style={{   backgroundColor: "#212529", }}>
                                <h5 className="h2basket">
                                   Product
                                </h5>
                                <p>Tracking Code: </p>
                                <p>Total Price: </p>

                                <p style={{
                                    fontSize:"10px",

                                    color: "grey"
                                 }}>Total Price: </p>

                                </div>
                                <div style={{   backgroundColor: "#212529", }}>
                                <h5 className="h2basket">
                                   Product
                                </h5>
                                <p>Tracking Code: </p>
                                <p>Total Price: </p>

                                <p style={{
                                    fontSize:"10px",

                                    color: "grey"
                                 }}>Total Price: </p>

                                </div>
                                <div style={{   backgroundColor: "#212529", }}>
                                <h5 className="h2basket">
                                   Product
                                </h5>
                                <p>Tracking Code: </p>
                                <p>Total Price: </p>

                                <p style={{
                                    fontSize:"10px",

                                    color: "grey"
                                 }}>Total Price: </p>

                                </div>
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
                        <DashboardCard cardName="Wishlist"> <List style={{

                         }}
                                sx={{
                                    width: "100%",
                                    maxWidth: 560,
                                    bgcolor: "#212529",

                                    overflow: "auto",
                                    maxHeight: 200,

                                }}
                                subheader={<li />}
                            >   <div style={{   backgroundColor: "#212529", }}>
                            <h5 className="h2basket">
                               Product
                            </h5>
                            <p>Tracking Code: </p>
                            <p>Total Price: </p>

                            <p style={{
                                fontSize:"10px",

                                color: "grey"
                             }}>Total Price: </p>

                            </div>
                            <div style={{   backgroundColor: "#212529", }}>
                            <h5 className="h2basket">
                               Product
                            </h5>
                            <p>Tracking Code: </p>
                            <p>Total Price: </p>

                            <p style={{
                                fontSize:"10px",

                                color: "grey"
                             }}>Total Price: </p>

                            </div>
                            <div style={{   backgroundColor: "#212529", }}>
                            <h5 className="h2basket">
                               Product
                            </h5>
                            <p>Tracking Code: </p>
                            <p>Total Price: </p>

                            <p style={{
                                fontSize:"10px",

                                color: "grey"
                             }}>Total Price: </p>

                            </div>
                            <div style={{   backgroundColor: "#212529", }}>
                            <h5 className="h2basket">
                               Product
                            </h5>
                            <p>Tracking Code: </p>
                            <p>Total Price: </p>

                            <p style={{
                                fontSize:"10px",

                                color: "grey"
                             }}>Total Price: </p>

                            </div>
                            <div style={{   backgroundColor: "#212529", }}>
                            <h5 className="h2basket">
                               Product
                            </h5>
                            <p>Tracking Code: </p>
                            <p>Total Price: </p>

                            <p style={{
                                fontSize:"10px",

                                color: "grey"
                             }}>Total Price: </p>

                            </div>
                            <div style={{   backgroundColor: "#212529", }}>
                            <h5 className="h2basket">
                               Product
                            </h5>
                            <p>Tracking Code: </p>
                            <p>Total Price: </p>

                            <p style={{
                                fontSize:"10px",

                                color: "grey"
                             }}>Total Price: </p>

                            </div>
                            <div style={{   backgroundColor: "#212529", }}>
                            <h5 className="h2basket">
                               Product
                            </h5>
                            <p>Tracking Code: </p>
                            <p>Total Price: </p>

                            <p style={{
                                fontSize:"10px",

                                color: "grey"
                             }}>Total Price: </p>

                            </div>   </List>
                            </DashboardCard>

                        <DashboardCard cardName="Additional services">
                            {/* add tracking tracking seervice for bikes, repair service,  */}

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
                                Repair service
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
            </AnimateModal>
        </>
    );
}
