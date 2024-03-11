import { useForm } from "@inertiajs/react";
import React, { useState } from "react";
import InputError from "@/Components/InputError";
import { usePage } from "@inertiajs/react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { InertiaLink } from "@inertiajs/inertia-react";

const RepairKit = ({ repairKit, auth, openModal, filter, priceFilter }) => {
    const { flash } = usePage().props;

    const { data, setData, post, processing, errors, reset } = useForm({
        product_hidden: "",
        quantity: "",
    });

    const [selectedRepairKitId, setSelectedRepairKitId] = useState("");
    const [repairKitQuantities, setRepairKitQuantities] = useState({});

    const submit = (e) => {
        e.preventDefault();
        post("/addBasketRepairkit", {
            ...data,
            quantity: repairKitQuantities[data.repairkitsid_hidden],
        });
    };

    const onClickPreventDefault = (e) => {
        openModal();
        e.preventDefault();
    };

    const handleQuantityChange = (repairKitId, quantity) => {
        setRepairKitQuantities({
            ...repairKitQuantities,
            [repairKitId]: quantity,
        });
        setData("quantity", quantity);
    };

    // Apply filter based on the selected option
    const filteredRepairKits = repairKit.filter((kit) => {
        const categoryFilter =
            filter === "All Repair Kits" || kit.category === filter;
        const priceFilterCondition =
            priceFilter === "All Prices" ||
            (kit.price >= parseInt(priceFilter.split("-")[0], 10) &&
                kit.price <= parseInt(priceFilter.split("-")[1], 10));

        return categoryFilter && priceFilterCondition;
    });

    const repairKitList = filteredRepairKits.map((kit) => (
        <Col
            key={kit.repairkitsid}
            md={6}
            className={`col-lg-4 col-md-6 mb-4`}
            onClick={() => {
                setSelectedRepairKitId(kit.repairkitsid);
                setData("repairkitsid_hidden", kit.repairkitsid);
            }}
        >
            <Card>
                <Card.Img variant="top" src={kit.imageURL} />
                <Card.Body>
                    <Card.Title className="h4 text-center">
                        {kit.productname}
                    </Card.Title>
                    <Card.Text>{kit.description}</Card.Text>
                    <Card.Text>
                        <strong>Price:</strong> £{kit.price}
                    </Card.Text>
                    <Card.Text>
                        <strong>Category:</strong> {kit.category}
                    </Card.Text>
                    <Card.Text>
                        <strong>Compatible with:</strong>{" "}
                        {kit.CompatibleWithType}
                    </Card.Text>
                    <div className="form-group">
                        <label htmlFor={`quantity_${kit.repairkitsid}`}>
                            Quantity
                        </label>
                        <input
                            id={`quantity_${kit.products.productid}`}
                            className="form-control"
                            min="0"
                            type="number"
                            value={repairKitQuantities[kit.repairkitsid]}
                            name={`quantity_${kit.repairkitsid}`}
                            onChange={(e) =>
                                handleQuantityChange(
                                    kit.repairkitsid,
                                    parseInt(e.target.value)
                                )
                            }
                        />
                        <InputError
                            message={errors.quantity}
                            className="mt-2"
                        />
                        {selectedRepairKitId === kit.repairkitsid && (
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
                        // href={route("productDetails", { id: kit.kitid })}
                        href=""
                        className="btn btn-outline-primary"
                    >
                        View Details
                    </InertiaLink>
                </Card.Footer>
            </Card>
        </Col>
    ));

    return (
        <form onSubmit={submit}>
            <Container className=" mt-8">
                <Row>{repairKitList}</Row>
            </Container>
        </form>
    );
};

export default RepairKit;
