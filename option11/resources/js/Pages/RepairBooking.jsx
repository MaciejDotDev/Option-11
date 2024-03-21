import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import NavBar from "@/Components/NavBar";
import AnimateModal from '@/Components/AnimateModal';

const RepairBooking = ({auth}) => {
    return (
        <div>
            {/* Navigation */}
           <NavBar   auth= {auth}/>

            {/* Main content */}
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <h2 className="text-center">Repair Booking</h2>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="userName" className="form-label">Name</label>
                                <input type="text" className="form-control" id="userName" placeholder="Enter your name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="userEmail" className="form-label">Email</label>
                                <input type="email" className="form-control" id="userEmail" placeholder="Enter your email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="userAddress" className="form-label">Address</label>
                                <input type="text" className="form-control" id="userAddress" placeholder="Enter your address" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="repairType" className="form-label">Repair Type</label>
                                <select className="form-select" id="repairType">
                                    <option selected>General Maintenance</option>
                                    <option value="1">Flat Tire</option>
                                    <option value="2">Brake Repair</option>
                                    <option value="3">Gear Adjustment</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit Booking</button>
                        </form>
                    </div>
                </div>
            </div>

            <footer className="container py-5 spacing">
                <div className="row">
                    <div className="col-12 col-md">
                        <small className="d-block mb-3 text-muted">&copy; 2023</small>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default RepairBooking;
