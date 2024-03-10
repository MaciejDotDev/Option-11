import { useForm } from "@inertiajs/react";
import React, { useState } from "react";
import InputError from "@/Components/InputError";
import { usePage } from "@inertiajs/react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { InertiaLink } from "@inertiajs/inertia-react";

const Accessory = ({ accessories, auth, openModal, filter, priceFilter }) => {
    const { flash } = usePage().props;
    const { data, setData, post, processing, errors, reset } = useForm({
        accessoryid_hidden: "",
        quantity: "",
    });

    const [selectedAccessory, setSelectedAccessory] = useState("");
    const [accessoryQuantities, setAccessoryQuantities] = useState({});

    const submit = (e) => {
        e.preventDefault();
        post("/addBasketAccessory", {
            ...data,
            quantity: accessoryQuantities[data.accessoryid_hidden],
        });
    };

    const onClickPreventDefault = (e) => {
        openModal();
        e.preventDefault();
    };

    const handleQuantityChange = (accessoryId, quantity) => {
        setAccessoryQuantities({
            ...accessoryQuantities,
            [accessoryId]: quantity,
        });
        setData("quantity", quantity);
    };

    const navigateToIndividualProduct = (productname) => {
        // Add logic to navigate to the "IndividualProduct" page with the selected productname
    };

    // Filter accessories based on selected options
    const filteredAccessories = accessories.filter((accessory) => {
        const categoryFilter =
            filter === "All Accessories" || accessory.category === filter;
        const priceFilterCondition =
            priceFilter === "All Prices" ||
            (accessory.price >= parseInt(priceFilter.split("-")[0], 10) &&
                accessory.price <= parseInt(priceFilter.split("-")[1], 10));

        return categoryFilter && priceFilterCondition;
    });

    // Array that will be used to store only unique accessories based on the product name.
    const distinctAccessories = [
        ...new Map(
            filteredAccessories.map((item) => [item.productname, item])
        ).values(),
    ];
    const accessoryList = distinctAccessories.map((accessory) => (
        <Col
            key={accessory.accessoryid}
            md={6}
            className="col-lg-4 col-md-6 mb-4"
        >
            <Card
                className={`text-center ${selectedAccessory === accessory.accessoryid
                    ? "selected-accessory"
                    : ""
                    }`}
                onClick={() => {
                    setSelectedAccessory(accessory.accessoryid);
                    setData("accessoryid_hidden", accessory.accessoryid);
                }}
            >
                <Card.Img variant="top" src={accessory.imageURL} />
                <Card.Body>
                    <Card.Title className="h4">
                        {accessory.productname}
                    </Card.Title>
                    <Card.Text>{accessory.description}</Card.Text>
                    <Card.Text>
                        <strong>Price:</strong> £{accessory.price}
                    </Card.Text>
                    <Card.Text>
                        <strong>Category:</strong> {accessory.category}
                    </Card.Text>
                    <Card.Text>
                        <strong>Size:</strong> View Details for size info
                    </Card.Text>
                    <Card.Text>
                        <strong>Colour:</strong> {accessory.colour}
                    </Card.Text>
                    <div className="form-group">
                        <label htmlFor={`quantity_${accessory.accessoryid}`}>
                            Quantity
                        </label>
                        <input
                            id={`quantity_${accessory.accessoryid}`}
                            className="form-control"
                            min="0"
                            type="number"
                            value={accessoryQuantities[accessory.accessoryid]}
                            name={`quantity_${accessory.accessoryid}`}
                            onChange={(e) =>
                                handleQuantityChange(
                                    accessory.accessoryid,
                                    parseInt(e.target.value)
                                )
                            }
                        />
                        <InputError
                            message={errors.quantity}
                            className="mt-2"
                        />
                        {selectedAccessory === accessory.accessoryid && (
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
                        onClick={() =>
                            navigateToIndividualProduct(accessory.productname)
                        }
                    >
                        View Details
                    </InertiaLink>
                </Card.Footer>
            </Card>
        </Col>
    ));

    return (
        <form onSubmit={submit}>
            <Container className=" mt-14">
                <Row>{accessoryList}</Row>
            </Container>
        </form>
    );
};

export default Accessory;
