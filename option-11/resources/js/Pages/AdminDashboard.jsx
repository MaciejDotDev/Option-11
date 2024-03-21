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


    const [logs, setLogs] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
          try {
            const response = await fetch('/api/adminNotifications');
            const data1 = await response.json();
            setData(data1);
          } catch (error) {
            console.error('Error getting notification:', error);
          }

          try {
            const response = await fetch('/api/adminLogs');
            const logsData = await response.json();
            setLogs(logsData);
          } catch (error) {
            console.error('Error getting logs:', error);
          }
        };


        fetchData();


        const intervalId = setInterval(fetchData, 5000);


        return () => clearInterval(intervalId);
     }, []); ///The useEffect hook has an empty dependency array ([]), which means it will only run once when the component mounts and will not re-run when any state or props change. This ensures that the interval is set up only once.

     const countNot = () => {
        //onnly shows the icon if there is an item in the basket
        if (logs.length > 0) {
            return (
                <div
                    className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                    style={{
                        width: "1.5rem",
                        height: "1.5rem",
                        position: "absolute",
                        display:"inline-flex",
                        transform: "translateY(-300%)"
                    }}
                >
                    <span style={{ color: "#fff", fontSize: "1.2rem" }}>
                        {logs.length}
                    </span>
                </div>
            );
        }
    };



    const countLog = () => {
        //onnly shows the icon if there is an item in the basket
        if (data.length > 0) {
            return (
                <div
                    className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                    style={{
                        width: "1.5rem",
                        height: "1.5rem",
                        position: "absolute",
                       // top: "150px",  // Adjust the top value as needed
                       // left: "820px",
                        display:"inline-flex",
                        transform: "translateY(-300%)",// Adjust the right value as needed
                    }}
                >
                    <span style={{ color: "#fff", fontSize: "1.2rem" }}>
                        {data.length}
                    </span>
                </div>
            );
        }
    };



    return (
        <div>
            <AdminNavbar />

            <div class="adminDashboard-container" >
                <DashboardCard style={{ display:"inline-flex"}} cardName="Notifications  ">

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
            </div>
        </div>
    );
};

export default AdminDashboard;
