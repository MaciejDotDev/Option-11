import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";
import React, { Fragment } from "react";
import NavBar from "@/Components/NavBar";
export default function Basket({ bikes, auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        price_hidden: "",
        bikeid_hidden: "",
        quantity: "",
       
        
    });

    const submit = (e) => {
        e.preventDefault();
        post("/addBasket", data);
    };

    return (

        <div>

<NavBar auth={auth} />

<Fragment>
            <form onSubmit={submit}>
                <table style={{ color: "white" }}>
                    <thead>
                        <th>Bike Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        {bikes.map((bike) => (
                            <tr key={bike.bikeid}>
                                <td>{bike.productname}</td>
                                <td>{bike.description}</td>
                                <td style={{ color: "white" }}>{bike.price}</td>
                                <td>
                                    <input
                                        id="quantity"
                                        min="0"
                                        style={{
                                            padding: "1px",
                                            color: "black",
                                        }}
                                        type="number"
                                        name="quantity"
                                        onChange={(e) =>
                                            setData(
                                                "quantity",
                                                e.target.value
                                            )
                                        }
                                    />
                                </td>
                                <td>
                                    {/* Hidden inputs for bikeid and price */}
                                    <input
                                        id="price_hidden"
                                        min="0"
                                        style={{
                                            padding: "1px",
                                            color: "black",
                                        }}
                                        
                                        type="number"
                                        name="price_hidden"
                                        onChange={(e) =>
                                            setData(
                                                "price_hidden",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <input
                                        id="bikeid_hidden"
                                        min="0"
                                        style={{
                                            padding: "1px",
                                            color: "black",
                                        }}
                                        
                                        type="number"
                                        name="bikeid_hidden"
                                        onChange={(e) =>
                                            setData(
                                                "bikeid_hidden",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <button type="submit">
                                        Add to basket
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </form>
        </Fragment>
        </div>

       
    );
}