import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import RepairKit from "../components/RepairKit";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import NavBar from "@/Components/NavBar";

const RepairKits = ({ auth, repairKits }) => {
    return (
        <div>
            <NavBar auth={auth} />
            <h1>Repair Kits for Sale</h1>
            {repairKits.map((repairKit) => (
                <RepairKit key={repairKit.id} repairKit={repairKit} />
            ))}
            <InertiaLink href={route("basket")}>Go to Basket</InertiaLink>
        </div>
    );
}

export default RepairKits;
