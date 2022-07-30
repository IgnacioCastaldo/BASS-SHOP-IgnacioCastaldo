import Container from 'react-bootstrap/Container';
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

export default NavBar;