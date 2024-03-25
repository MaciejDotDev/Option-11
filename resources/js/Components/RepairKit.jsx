import { useForm } from "@inertiajs/react";
import React, { useState,useEffect } from "react";
import InputError from "@/Components/InputError";
import { usePage } from "@inertiajs/react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { InertiaLink } from "@inertiajs/inertia-react";
import axios from 'axios';
const RepairKit = ({ filter, priceFilter }) => {
    const { flash } = usePage().props;


    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (e) => {
        // console.log(e)
        setSearchQuery(e.target.value);
    };
    const [searchResults, setSearchResults] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/repairKitsearch');
                setSearchResults(response.data);



            } catch (error) {
                console.error('Error fetching data:', error);

            }
        };

        fetchData();
    }, []);

    // Apply filter based on the selected filter and/or the search query :D
    const filteredRepairKits = searchResults.filter((kit) => {
        const categoryFilter =
            filter === "All Repair Kits" || kit.category === filter;
        const priceFilterCondition =
            priceFilter === "All Prices" ||
            (kit.products.price >= parseInt(priceFilter.split("-")[0], 10) &&
                kit.products.price <= parseInt(priceFilter.split("-")[1], 10));
        const searchFilter = kit.products.productname.toLowerCase().includes(searchQuery.toLowerCase()); // Filter based on search query
        return categoryFilter && priceFilterCondition && searchFilter;
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
                <Card.Img variant="top" src={kit.products.imageURL} />
                <Card.Body>
                    <Card.Title className="h4 text-center">
                        {kit.products.productname}
                    </Card.Title>

                    <Card.Text>
                        <strong>Price:</strong> £{kit.products.price}
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
                        href={`repairkit/${kit.productid}`}
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
                        placeholder="Search repair kits..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                </Row>
                <Row>{repairKitList}</Row>
            </Container>


    );
};

export default RepairKit;
