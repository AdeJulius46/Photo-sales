import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom"
import './././../App.css'
import { usecontext } from '../Context';

const Nave = () => {
const {cartItems}= usecontext();
  const julius = cartItems.length > 0 ? "ri-shopping-cart-fill ri-fw ri-1.5":"ri-shopping-cart-line ri-fw ri-1.5x"
  return (
    <>
    <Navbar bg="secondary" expand="lg" className='fs-4 ' >
      <Container>
        <Navbar.Brand href="" className='me-10 fs-4' >React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-5 ">
            
            <Nav.Link> 
              <Link to="/"  className='hi' >
              Images 
              </Link>
              </Nav.Link> 
            <Nav.Link> 
              <Link to="/cart" className='hi' >
              <i className={`${julius} ri-fw ri-1.5x`}></i>
              </Link>
              </Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </>
  )
}

export default Nave