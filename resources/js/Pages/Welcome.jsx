import MainImage from "@/Components/MainImage";
import Categories from "@/Components/Categories";
import mainBike from "../../assets/main-img.png";
import MainPgProducts from "@/Components/MainPgProducts";
import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar";

const Home = ({bikes, auth}) => {
    return (
        <>
            <main>
            <NavBar auth= {auth} />
                <MainImage
                    imageSrc={mainBike}
                    altText="bike sign"
                    heading="Ride the Extraordinary"
                    subheading="Choose Option 11"
                />
                <Categories bikes={bikes} />
                <MainPgProducts />
            </main>
            <Footer />
        </>
    );
};

export default Home;
