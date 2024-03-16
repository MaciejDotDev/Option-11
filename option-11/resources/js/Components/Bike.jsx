import { useForm } from "@inertiajs/react";
import React, { useState } from "react";
import InputError from "@/Components/InputError";
import { usePage } from "@inertiajs/react";
import { Card, Button } from "react-bootstrap";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";
const Bike = ({ bikes, auth, openModal, filter, priceFilter }) => {
    const { flash } = usePage().props;

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

        return categoryFilter && priceFilterCondition;
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

    const [successMessage, setSuccessMessage] = useState("");

    const addToWishlist = (bikeId) => {
        Inertia.post(
            "/wishlist/add",
            { itemId: bikeId }
        ).then(() => setSuccessMessage("Item successfully added to wishlist."));
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
            {/* <Card style={{ width: "28rem" }}> */}
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
                        <strong>Stock Quantity:</strong>{" "}
                        {bike.products.stockquantity}
                    </Card.Text>
                    <Card.Text>
                        <strong>Category:</strong> {bike.category}
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
  <p
                                    style={{ color: "green" }}
                                    className="block font-medium text-sm text-gray-700"
                                >
                                    {successMessage}
                                </p>
                        {selectedBikeId === bike.bikeid && (
                            <div>
                                {" "}
                                <p
                                    style={{ color: "green" }}
                                    className="block font-medium text-sm text-gray-700"
                                >
                                    {flash.message}
                                </p>

                                <InputError
                                    message={errors.stock}
                                    className="mt-2"
                                />
                                <InputError
                                    message={errors.quantity}
                                    className="mt-2"
                                />
                            </div>
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
                    {auth.user ? (
                        <button
                            type="button"
                            onClick={() => addToWishlist(bike.productid)}
                            className="btn btn-dark text-dark"
                        >
                            Add to Wishlist
                        </button>
                    ) : (
                        <button
                            type="button"
                            onClick={onClickPreventDefault}
                            className="btn btn-dark text-dark"
                        >
                            Add to Wishlist
                        </button>
                    )}

                    <InertiaLink
                        // href={route("productDetails", { id: bike.bikeid })}
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
            <form onSubmit={submit}>
                <div className="container">
                    <div className="row mt-8">{bikeList}</div>
                </div>
            </form>
        </div>
    );
};

export default Bike;
