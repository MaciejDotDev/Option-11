import { useForm } from "@inertiajs/react";
import React, { useState } from "react";
import InputError from "@/Components/InputError";
import { usePage } from "@inertiajs/react";
import { Card, Button, Container, Row } from "react-bootstrap";
import { InertiaLink } from "@inertiajs/inertia-react";

const BikePart = ({ bikePart, auth, openModal, filter, priceFilter }) => {
    const { flash } = usePage().props;

    const { data, setData, post, processing, errors, reset } = useForm({
        bikepartid_hidden: "",
        quantity: "",
    });

    const [selectedBikePartId, setSelectedBikePartId] = useState("");
    const [bikePartQuantities, setBikePartQuantities] = useState({});

    const submit = (e) => {
        e.preventDefault();
        post("/addBasketPart", {
            ...data,
            quantity: bikePartQuantities[data.bikepartid_hidden],
        });
    };

    const onClickPreventDefault = (e) => {
        openModal();
        e.preventDefault();
    };

    const handleQuantityChange = (bikePartId, quantity) => {
        setBikePartQuantities({
            ...bikePartQuantities,
            [bikePartId]: quantity,
        });
        setData("quantity", quantity);
    };

    // Apply filter based on the selected option
    const filteredBikeParts = bikePart.filter((part) => {
        const categoryFilter =
            filter === "All Parts" || part.category === filter;
        const priceFilterCondition =
            priceFilter === "All Prices" ||
            (part.price >= parseInt(priceFilter.split("-")[0], 10) &&
                part.price <= parseInt(priceFilter.split("-")[1], 10));

        return categoryFilter && priceFilterCondition;
    });

    const bikePartList = filteredBikeParts.map((part) => (
        <div
            key={part.bikepartsid}
            className="col-lg-4 col-md-6 mb-4"
            onClick={() => {
                setSelectedBikePartId(part.products.productid);
                setData("bikepartid_hidden", part.products.productid);
            }}
        >
            <Card>
                <Card.Img variant="top" src={part.imageURL} />
                <Card.Body>
                    <h5 className="text-center card-title h4">
                        {part.productname}
                    </h5>
                    <p className="card-text">{part.description}</p>
                    <p className="card-text">
                        <strong>Price:</strong> £{part.products.price}
                    </p>
                    <p className="card-text">
                        <strong>Category:</strong> {part.category}
                    </p>
                    <p className="card-text">
                        <strong>Colour:</strong> {part.color}
                    </p>
                    <p className="card-text">
                        <strong>Size:</strong> {part.size}
                    </p>
                    <p className="card-text">
                        <strong>Compatible with:</strong>{" "}
                        {part.CompatibleWithType}
                    </p>
                    <div className="form-group">
                        <label htmlFor={`quantity_${part.bikepartsid}`}>
                            Quantity
                        </label>
                        <input
                            id={`quantity_${part.products.bikepartsid}`}
                            className="form-control"
                            min="0"
                            type="number"
                            value={bikePartQuantities[part.bikepartsid]}
                            name={`quantity_${part.bikepartsid}`}
                            onChange={(e) =>
                                handleQuantityChange(
                                    part.bikepartsid,
                                    parseInt(e.target.value)
                                )
                            }
                        />
                        <InputError
                            message={errors.quantity}
                            className="mt-2"
                        />
                        {selectedBikePartId === part.bikepartsid && (
                            <p className="text-black">{flash.message}</p>
                        )}
                    </div>
                </Card.Body>
                <Card.Footer className=" flex gap-3">
                    {auth.user ? (
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
                    )}
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
        <form onSubmit={submit}>
            <Container className=" mt-8">
                <Row>{bikePartList}</Row>
            </Container>
        </form>
    );
};

export default BikePart;
