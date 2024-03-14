import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import NavBar from "@/Components/NavBar";
import AnimateModal from "@/Components/AnimateModal";
const TrackOrder = ({ auth }) => {
    return (
        <div>
            {/* Navigation */}
            <AnimateModal auth={auth}>

                <div style={{

                    margin: "0 auto",
                 }}>

                </div>
            </AnimateModal>
        </div>
    );
};

export default TrackOrder;
