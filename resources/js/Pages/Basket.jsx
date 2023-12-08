import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import { Head, Link } from "@inertiajs/react";
import React, { Fragment } from "react";
import NavBar from "@/Components/NavBar";
export default function Basket({ auth, basket }) {
    return (
        <div>
            <NavBar auth={auth} />

            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Dashboard
                    </h2>
                }
            >
                <Fragment>
                    <table>
                        <thead>
                            <th>Bike Name |</th>
                            <th>Price |</th>
                        </thead>
                        <tbody>
                            {basket.map((baskets) => (
                                <tr>
                                    <td> {baskets.userid} </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Fragment>
            </AuthenticatedLayout>
        </div>
    );
}
