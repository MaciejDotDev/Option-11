import MainImage from '../components/MainImage';
import Categories from '../components/Categories';
import mainBike from '../assets/main-img.png';

const Home = () => {
  return (
    <main>
      <MainImage
        imageSrc={mainBike}
        altText='bike sign'
        heading='Ride the Extraordinary'
        subheading='Choose Option 11'
      />
      <Categories />
    </main>
  );
};

export default Home;
