import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import NavBar from "@/Components/NavBar";
import { HSquareFill } from "react-bootstrap-icons";
import { Link } from "@inertiajs/react";
import AdminNavbar from '@/Pages/AdminNavbar';
import DashboardCard from "@/Components/DashboardCard";
const RepairBooking = ({ auth }) => {
    return (
        <div>
            <AdminNavbar/>

            <div class="adminDashboard-container">
       
            <DashboardCard cardName="Notifications">
                    <div className="mt-1 d-flex justify-content-evenly">
                            <div className="flex-col space-y-3 d-flex">
                                <Link
                                    href={route("logout")}
                                    className="px-4 py-2 text-center text-white bg-yellow-500 rounded-md "
                                >
                                    Logout
                                </Link>
                                <Link
                                    href={route("updateAccount")}
                                    className="px-4 py-2 text-center text-white bg-blue-500 rounded-md "
                                >
                                    Update Email
                                </Link>

                                <Link
                                    href={route("updateAccount")}
                                    className="px-4 py-2 text-center text-white bg-blue-500 rounded-md "
                                >
                                    Update address
                                </Link>
                            </div>
                        </div>
                    </DashboardCard>

                    <DashboardCard cardName="Logs">
                        <Link
                            href={route("logout")}
                            className="px-4 py-2 text-center text-white bg-yellow-500 rounded-md "
                        >
                            Logout
                        </Link>
                        <Link
                            href={route("updateAccount")}
                            className="px-4 py-2 text-center text-white bg-blue-500 rounded-md "
                        >
                            Update Account
                        </Link>
                        
                    </DashboardCard>

              

                    </div>
          

        
        </div>
    );
};

export default RepairBooking;
