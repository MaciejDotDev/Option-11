import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

import bikeCategory from "../../assets/bike-category.png";
import clothesCategory from "../../assets/clothes-category.png";
import repairKitsCategory from "../../assets/repair_kits.jpg";
import accessoriesCategory from '../../assets/accessories.jpg'
import partsCategory from '../../assets/parts.jpg'

const Categories = () => {
    return (
        <section className="categories">
            <h2 className="text-white text-center mt-5 mb-3 display-3 shadow-text">
                Shop Now
            </h2>
            <Container>
                <Row>
                    <Col xs={12} md={4} className="ctg-image">
                        <a
                            className="text-decoration-none text-white"
                            href={route('products')}
                        >
                            <Image
                                src={bikeCategory}
                                className="mx-auto"
                                thumbnail
                            />
                            <h3 className="text-center mt-4 fs-1">Bikes</h3>
                        </a>
                    </Col>
                    <Col xs={12} md={4} className="ctg-image">
                        <a
                            className="text-decoration-none text-white"
                            href={route('clothing')}
                        >
                            <Image
                                src={clothesCategory}
                                className="mx-auto"
                                thumbnail
                            />
                            <h3 className="text-center mt-4 fs-1">Clothing</h3>
                        </a>
                    </Col>
                    <Col xs={12} md={4} className="ctg-image">
                        <a
                            className="text-decoration-none text-white"
                            href={route('accessoryProducts')}
                        >
                            <Image
                                src={accessoriesCategory}
                                className="mx-auto"
                                thumbnail
                            />
                            <h3 className="text-center mt-4 fs-1">Accessories</h3>
                        </a>
                    </Col>
                    <Col xs={12} md={4} className="ctg-image">
                        <a
                            className="text-decoration-none text-white"
                            href={route('repairKits')}
                        >
                            <Image
                                src={repairKitsCategory}
                                className="mx-auto"
                                thumbnail
                            />
                            <h3 className="text-center mt-4 fs-1">Repair Kits</h3>
                        </a>
                    </Col>
                    <Col xs={12} md={4} className="ctg-image">
                        <a
                            className="text-decoration-none text-white"
                            href={route('BikeParts')}
                        >
                            <Image
                                src={partsCategory}
                                className="mx-auto"
                                thumbnail
                            />
                            <h3 className="text-center mt-4 fs-1">Parts</h3>
                        </a>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Categories;