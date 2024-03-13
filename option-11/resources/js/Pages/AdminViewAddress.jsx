import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import NavBar from "@/Components/NavBar";
import { HSquareFill } from "react-bootstrap-icons";
import { Link } from "@inertiajs/react";
import AdminNavbar from '@/Pages/AdminNavbar';
const AdminViewProducts = ({ address }) => {

    const bikePartList = address.map((product) => {
        const date = new Date(product.created_at);
        const date1 = new Date(product.updated_at);

        // Format date using toLocaleDateString and toLocaleTimeString
        const formattedDate = date.toLocaleDateString();
        const formattedTime = date.toLocaleTimeString();
        const formattedDate1 = date1.toLocaleDateString();
        const formattedTime1 = date1.toLocaleTimeString();
        return (

            <tr key={product.addressid}>

            <td scope="row">{product.addressid}</td>
            <td scope="row"><a class="font-medium text-blue-600 dark:text-blue-500 hover:underline" href={route("adminViewUser", { userid: product.userid })}>
            {product.userid}</a></td>
            <td scope="row">{product.postcode}</td>
            <td scope="row">{product.city}</td>
            <td scope="row" className="editDescription">{product.country}</td>
            <td scope="row">{product.street}</td>

            <td scope="row">{formattedDate} {formattedTime}</td>
            <td scope="row">{formattedDate1} {formattedTime1}</td>
            <td scope="row">   <a >


                    <a class="font-medium text-blue-600 dark:text-blue-500 hover:underline" href={route("addressView", { addressid: product.addressid })}>
                    Edit Address
                </a>
                </a></td>



        </tr>
        );




    });

    return (

      <div>  <AdminNavbar/>





            <table class="table table-bordered editProducts" >
                <thead>
                    <tr>

                        <th scope="col">ID</th>
                        <th scope="col">User ID</th>
                        <th scope="col">Post code</th>
                        <th scope="col">City</th>
                        <th scope="col">Country</th>
                        <th scope="col">Streeet</th>
                        <th scope="col">Created at</th>
                        <th scope="col">Updated</th>
                        <th scope="col">Action</th>




                    </tr>
                </thead>
                <tbody>{bikePartList}</tbody>

            </table>
            <a   className="px-4 py-2 text-center text-white bg-blue-500 rounded-md" href="users/export/" >Export</a>
        </div>


    );
};

export default AdminViewProducts;
