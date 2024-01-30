
import { InertiaLink } from "@inertiajs/inertia-react";
import Accessory from "../components/Accessory";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useState } from "react";
import { AnimatePresence } from 'framer-motion';
import NavBar from "@/Components/NavBar";
import Login from '@/Pages/Auth/Login';
import AnimateModal from '@/Components/AnimateModal';
const AccessoryProducts = ({ auth, accessories,baskIcon }) => {
  

    return (
        <div>
            <AnimateModal auth={auth} baskIcon={baskIcon}>
          
          
            <Accessory accessories={accessories} auth={auth}/>

            <InertiaLink className="text-white" href={route('basket')}>Go to Basket</InertiaLink>
            </AnimateModal>
        </div>
    );
}

export default AccessoryProducts;