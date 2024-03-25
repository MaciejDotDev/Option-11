import { useForm } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import InputError from "@/Components/InputError";
import { usePage } from "@inertiajs/react";
import { Card, Button, Container, Row } from "react-bootstrap";
import { InertiaLink } from "@inertiajs/inertia-react";
import axios from "axios";
const BikePart = ({ filter, priceFilter }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/api/productsparts");
                setSearchResults(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    // Apply filter based on the selected option
    const filteredBikeParts = searchResults.filter((part) => {
        const categoryFilter =
            filter === "All Parts" || part.category === filter;
        const priceFilterCondition =
            priceFilter === "All Prices" ||
            (part.products.price >= parseInt(priceFilter.split("-")[0], 10) &&
                part.products.price <= parseInt(priceFilter.split("-")[1], 10));

        const searchFilter = part.products.productname
            .toLowerCase()
            .includes(searchQuery.toLowerCase()); // Filter based on search query
        return categoryFilter && priceFilterCondition && searchFilter;
    });

    const bikePartList = filteredBikeParts.map((part) => (
        <div
            key={part.bikepartsid}
            className="col-lg-4 col-md-6 mb-4"

        >
            <Card>
                <Card.Img variant="top" src={part.products.imageURL} />
                <Card.Body>
                    <h5 className="text-center card-title h4">
                        {part.products.productname}
                    </h5>

                    <p className="card-text">
                        <strong>Price:</strong> £{part.products.price}
                    </p>
                </Card.Body>
                <Card.Footer className=" flex gap-3">
                    {/* {auth.user ? (
                        <Button
                            type="submit"
                            className="btn btn-dark text-dark"
                        >
                            Add to basket
                        </Button>
                    ) : (
                        <Button
                            type="submit"
                            onClick={onClickPreventDefault}
                            className="btn btn-dark text-dark"
                        >
                            Add to basket
                        </Button>
                    )} */}
                    <a
                        // href={route("productDetails", { id: bike.bikeid })}
                        href={`bikepart/${part.productid}`}
                        className="btn btn-outline-primary"
                    >
                        View Details
                    </a>
                </Card.Footer>
            </Card>
        </div>
    ));

    return (
        <Container className="mt-8">
            <Row className="mt-4 flex justify-center mb-4">
                <input
                    type="text"
                    className="form-control w-25"
                    placeholder="Search bike parts..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </Row>
            <Row>{bikePartList}</Row>
        </Container>
    );
};

export default BikePart;
