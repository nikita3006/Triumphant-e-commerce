
import React, { useContext, useState } from 'react';
import CartContext from "../../store/CartContext";
import AuthContext from "../../store/AuthContext";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from "../../asset/logo.jpg"
import { Link } from 'react-router-dom';


const NavBar = (props) => {
  const [theme, setTheme] = useState('light');
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);
 
  // console.log(authCtx.userEmail, "userEmail in navbar comp");
  const userName = authCtx.userEmail && authCtx.userEmail.split("@")[0];
  console.log(userName,"userName")

  // const totalQuantity = cartCtx.cartItems.reduce(
  //   (sum, item) => sum + item.quantity,
  // 0);

  const loggeOutHandler = (e) => {
    authCtx.loggedOut()
   
  }
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
    {[false].map((expand) => (
      <Navbar key={expand} expand={expand} style={{ backgroundColor: theme === 'light' ? '#f8f9fa' : '#343a40', color: theme === 'light' ? '#000' : '#fff' }} className="mb-3">
        <Container fluid>
          <img src={logo} style={{ width: '50px', height: 'auto' }} alt="Logo" />
          <Navbar.Brand href="/home">HOME</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                More
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link to="/cart">Cart ({cartCtx.length})</Link>
                <Link to="/showproduct">Store</Link>
                <Link to="/aboutus">About Us</Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
              <Button variant="outline-success" type="submit" onClick={loggeOutHandler}>
                Logout
              </Button>
              <Button variant="outline-secondary" onClick={toggleTheme}>
                Toggle Theme ({theme === 'light' ? 'Dark' : 'Light'})
              </Button>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    ))}
  </>
  );
};

export default NavBar;
