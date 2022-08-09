/* import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import Button from 'react-bootstrap/esm/Button';

function NavBar() {
  return (
      <Navbar expand="lg" variant="ligth" bg="secondary" >
        <Container>
          <Navbar.Brand href="#">BASS-SHOP</Navbar.Brand>
          <Container><CartWidget/>
          </Container>
          <input type="text" />
          <Button variant="primary">Buscar</Button>{' '}
        </Container>
      </Navbar>
  );
}

export default NavBar; */

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" className='text-white'>BASS---SHOPP</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className='text-white'>INICIO</Nav.Link>
            <Nav.Link href="#action2" className='text-white'>PRODUCTOS</Nav.Link>
            <Nav.Link href="#action2" className='text-white'>CONTACTO</Nav.Link>
            
          </Nav>
          <CartWidget/>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
           
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;