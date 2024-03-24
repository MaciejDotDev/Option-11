import React, { useState, useEffect } from "react";
import { useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import { usePage } from "@inertiajs/react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { InertiaLink } from "@inertiajs/inertia-react";
import {
    Container,
    Row,
    Col,
    Button,
    Image,
    Form,
    Modal,
} from "react-bootstrap";
import ReviewProducts from "@/Pages/ReviewProducts";
import clothesSGuide from "../../assets/clothes-size.png";
import axios from 'axios';
import toastr from "toastr";
import AnimateModal from "@/Components/AnimateModal";
import { Link } from "@mui/icons-material";

export default function IndividualBikePage({
    product,
    auth,
    reviews,
    starsAvg,
    commentsCount,
    openModal,
}) {
    const { flash } = usePage().props;
    const { data, setData, post, errors } = useForm({
        product_hidden: product.productid,
        quantity: "",
    });

    // State for compatible products , this will be used to store the compatible products
    const [compatibleProducts, setCompatibleProducts] = useState([]);

    // Function to fetch compatible products
    const fetchCompatibleProducts = (productId) => {
        //we use axios to fetch the compatible products from our web.php route
        axios.get(`/api/bikecheck/${productId}`)
            .then(response => {
                //  we set the compatible products to the response data which is an array of products
                setCompatibleProducts(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching compatible products:', error);
            });
    };

    // We use useEffect to call the fetchCompatibleProducts function when the product id changes
    useEffect(() => {
        fetchCompatibleProducts(product.productid);
    }, [product.productid]);

    // This is the state we are using to control the visibility of the size guide modal.
    const [showSizeGuideModal, setShowSizeGuideModal] = useState(false);

    const handleSizeChange = (e) => {
        const { value } = e.target;
        setData("size", value);
    };




    const [placeHolderImage, setPlaceHolderImage] = useState(null);

    useEffect(() => {
        // because reeact doesn't  allow static imports we're importing them dybamically and then setting it to the placeholder state
        import(`../../../public/${product.products.imageURL}`).then(
            (module) => {
                setPlaceHolderImage(module.default);
            }
        );
    }, [product.products.imageURL]); // ensuring that the useeffect occurs when the change of the value is heppning

    const submit = (e) => {
        e.preventDefault();
        post("/addBasket", data);
    };

    // Function below will be used to open the size guide modal.
    const handleSizeGuideModalOpen = () => {
        setShowSizeGuideModal(true);
    };

    // This one will close the size guide modal.
    const handleSizeGuideModalClose = () => {
        setShowSizeGuideModal(false);
    };
    const onClickPreventDefault = (e) => {
        openModal();
        e.preventDefault();
    };
    const [wishlist, setWishList] = useState("");

    const [wishlistError, setWishlistError] = useState("");

    const addToWishlist = (productid) => {
        axios.post('/api/wishlist/add/', { productid: productid })
            .then(response => {
                setWishList(response.data.message);
                if (response.data.error) {

                    setWishlistError(response.data.error);
                }

            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <>
            <Container className="mt-4" style={{ paddingBottom: "3rem" }}>
                <Row className="justify-content-center align-items-center gap-16">
                    <Col md={4}>
                        <Image
                            src={placeHolderImage}
                            alt={product.products.productname}
                            className="img-fluid mb-4 rounded"
                            rounded
                            thumbnail
                        />
                    </Col>
                    <Col md={3} className="text-white text-left">
                        <h1 className="text-center text-white fs-2 mb-10">
                            {product.products.productname}
                        </h1>

                        <p className="mb-4">
                            <strong>Price:</strong> £{product.products.price}
                        </p>
                        <p className="mb-4">
                            <strong>Category:</strong> {product.category}
                        </p>
                        <p className="mb-4">
                            <strong>Colour:</strong> {product.colour}
                        </p>
                        <p className="mb-4">
                            <strong>Stock Quantity:</strong>{" "}
                            {product.products.stockquantity}
                        </p>
                        {/* Size selector */}
                        <Form.Group controlId="sizeSelect" className="mb-4">
                            <Form.Label>Select Size:</Form.Label>
                            <Form.Control
                                as="select"
                                onChange={handleSizeChange}
                                value={data.size}
                            >
                                <option value="">-- Select --</option>
                                <option value="Small">Small</option>
                                <option value="Medium">Medium</option>
                                <option value="Large">Large</option>
                            </Form.Control>
                            {/* Size Guide link */}
                            <div className=" pt-2">
                                <label htmlFor={`quantity`}>Quantity</label>
                                <input
                                    id={`quantity`}
                                    className="form-control"
                                    min="0"
                                    type="number"
                                    value={data.quantity}
                                    name={`quantity`}
                                    onChange={(e) =>
                                        setData("quantity", e.target.value)
                                    }
                                />
                            </div>
                        </Form.Group>
                        {/* Add to Basket button */}
                        <a
                            href="#"
                            className=" link-info underline"
                            onClick={handleSizeGuideModalOpen}
                        >
                            Size Guide
                        </a>
                        <div style={{ display: "flex", marginTop: "1rem" }}>
                            {auth.user ? (
                                <div>
                                    <div style={{ display: "flex" }}>
                                        <form onSubmit={submit} style={{ marginRight: "1rem" }}>
                                            <Button
                                                type="submit"
                                                variant="outline-primary"
                                            >
                                                Add to basket
                                            </Button>

                                        </form>
                                        <div>
                                            <Button
                                                // href={route("productDetails", { id: bike.bikeid })}
                                                onClick={() => addToWishlist(product.productid)}
                                                className="btn btn-outline-primary"
                                            >
                                                add to wishlist
                                            </Button>

                                        </div>

                                    </div>
                                    <p style={{ color: "green" }}
                                        className="block font-medium text-sm text-gray-700">{wishlist}</p>
                                    <InputError
                                        message={wishlistError}
                                        className="mt-2"
                                    />
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

                            ) : (
                                <Button
                                    type="submit"
                                    onClick={onClickPreventDefault}
                                    variant="outline-primary"
                                >
                                    Add to basket
                                </Button>
                            )}
                        </div>
                    </Col>
                </Row>

                <div
                    style={{
                        backgroundColor: "#212529",


                        margin: "0 auto",
                        marginTop: "2rem",
                        borderRadius: "12px",
                        paddingBottom: "4rem",

                    }}
                    className="productabs"
                >
                    <Tabs
                        defaultActiveKey="description"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                        style={{
                            width: "90%",
                            margin: "0 auto",
                            paddingTop: "1rem",
                        }}
                    >
                        <Tab
                            eventKey="description"
                            title="Description"
                            style={{
                                width: "60%",
                                margin: "0 3rem",
                                color: "white",
                                paddingBottom: "2rem",
                            }}
                        >
                            {product.products.description}
                        </Tab>
                        <Tab
                            eventKey="delivery"
                            title="Delivery options"
                            style={{
                                width: "60%",
                                margin: "0 3rem",
                                color: "white",
                                paddingBottom: "2rem",
                            }}
                        >
                            Tab content for Profile
                        </Tab>
                        <Tab
                            eventKey="contact"
                            title="Contact"
                            style={{
                                width: "60%",
                                margin: "0 3rem",
                                color: "white",
                                paddingBottom: "2rem",
                            }}
                        >
                            Tab content for Contact
                        </Tab>

                        <Tab
                            eventKey={"Compatible Products"}
                            title={"Compatible Products"}
                            style={{
                                width: "60%",
                                margin: "0 3rem",
                                color: "white",
                                paddingBottom: "2rem",
                            }}
                        >
                            <h2>Compatible Products</h2>
                            <ul></ul>
                            <ul>
                                {compatibleProducts.map((product) => (
                                    <li key={product.productid}>
                                        {product.productname}
                                    </li>
                                ))}
                            </ul>
                        </Tab>

                    </Tabs>
                </div>
            </Container>
            <ReviewProducts
                reviews={reviews}
                starsAvg={starsAvg}
                commentsCount={commentsCount}
                auth={auth}
                productid={product.productid}
                click={onClickPreventDefault}
            ></ReviewProducts>

            {/* Size Guide Modal */}
            <Modal show={showSizeGuideModal} onHide={handleSizeGuideModalClose}>
                <Modal.Header closeButton style={{ paddingBottom: "1rem" }}>
                    <Modal.Title>Size Guide</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image
                        src="https://www.oemhelmet.com/uploads/knowledge/general%20size.jpg"
                        alt="Size Guide"
                        fluid
                    />
                    <Image src={clothesSGuide} alt="Size Guide" fluid />
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant=" btn-outline-dark"
                        onClick={handleSizeGuideModalClose}
                    >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
