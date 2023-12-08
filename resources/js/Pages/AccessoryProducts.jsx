import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import Accessory from "../components/Accessory";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";


import NavBar from "@/Components/NavBar";

const AccessoryProducts = ({ auth, accessories }) => {

    return (
        <div>
            <NavBar auth={auth} />
            <h1>Accessories for Sale</h1>
            {accessories.map((accessory) => (
                <Accessory key={accessory.id} accessory={accessory} />
            ))}
            <InertiaLink href={route('basket')}>Go to Basket</InertiaLink>
        </div>
    );
}

export default AccessoryProducts;
