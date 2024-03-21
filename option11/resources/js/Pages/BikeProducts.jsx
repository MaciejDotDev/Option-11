// resources/js/pages/BikeProducts.jsx


import { InertiaLink } from '@inertiajs/inertia-react';

import Bike from '../components/Bike';

import React, { useState } from "react";
import { AnimatePresence } from 'framer-motion';
import NavBar from "@/Components/NavBar";
import Login from '@/Pages/Auth/Login';
import AnimateModal from '@/Components/AnimateModal';

const BikeProducts = ({ auth, bikes }) => {
  
  return (
    <div>
       <AnimateModal auth={auth} >
     
  

      <Bike bikes={bikes} auth={auth} />

     

      <InertiaLink className="text-white" href={route('basket')}>Go to Basket</InertiaLink>
      </AnimateModal>
    </div>
  );
};

export default BikeProducts;