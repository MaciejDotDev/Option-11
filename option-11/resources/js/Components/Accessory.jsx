import React, { useState, useEffect } from "react";
import { useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import { usePage } from "@inertiajs/react";
import { Card, Container, Row, Col } from "react-bootstrap";

import axios from 'axios';

const Accessory = ({  filter, priceFilter }) => {


    const [selectedAccessory, setSelectedAccessory] = useState("");
    const [accessoryQuantities, setAccessoryQuantities] = useState({});
    // State to store the search query input from the user.
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (e) => {
        // console.log(e)
        setSearchQuery(e.target.value);
    };


    const [searchResults, setSearchResults] = useState([]);





    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/accessorieSearch');
                setSearchResults(response.data);



            } catch (error) {
                console.error('Error fetching data:', error);

            }
        };

        fetchData();
    }, []);

    // Filter accessories based on selected options: filters and search query
    const filteredAccessories = searchResults.filter((accessory) => {
        const categoryFilter =
            filter === "All Accessories" || accessory.category === filter;
        const priceFilterCondition =
            priceFilter === "All Prices" ||
            (accessory.products.price >=
                parseInt(priceFilter.split("-")[0], 10) &&
                accessory.products.price <=
                parseInt(priceFilter.split("-")[1], 10));
        const searchFilter = accessory.products.productname.toLowerCase().includes(searchQuery.toLowerCase()); // Filter based on search query
        return categoryFilter && priceFilterCondition && searchFilter;
    });


    // Array that will be used to store only unique accessories based on the product name.

    const accessoryList = filteredAccessories.map((accessory) => (
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
                <Card.Img variant="top" src={accessory.products.imageURL} />
                <Card.Body>
                    <Card.Title className="h4">
                        {accessory.products.productname}
                    </Card.Title>

                    <Card.Text>
                        <strong>Price:</strong> £{accessory.products.price}
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
                        href={`/accessory/${accessory.productid}`} // Update the URL with the correct accessory ID
                        className="btn btn-outline-primary"
                    >
                        View Details
                    </a>

                </Card.Footer>
            </Card>
        </Col>
    ));

    return (

            <Container className="mt-8">
                <Row className="mt-4 flex justify-center mb-4">
                    <input
                        type="text"
                        className="form-control w-25"
                        placeholder="Search accessories..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                </Row>
                <Row>{accessoryList}</Row>
            </Container>

    );
};

export default Accessory;
