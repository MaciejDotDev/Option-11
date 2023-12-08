// resources/js/pages/BikeProducts.jsx

import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import Bike from '../components/Bike';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";


import NavBar from "@/Components/NavBar";


const BikeProducts = ({ auth, bikes }) => {

  return (
    <div>
        <NavBar auth={auth} />
      <h1>Bikes for Sale</h1>
      {bikes.map((bike) => (
        <Bike key={bike.id} bike={bike} />
      ))}
      <InertiaLink href={route('basket')}>Go to Basket</InertiaLink>
    </div>
  );
};

export default BikeProducts;
