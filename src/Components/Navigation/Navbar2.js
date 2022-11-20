import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import Navbar from "react-bootstrap/Navbar";
import { Button, NavDropdown } from "react-bootstrap";

const Navbar2 = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" style={{ color: "#ffff", fontSize: "16px" }}>
          ABOUT
        </Navbar.Brand>
        <NavDropdown
          title="ROOM&SUITES"
          id="collasible-nav-dropdown white"
          style={{ color: "#ffff", fontSize: "16px" }}
        >
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        {/* break */}
        <NavDropdown
          title="DINING"
          id="collasible-nav-dropdown white"
          style={{ color: "#ffff", fontSize: "16px" }}
        >
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        {/* break */}
        <NavDropdown
          title="EXPERIENCE"
          id="collasible-nav-dropdown white"
          style={{ color: "#ffff", fontSize: "16px" }}
        >
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        {/* break */}
        <NavDropdown
          title="EVENTS"
          id="collasible-nav-dropdown white"
          style={{ color: "#ffff", fontSize: "16px" }}
        >
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        <Navbar.Brand href="#home" style={{ color: "#ffff", fontSize: "16px" }}>
          GALLERY
        </Navbar.Brand>
        <Navbar.Brand href="#home" style={{ color: "#ffff", fontSize: "16px" }}>
          OFFERS
        </Navbar.Brand>
        {/* break */}
        <NavDropdown
          title="MORE"
          id="collasible-nav-dropdown white"
          style={{ color: "#ffff", fontSize: "16px" }}
        >
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        <Button variant="outline-light">FIND A HOTEL</Button>
      </Container>
    </Navbar>
  );
};

export default Navbar2;
