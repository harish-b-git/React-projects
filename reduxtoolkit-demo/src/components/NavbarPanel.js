import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = () => {

    const cartProducts = useSelector(state => state.cart)
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Redux-toolkit</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              
              <Nav.Link to="/" as={Link}>Products</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Nav >
              <Navbar.Text>
              <Nav.Link to="/cart" as={Link}>My Bag {cartProducts.length}</Nav.Link>
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
          
        </Container>
      </Navbar>
    </div>
  );
};
export default NavBar;
