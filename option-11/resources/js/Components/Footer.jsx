import { Container, Row, Col } from 'react-bootstrap';

const CustomFooter = () => {

  return (
    <footer className='bg-dark text-white text-center p-4'>
      <Container>
        <Row>
          <Col className='flex justify-center'>
            <ul className='list-unstyled flex gap-4'>
              <li><a className=' fw-bold' href='/'>Home</a></li>
              <li><a className=' fw-bold' href='/about'>About</a></li>
              <li><a className=' fw-bold' href='/contact'>Contact</a></li>
            </ul>
          </Col>
        </Row>
        <Row className='mt-3 border-top'>
          <Col className=' mt-3'>
            <p>&copy; 2023 Option 11. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default CustomFooter;
