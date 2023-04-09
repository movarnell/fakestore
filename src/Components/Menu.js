import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Menu({cartTotal, costTotal}) {
  return (
    <>
    
      <br />
      <Navbar bg="dark" variant="dark">
        <Container>
          
          <Navbar.Brand href="#home">
          Cart {cartTotal} Total Cost: ${costTotal}
          </Navbar.Brand>
          
        </Container>
      </Navbar>
    </>
  );
}

export default Menu;