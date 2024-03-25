import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from "@/Components/NavBar";
import AnimateModal from "@/Components/AnimateModal";
import Image from 'react-bootstrap/Image';
import Footer from "@/Components/Footer";
import krakenLogo from "../../assets/Kraken_logo.png";
import missionImage from "../../assets/mission-img.jpg";


const AboutUs = ({auth}) => {
    return (
        <>
            <AnimateModal auth={auth}>
                <Container className="text-light py-5">
                    <Row className="mb-5">
                        <Col>
                            <h1 className="text-center display-3 text-pink-400">About Us</h1>
                            <p className="text-center fs-4 text-gray-500">
                                Discover our story and mission.
                            </p>
                        </Col>
                    </Row>
                    <Row className="justify-content-center pt-3">
                        <Col md={6} className="text-center">
                            <h2 className="fs-2 mb-3">Our Story</h2>
                            <p>
                                Founded with a <u>passion</u> for cycling, our <u>journey</u> began with a simple <u>goal</u>: to provide fellow enthusiasts with premium cycling products and accessories. Over the years, we've grown into a trusted <u>destination</u> for cyclists of all levels, offering a curated selection of bikes, repair kits, clothing, and accessories.
                            </p>
                        </Col>
                        <Col md={4} className="d-flex align-items-center justify-content-center mt-4">
                            <Image src={krakenLogo} className="animate-bounce duration-200 w-40" />
                        </Col>
                    </Row>
                    <Row className="justify-content-center pt-3">
                        <Col md={4} className="d-flex align-items-center justify-content-center mt-4">
                            <Image src={missionImage} className=" w-75 rounded" />
                        </Col>
                        <Col md={6} className="text-center">
                            <h2 className="fs-2 mb-3 mt-8">Our Mission</h2>
                            <p>
                                Our <u>mission</u> is to give the best bikes, accessories, apparel, and repair kits to cycling fans of <u>all ages</u> so they can enjoy riding even more. <br /><br /> To ensure that every customer finds exactly what they need for their cycling adventures, we are <u>committed</u> and <u>dedicated</u> to providing a comprehensive assortment of items that <u>cater to both novice and expert riders.</u> <br /><br /> We really hope to <u>inspire</u> and <u>empower</u> people to enjoy the <u>rush</u> of cycling while also encouraging a healthier and more sustainable lifestyle through our commitment to <u>excellence</u> in product quality, customer service, and community participation with maximum value goods.
                            </p>
                        </Col>
                    </Row>
                    <Row className="justify-content-center pt-3">
                        {/* <Col md={4} className="d-flex align-items-center justify-content-center mt-4">
                            <Image src={missionImage} className=" w-75 rounded" />
                        </Col> */}
                        <Col md={4}>
                            <h2 className="fs-2 mb-3 mt-8 text-center">Returns & Other Details</h2>

                            <ul class="max-w-md space-y-1 list-disc list-inside ml-12 pl-5">
                                <li>
                                    Returns: 123 Too Many Options St, Birmingham
                                </li>
                                <li>
                                    Email: option11@nootheroption.com
                                </li>
                                <li>
                                    Phone: +44 04206996911
                                </li>
                            </ul>

                        </Col>
                    </Row>
                </Container>
                <Footer  />
            </AnimateModal>
        </>
    );
};

export default AboutUs;
