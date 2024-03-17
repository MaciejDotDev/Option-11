import React from "react";

import AdminNavbar from '@/Pages/AdminNavbar';
const AdminEditProducts = ({ products }) => {

    const bikePartList = products.map((product) => {
        const date = new Date(product.created_at);
        const date1 = new Date(product.updated_at);

        // Format date using toLocaleDateString and toLocaleTimeString
        const formattedDate = date.toLocaleDateString();
        const formattedTime = date.toLocaleTimeString();
        const formattedDate1 = date1.toLocaleDateString();
        const formattedTime1 = date1.toLocaleTimeString();
        return (

            <tr key={product.productid}>

            <td scope="row">{product.productid}</td>
            <td scope="row">{product.productname}</td>
            <td scope="row">{product.price}</td>
            <td scope="row" className="editDescription">{product.description}</td>
            <td scope="row">{product.products.name}</td>
            <td scope="row">{formattedDate} {formattedTime}</td>
            <td scope="row">{formattedDate1} {formattedTime1}</td>
            <td scope="row">   <a href={route("editProducts", { productid: product.productid  })}>
                    Edit Product
                </a></td>



        </tr>
        );




    });

    return (

      <div>  <AdminNavbar/>




<h2 className="text-light h2 text-center pt-3">Products</h2>
            <table class="table table-bordered editProducts" >
                <thead>
                    <tr>

                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Description</th>
                        <th scope="col">Category</th>
                        <th scope="col">Created</th>
                        <th scope="col">Updated</th>
                        <th scope="col">Action</th>




                    </tr>
                </thead>
                <tbody>{bikePartList}</tbody>

            </table>

        </div>


    );
};

export default AdminEditProducts;
