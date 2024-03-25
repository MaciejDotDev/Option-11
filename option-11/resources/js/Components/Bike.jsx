import React, { useState,useEffect } from "react";
import { useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import { usePage } from "@inertiajs/react";
import { Card, Button } from "react-bootstrap";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";
import axios from 'axios';
const Bike = ({ filter, priceFilter }) => {

     // State to store search query

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value); // Update search query state
    };



    // Apply fliter bikes based on category, price, and search query




    const [searchResults, setSearchResults] = useState([]);


    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/bikesearch');
                setSearchResults(response.data);



            } catch (error) {
                console.error('Error fetching data:', error);

            }
        };

        fetchData();
    }, []);

    const filteredBikes = searchResults.filter((bike) => {
        const categoryFilter =
            filter === "All Bikes" || bike.category === filter;
        const priceFilterCondition =
            priceFilter === "All Prices" ||
            (bike.products.price >= parseInt(priceFilter.split("-")[0], 10) &&
                bike.products.price <= parseInt(priceFilter.split("-")[1], 10));
        const searchFilter = bike.products.productname.toLowerCase().includes(searchQuery.toLowerCase()); // Filter based on search query
        return categoryFilter && priceFilterCondition && searchFilter;
    });




    const bikeList = filteredBikes.map((bike) => (

        <div
            key={bike.bikeid}
            className="col-lg-4 col-md-6 mb-4"

        >
            {/* <Card style={{ width: "28rem" }}> */}
            <Card>
                <Card.Img variant="top" src={bike.products.imageURL} />
                <Card.Body>
                    <Card.Title className="text-center h4">
                        {bike.products.productname}
                    </Card.Title>

                    <Card.Text>
                        <strong>Price:</strong> £{bike.products.price}
                    </Card.Text>

                </Card.Body>
                <Card.Footer className=" flex gap-3">

                    <a
                        // href={route("productDetails", { id: bike.bikeid })}
                        href={`bike/${bike.productid}`}

                        className="btn btn-outline-primary"
                    >
                        View Details
                    </a>
                </Card.Footer>
            </Card>
        </div>
    ));

    return (
        <div>

                <div className="row mt-4 flex justify-center">
                    {/* Search input field */}
                    <input
                        type="text"
                        className="form-control w-25"
                        placeholder="Search bikes..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />

                </div>

                <div className="container">
                    <div className="row mt-8">{bikeList}</div>
                </div>

        </div>
    );
};

export default Bike;
