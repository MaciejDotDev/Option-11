import { useForm } from "@inertiajs/react";
import React, { useState } from "react";
import InputError from "@/Components/InputError";
import { usePage } from "@inertiajs/react";
import { Card, Button, Container, Row } from "react-bootstrap";
import { InertiaLink } from "@inertiajs/inertia-react";

const BikePart = ({ bikePart, auth, openModal, filter, priceFilter }) => {

    const [searchQuery, setSearchQuery] = useState("");
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };







    // Apply filter based on the selected option
    const filteredBikeParts = bikePart.filter((part) => {
        const categoryFilter =
            filter === "All Parts" || part.category === filter;
        const priceFilterCondition =
            priceFilter === "All Prices" ||
            (part.products.price >= parseInt(priceFilter.split("-")[0], 10) &&
                part.products.price <= parseInt(priceFilter.split("-")[1], 10));

        return categoryFilter && priceFilterCondition;
    });

    const bikePartList = filteredBikeParts.map((part) => (
        <div
            key={part.bikepartsid}
            className="col-lg-4 col-md-6 mb-4"
            onClick={() => {
                setSelectedBikePartId(part.products.productid);
                setData("product_hidden", part.products.productid);
            }}
        >
            <Card>
                <Card.Img variant="top" src={part.products.imageURL} />
                <Card.Body>
                    <h5 className="text-center card-title h4">
                        {part.products.productname}
                    </h5>
                    <p className="card-text">{part.products.description}</p>
                    <p className="card-text">
                        <strong>Price:</strong> Â£{part.products.price}
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
                    <InertiaLink
                        // href={route("productDetails", { id: part.bikepartid })}
                        href=""
                        className="btn btn-outline-primary"
                    >
                        View Details
                    </InertiaLink>
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
