import { useForm } from "@inertiajs/react";
import React, { useState } from "react";
import InputError from "@/Components/InputError";
import { usePage } from "@inertiajs/react";
import { Card, Button } from "react-bootstrap";
import { InertiaLink } from "@inertiajs/inertia-react";

const Clothes = ({ clothes, auth, openModal, filter, priceFilter }) => {
    // Create a state object to store quantities for each bike
    const [clothQuantities, setClothQuantities] = useState({});

    const { flash } = usePage().props;
    const { data, setData, post, processing, errors, reset } = useForm({
        clothingid_hidden: "",
        quantity: "",
    });

    const [selectedClothes, setSelectedClothes] = useState("");

    // Apply filter based on the selected option
    const filteredClothes = clothes.filter((clothing) => {
        const categoryFilter =
            filter === "All Clothes" || clothing.category === filter;
        const priceFilterCondition =
            priceFilter === "All Prices" ||
            (clothing.price >= parseInt(priceFilter.split("-")[0], 10) &&
                clothing.price <= parseInt(priceFilter.split("-")[1], 10));

        return categoryFilter && priceFilterCondition;
    });

    const submit = (e) => {
        e.preventDefault();
        post("/addBasketClothing", {
            ...data,
            quantity: clothQuantities[data.clothingid_hidden],
        });
    };

    // State object that will store the quantity the user selects for each clothing.
    const handleQuantityChange = (clothingid, quantity) => {
        setClothQuantities({ ...clothQuantities, [clothingid]: quantity });
        setData("quantity", quantity);
    };

    const onClickPreventDefault = (e) => {
        openModal();
        e.preventDefault();
    };

    const clothesList = filteredClothes.map((clothing) => (
        <div
            key={clothing.clothingid}
            className={`col-lg-4 col-md-6 mb-4`}
            onClick={() => {
                setSelectedClothes(clothing.clothingid);
                setData("clothingid_hidden", clothing.clothingid);
            }}
        >
            <Card>
                <Card.Img variant="top" src={clothing.imageURL} />
                <Card.Body>
                    <Card.Title className="text-center h4">
                        {clothing.productname}
                    </Card.Title>
                    <Card.Text>{clothing.description}</Card.Text>
                    <Card.Text>
                        <strong>Price:</strong> £{clothing.price}
                    </Card.Text>
                    <div className="form-group">
                        <label htmlFor={`quantity_${clothing.clothingid}`}>
                            Quantity
                        </label>
                        <input
                            id={`quantity_${clothing.clothingid}`}
                            className="form-control"
                            min="0"
                            type="number"
                            value={clothQuantities[clothing.clothingid]}
                            name={`quantity_${clothing.clothingid}`}
                            onChange={(e) =>
                                handleQuantityChange(
                                    clothing.clothingid,
                                    parseInt(e.target.value)
                                )
                            }
                        />
                        <InputError
                            message={errors.quantity}
                            className="mt-2"
                        />
                        {selectedClothes === clothing.clothingid && (
                            <p className="text-black">{flash.message}</p>
                        )}
                    </div>
                </Card.Body>
                <Card.Footer>
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
                </Card.Footer>
            </Card>
        </div>
    ));

    return (
        <div>
            <form onSubmit={submit}>
                <div className="container">
                    <div className="row mt-14">{clothesList}</div>
                </div>
            </form>
        </div>
    );
};

export default Clothes;
