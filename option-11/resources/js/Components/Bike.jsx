import { useForm } from "@inertiajs/react";
import React, { useState } from "react";
import InputError from "@/Components/InputError";
import { usePage } from "@inertiajs/react";
import { Card, Button } from "react-bootstrap";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";

const Bike = ({ bikes, auth, openModal, filter, priceFilter }) => {
    const { flash } = usePage().props;
    const { data, setData, post, processing, errors, reset } = useForm({
        product_hidden: "",
        quantity: "",
    });
    const [bikeQuantities, setBikeQuantities] = useState({});
    const [selectedBikeId, setSelectedBikeId] = useState("");
    const [searchQuery, setSearchQuery] = useState(""); // State to store search query

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value); // Update search query state
    };

    // Filter bikes based on category, price, and search query
    const filteredBikes = bikes.filter((bike) => {
        const categoryFilter =
            filter === "All Bikes" || bike.category === filter;
        const priceFilterCondition =
            priceFilter === "All Prices" ||
            (bike.products.price >= parseInt(priceFilter.split("-")[0], 10) &&
                bike.products.price <= parseInt(priceFilter.split("-")[1], 10));
        const searchFilter = bike.products.productname.toLowerCase().includes(searchQuery.toLowerCase()); // Filter based on search query
        return categoryFilter && priceFilterCondition && searchFilter;
    });

    const submit = (e) => {
        e.preventDefault();
        post("/addBasket", {
            ...data,
            quantity: bikeQuantities[data.bikeid_hidden],
        });
    };

    const onClickPreventDefault = (e) => {
        openModal();
        e.preventDefault();
    };

    const handleQuantityChange = (bikeId, quantity) => {
        setBikeQuantities({ ...bikeQuantities, [bikeId]: quantity });
        setData("quantity", quantity);
    };

    const addToWishlist = (bikeId) => {
        Inertia.post("/wishlist/add", { itemId: bikeId }).then(() =>
            setSuccessMessage("Item successfully added to wishlist.")
        );
    };

    // Render list of bikes
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
                        <strong>Stock Quantity:</strong>{" "}
                        {bike.products.stockquantity}
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
                    </div>
                    {selectedBikeId === bike.bikeid && (
                        <div>
                            <p style={{ color: "green" }} className="block font-medium text-sm text-gray-700">
                                {flash.message}
                            </p>
                            <InputError message={errors.stock} className="mt-2" />
                            <InputError message={errors.quantity} className="mt-2" />
                        </div>
                    )}
                </Card.Body>
                <Card.Footer className=" flex gap-3">
                    {auth.user ? (
                        <Button type="submit" variant="outline-dark">
                            Add to basket
                        </Button>
                    ) : (
                        <Button type="submit" onClick={onClickPreventDefault} variant="outline-dark">
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
                    <div className="row mt-4">{bikeList}</div>
                </div>
            </form>
        </div>
    );
};

export default Bike;
