// Desc: BikeParts page for the user to view all bike parts
//we use react because we are using react components
import React from "react";
//we use inertia link to link to other pages
import { InertiaLink } from '@inertiajs/inertia-react';
//we import the bike component
import Bike from '../components/Bike';
//we import the authenticated layout to use the navbar
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

//we import the navbar component to use the navbar lol
import NavBar from "@/Components/NavBar";

//In react we use a function to create a component which can be a page or a component
//in this case this is a page , so we create a function called BikeParts
//in the page bikeparts we pass in the props auth and bikeparts which we get from the controller, to use in the page

const BikePart = ({ bikePart }) => {

    return (
        <div>
            <NavBar auth={auth} />
            <h1>Bike Parts for Sale</h1>
            {bikeParts.map((bikePart) => (
                <BikePart key={bikePart.id} bikePart={bikePart} />
            ))}
            <InertiaLink href={route('basket')}>Go to Basket</InertiaLink>
        </div>
    );
}

//we export the component so we can use it in other pages
export default BikePart;

