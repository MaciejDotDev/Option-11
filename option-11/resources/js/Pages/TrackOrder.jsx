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

            {/* Main content */}
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <h2 className="text-center">Track Your Order</h2>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="orderNumber" className="form-label">Order Number</label>
                                <input type="text" className="form-control" id="orderNumber" placeholder="Enter your order number" />
                            </div>
                            <button type="submit" className="btn btn-primary">Track Order</button>
                        </form>
                    </div>
                </div>

                {/* Order Details Section */}
                <div className="row mt-5 spacing">
                    <div className="col-md-8 mx-auto">
                        <h3 className="text-center">Order Details</h3>
                        {/* Placeholder for order details */}
                        <div id="orderDetails">
                            {/* order details will be added here in later implementation */}
                        </div>
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

export default TrackOrder;
