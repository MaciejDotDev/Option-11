import { InertiaLink } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import axios from 'axios';
import { Link } from "@inertiajs/react";
import AdminNavbar from "@/Pages/AdminNavbar";
import DashboardCard from "@/Components/DashboardCard";
import { useState, useEffect } from "react";
import List from "@mui/material/List";
const AdminDashboard = ({ auth, notifications }) => {
    const [state, setState] = useState("");

    const myArray = [];


    const [data, setData] = useState([]);



    useEffect(() => {

        const fetchData = async () => {
          try {
            const response = await fetch('/api/adminNotifications');
            const data = await response.json();
            setData(data);
          } catch (error) {
            console.error('Error getting notification:', error);
          }
        };


        fetchData();


        const intervalId = setInterval(fetchData, 5000);


        return () => clearInterval(intervalId);
     }, []); ///The useEffect hook has an empty dependency array ([]), which means it will only run once when the component mounts and will not re-run when any state or props change. This ensures that the interval is set up only once.


     const [logs, setLogs] = useState([]);

     useEffect(() => {

        const fetchData = async () => {
          try {
            const response = await fetch('/api/adminLogs');
            const data = await response.json();
            setLogs(data);
          } catch (error) {
            console.error('Error getting logs:', error);
          }
        };


        fetchData();


        const intervalId = setInterval(fetchData, 5000);


        return () => clearInterval(intervalId);
     }, []);


    return (
        <div>
            <AdminNavbar />

            <div class="adminDashboard-container">
                <DashboardCard cardName="Notifications">


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
                        {data.length > 0 ? (
                            data.map((orderItem, index) => (
                                <div style={{ backgroundColor: "#212529" }} key={index}>
                                    <h4
                                        style={{
                                            fontSize: "1.5rem",
                                        }}
                                        className="h2basket"
                                    >
                                        {orderItem.notification_title}
                                    </h4>

                                    <p><strong>Type:</strong> {orderItem.notification_type}</p>
                                     <p style={{ wordWrap: "break-word", overflowWrap: "break-word" }}><strong>description: </strong>{orderItem. notification_description} </p>




                                    <p
                                        style={{
                                            fontSize: "10px",

                                            color: "grey",
                                            paddingBottom:"1rem"
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

export default AdminDashboard;
