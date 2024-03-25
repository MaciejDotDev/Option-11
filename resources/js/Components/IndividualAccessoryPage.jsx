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
import axios from "axios";
import toastr from "toastr";
import AnimateModal from "@/Components/AnimateModal";
import { Link } from "@mui/icons-material";
import placeHolderImage from '../../../public/product-images/accessory-products/helmet-1.jpg'
// Yes, you can add a prop here if needed for your component's functionality.
export default function IndividualAccessoryPage({
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

    // This is the state we are using to control the visibility of the size guide modal.
    const [showSizeGuideModal, setShowSizeGuideModal] = useState(false);

    const handleSizeChange = (e) => {
        const { value } = e.target;
        setData("size", value);
    };



    // ensuring that the useeffect occurs when the change of the value is heppning

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




    return (
        <>
            <Container className="mt-4" style={{ paddingBottom: "3rem" }}>
                <Row className="justify-content-center align-items-center gap-16">
                    <Col md={4}>
                        <Image
                             src={`/${product.products.imageURL}`}
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
                                        <form
                                            onSubmit={submit}
                                            style={{ marginRight: "1rem" }}
                                        >
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
                                                href={`/wishlist/add/${product.productid}`}
                                                variant="outline-primary"
                                            >
                                                add to wishlist
                                            </Button>
                                        </div>
                                    </div>
                                    <p
                                        style={{
                                            color: "green",
                                            paddingTop: "1rem",
                                        }}
                                        className="block font-medium text-sm text-gray-700"
                                    >
                                        {flash.wishlist}
                                    </p>

                                    <InputError
                                        message={flash.error}
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
                            For all your biking needs, we offer a range of
                            delivery options to ensure your purchase arrives
                            safely and conveniently to your door. Whether you're
                            in a rush to get your new bike for the next big race
                            or prefer a more cost-effective option, we've got
                            you covered. Choose from our express delivery for
                            speedy delivery within 1-2 business days, standard
                            delivery that gets your bike to you within 3-5
                            business days, or our flexible pick-up option that
                            allows you to collect your bike at a time that suits
                            you from our designated pick-up points. Each
                            delivery option is designed with your convenience
                            and peace of mind at the forefront, ensuring that
                            your bike arrives ready for your next adventure.
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
