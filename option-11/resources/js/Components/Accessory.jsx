import { useForm } from "@inertiajs/react";
import React, { useState } from "react";
import InputError from "@/Components/InputError";
import { usePage } from "@inertiajs/react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const Accessory = ({ accessories, auth, openModal }) => {
    const { flash } = usePage().props;
    const { data, setData, post, processing, errors, reset } = useForm({
        accessoryid_hidden: "",
        quantity: "",
    });

    const [selectedAccessory, setSelectedAccessory] = useState("");

    const submit = (e) => {
        e.preventDefault();
        post("/addBasketAccessory", data);
    };

    const onClickPreventDefault = (e) => {
        openModal();
        e.preventDefault();
    };

    const accessoryList = accessories.map((accessory) => (
        <Col key={accessory.accessoryid} md={6} className="mb-4">
            <Card
                className={`text-center ${
                    selectedAccessory === accessory.accessoryid
                        ? "selected-accessory"
                        : ""
                }`}
                onClick={() => {
                    setSelectedAccessory(accessory.accessoryid);
                    setData("accessoryid_hidden", accessory.accessoryid);
                }}
            >
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
                        <strong>Size:</strong> {accessory.size}
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
                            value={data.quantity}
                            name="quantity"
                            onChange={(e) =>
                                setData("quantity", e.target.value)
                            }
                        />
                        <InputError
                            message={errors.quantity}
                            className="mt-2"
                        />
                    </div>
                </Card.Body>
                <Card.Footer>
                    {auth.user ? (
                        <Button type="submit" variant="dark">
                            Add to basket
                        </Button>
                    ) : (
                        <Button
                            type="submit"
                            onClick={onClickPreventDefault}
                            variant="dark"
                        >
                            Add to basket
                        </Button>
                    )}
                </Card.Footer>
            </Card>
        </Col>
    ));

    return (
        <form onSubmit={submit}>
            <Container>
                <Row>{accessoryList}</Row>
            </Container>
        </form>
    );
};

export default Accessory;
