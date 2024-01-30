import React, { useState } from "react";
import { AnimatePresence } from 'framer-motion';
import { InertiaLink } from "@inertiajs/inertia-react";
import RepairKit from "../components/RepairKit";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import NavBar from "@/Components/NavBar";
import AnimateModal from '@/Components/AnimateModal';
const RepairKits = ({ auth, repairKit,baskIcon }) => {
    return (
        <div>
             <AnimateModal auth={auth} baskIcon={baskIcon}> 
            <RepairKit repairKit={repairKit} auth={auth} />

            <InertiaLink className="text-white" href={route("basket")}>Go to Basket</InertiaLink>
            </AnimateModal>
        </div>
    );
}

export default RepairKits;