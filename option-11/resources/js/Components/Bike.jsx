import React, { useState } from "react";
import { Form, Button, FormControl } from "react-bootstrap";
import { useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import { usePage } from "@inertiajs/react";
import { Card } from "react-bootstrap";
import { InertiaLink } from "@inertiajs/inertia-react";

const Bike = ({ bikes, auth, openModal, filter, priceFilter }) => {
    const { flash } = usePage().props;
    const [searchQuery, setSearchQuery] = useState("");

    // Create a state object to store quantities for each bike
    const [bikeQuantities, setBikeQuantities] = useState({});

    const { data, setData, post, processing, errors, reset } = useForm({
        product_hidden: "",
        quantity: "",
    });

    // Apply filter based on the selected option
    const filteredBikes = bikes.filter((bike) => {
        const categoryFilter =
            filter === "All Bikes" || bike.category === filter;
        const priceFilterCondition =
            priceFilter === "All Prices" ||
            (bike.products.price >= parseInt(priceFilter.split("-")[0], 10) &&
                bike.products.price <= parseInt(priceFilter.split("-")[1], 10));

        return categoryFilter && priceFilterCondition && (bike.products.productname.toLowerCase().includes(searchQuery.toLowerCase()) || bike.products.description.toLowerCase().includes(searchQuery.toLowerCase()));
    });

    // Will modify the quantity selected for each bike based on ID.
    const [selectedBikeId, setSelectedBikeId] = useState("");

    const submit = (e) => {
        e.preventDefault();
        post("/addBasket", {
            ...data,
            quantity: bikeQuantities[data.bikeid_hidden],
        });
        // console.log(data.quantity);
    };

    const onClickPreventDefault = (e) => {
        openModal();
        e.preventDefault();
    };

    // State object that will store the quantity the user selects for each bike.
    const handleQuantityChange = (bikeId, quantity) => {
        // console.log(quantity);
        // console.log(typeof quantity);
        setBikeQuantities({ ...bikeQuantities, [bikeId]: quantity });
        setData("quantity", quantity);
    };

    const bikeList = filteredBikes.map((bike) => (
        <div
            key={bike.bikeid}
            className="col-lg-4 col-md-6 mb-4"
            onClick={() => {
                setSelectedBikeId(bike.products.productid);
                setData("product_hidden", bike.products.productid);
            }}
        >
            <Card>
                <Card.Img variant="top" src={bike.products.imageURL} />
                <Card.Body>
                    <Card.Title className="text-center h4">
                        {bike.products.productname}
                    </Card.Title>
                    <Card.Text>{bike.products.description}</Card.Text>
                    <Card.Text>
                        <strong>Price:</strong> £{bike.products.price}
                    </Card.Text>
                    <Card.Text>
                        <strong>Category:</strong> {bike.category}
                    </Card.Text>
                    <Card.Text>
                        <strong>Stock Quantity:</strong> {bike.products.stockquantity}
                    </Card.Text>
                    <div className="form-group">
                        <label htmlFor={`quantity_${bike.productid}`}>
                            Quantity
                        </label>
                        <input
                            id={`quantity_${bike.products.productid}`}
                            className="form-control"
                            min="0"
                            type="number"
                            value={bikeQuantities[bike.bikeid]}
                            name={`quantity_${bike.bikeid}`}
                            onChange={(e) =>
                                handleQuantityChange(
                                    bike.bikeid,
                                    parseInt(e.target.value)
                                )
                            }
                        />
                        <InputError
                            message={errors.quantity}
                            className="mt-2"
                        />
                        {selectedBikeId === bike.bikeid && (
                            <p className="text-black">{flash.message}</p>
                        )}
                    </div>
                </Card.Body>
                <Card.Footer className=" flex gap-3">
                    {auth.user ? (
                        <Button type="submit" variant="outline-dark">
                            Add to basket
                        </Button>
                    ) : (
                        <Button
                            type="submit"
                            onClick={onClickPreventDefault}
                            variant="outline-dark"
                        >
                            Add to basket
                        </Button>
                    )}
                    <InertiaLink
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
        <div>
            <Form onSubmit={submit} className="flex justify-center">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-2 mb-2 w-25"
                    aria-label="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </Form>
            <div className="container">
                <div className="row mt-8">{bikeList}</div>
            </div>
        </div>
    );
};

export default Bike;
