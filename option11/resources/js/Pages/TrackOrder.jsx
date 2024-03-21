import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import NavBar from "@/Components/NavBar";
import AnimateModal from '@/Components/AnimateModal';
const TrackOrder = ({ auth }) => {
    return (
        <div>
            {/* Navigation */}
            <NavBar auth={auth} />

        
        </div>
    );
}

export default TrackOrder;
