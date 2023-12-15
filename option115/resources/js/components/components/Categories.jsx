import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import bikeCategory from '../assets/bike-category.png';
import clothesCategory from '../assets/clothes-category.png';
import equipmentCategory from '../assets/equipment-category.png';

const Categories = () => {
  return (
    <section className='categories'>
      <h2 className='text-white text-center mt-5 mb-3 display-3 shadow-text'>
        Shop Now
      </h2>
      <Container>
        <Row>
          <Col xs={12} md={4} className='ctg-image'>
            <a className='text-decoration-none text-white' href='#bikes'>
              <Image src={bikeCategory} className='mx-auto' thumbnail />
              <h3 className='text-center mt-4 fs-1'>Bikes</h3>
            </a>
          </Col>
          <Col xs={12} md={4} className='ctg-image'>
            <a className='text-decoration-none text-white' href='#clothes'>
              <Image src={clothesCategory} className='mx-auto' thumbnail />
              <h3 className='text-center mt-4 fs-1'>Clothing</h3>
            </a>
          </Col>
          <Col xs={12} md={4} className='ctg-image'>
            <a className='text-decoration-none text-white' href='#equipment'>
              <Image src={equipmentCategory} className='mx-auto' thumbnail />
              <h3 className='text-center mt-4 fs-1'>Equipment</h3>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Categories;
