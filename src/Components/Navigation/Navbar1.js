import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "../../images/Nirastate.png";

import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCircle, faGlobe, faMobile } from "@fortawesome/free-solid-svg-icons";

const Navbar1 = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="162"
            height="32"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#memes">
              <FontAwesomeIcon icon={faUser} />
              &nbsp; &nbsp;<span>Sign In</span>
            </Nav.Link>
            {/* the dot between */}
            <Nav.Link eventKey={2} href="#memes">
              {" "}
              <FontAwesomeIcon icon={faCircle} width="5" height="5" />
            </Nav.Link>

            <Nav.Link eventKey={2} href="#memes">
              Join Now
            </Nav.Link>
            {/* the dot between */}
            <Nav.Link eventKey={2} href="#memes">
              {" "}
              <FontAwesomeIcon icon={faCircle} width="5" height="5" />
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes" color="balck">
              Find Reserversion
            </Nav.Link>
            {/* the dot between */}
            <Nav.Link eventKey={2} href="#memes">
              {" "}
              <FontAwesomeIcon icon={faCircle} width="5" height="5" />
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <FontAwesomeIcon icon={faGlobe} color="balck" />
              &nbsp; &nbsp;English
            </Nav.Link>
            {/* the dot between */}
            <Nav.Link eventKey={2} href="#memes">
              {" "}
              <FontAwesomeIcon icon={faCircle} width="5" height="5" />
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              LKR
            </Nav.Link>
            {/* the dot between */}
            <Nav.Link eventKey={2} href="#memes">
              {" "}
              <FontAwesomeIcon icon={faCircle} width="5" height="5" />
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <FontAwesomeIcon icon={faMobile} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar1;
