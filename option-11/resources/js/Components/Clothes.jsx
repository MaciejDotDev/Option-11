import React, { useState, useEffect } from "react";
import { useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import { usePage } from "@inertiajs/react";
import { Card } from "react-bootstrap";
import { InertiaLink } from "@inertiajs/inertia-react";
import axios from 'axios';

const Clothes = ({ clothes, auth, openModal, filter, priceFilter }) => {



    // State to store the search query input from the user.
    const [searchQuery, setSearchQuery] = useState("");

    // Will handle updating the search query
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };
    const [searchResults, setSearchResults] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/clothingsearch');
                setSearchResults(response.data);



            } catch (error) {
                console.error('Error fetching data:', error);

            }
        };

        fetchData();
    }, []);



    // Apply filter based on the selected option: category, price, and/or search query
    const filteredClothes = searchResults.filter((clothing) => {
        const categoryFilter =
            filter === "All Clothes" || clothing.category === filter;
        const priceFilterCondition =
            priceFilter === "All Prices" ||
            (clothing.products.price >=
                parseInt(priceFilter.split("-")[0], 10) &&
                clothing.products.price <=
                parseInt(priceFilter.split("-")[1], 10));
        const searchFilter = clothing.products.productname.toLowerCase().includes(searchQuery.toLowerCase()); // Filter based on search query
        return categoryFilter && priceFilterCondition && searchFilter;
    });




    const clothesList = filteredClothes.map((clothing) => (
        <div
            key={clothing.clothingid}
            className={`col-lg-4 col-md-6 mb-4`}
            onClick={() => {
                setSelectedClothes(clothing.products.productid);
                setData("product_hidden", clothing.products.productid);
            }}
        >
            <Card>
                <Card.Img variant="top" src={clothing.products.imageURL} />
                <Card.Body>
                    <Card.Title className="text-center h4">
                        {clothing.products.productname}
                    </Card.Title>

                    <Card.Text>
                        <strong>Price:</strong> £{clothing.products.price}
                    </Card.Text>

                </Card.Body>
                <Card.Footer className=" flex gap-3">
                    {/* {auth.user ? (
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
                    )} */}
                     <a
                        // href={route("productDetails", { id: bike.bikeid })}
                        href={`clothing/${clothing.productid}`}
                        className="btn btn-outline-primary"
                    >
                        View Details
                    </a>
                </Card.Footer>
            </Card>
        </div>
    ));

    return (
        <div>

                <div className="container">
                    <div className="row mt-4 flex justify-center">
                        {/* Search input field user can use to query */}
                        <input
                            type="text"
                            className="form-control w-25"
                            placeholder="Search clothes..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                    </div>
                    <div className="row mt-4">{clothesList}</div>
                </div>


        </div>
    );
};

export default Clothes;
