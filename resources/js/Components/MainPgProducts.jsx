import bikeProductImage from "../../assets/featuredBike1.png";
import vintageBikeImage from "../../assets/vintageBike.png";
import bikeHelmet from "../../assets/bikeHelmet.png";

const FeaturedProductCard = ({
    image,
    title,
    description,
    price,
    salePrice,
}) => {
    return (
        <div className="col-md-4 mb-4 mt-3">
            <div className="card">
                <img src={image} className="card-img-top" alt="Product" />
                <div className="card-body text-center">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-title">{description}</p>
                    {salePrice ? (
                        <>
                            <p className="card-text fw-bold">
                                <span className="text-danger">On Sale:</span>{" "}
                                {salePrice}
                                <del className="mx-2 text-muted">{price}</del>
                            </p>
                        </>
                    ) : (
                        <p className="card-text fw-bold">Price: {price}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

const MainPgProducts = () => {
    const products = [
        {
            image: bikeProductImage,
            title: "Summit Strider",
            description:
                "Conquer the trails with our state-of-the-art Summit Strider, crafted for thrill-seekers and outdoor enthusiasts. Engineered with precision, it seamlessly blends durability, performance, and style, delivering an exhilarating ride through rugged terrains. Elevate your biking experience and embrace the spirit of adventure with our featured mountain bike.",
            price: "£1499",
        },
        {
            image: vintageBikeImage,
            title: "RetroRide Classic",
            description:
                "Embrace the timeless allure of our RetroRide Classic, a vintage bike that marries elegance with nostalgia. With its sleek chrome accents and classic leather detailing, this bicycle exudes sophistication while delivering a smooth and comfortable ride. Rediscover the joy of cycling with the RetroRide Classic – where style meets the open road.",
            price: "£499",
        },
        {
            image: bikeHelmet,
            title: "ShadowGuard MTB Helmet",
            description:
                "Elevate your mountain biking experience with our ShadowGuard MTB Helmet. Engineered for both safety and style, this sleek black helmet offers maximum protection on rugged trails. The aerodynamic design ensures comfort and ventilation, while the matte black finish adds a touch of sophistication. ",
            price: "£125",
            salePrice: "£100",
        },
    ];

    return (
        <section className="featured-products">
            <h2 className="text-white text-center mt-5 mb-3 display-3 shadow-text">
                Featured products
            </h2>

            <div className="container">
                <div className="row">
                    {products.map((product, index) => (
                        <FeaturedProductCard key={index} {...product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MainPgProducts;
