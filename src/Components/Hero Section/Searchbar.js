import React from "react";
import {
  Button,
  Container,
  Dropdown,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import "../../App.css";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "../../images/Nirastate.png";

import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCircle, faGlobe, faMobile } from "@fortawesome/free-solid-svg-icons";

const Searchbar = () => {
  return (
    <Navbar bg="#ffff" variant="dark" className="search-wrap">
      <Container>
        <div class="col-md-3" style={{ marginLeft: "16px" }}>
          <span className="text">Arrival Date</span>
          <input
            style={{ marginTop: "8px" }}
            type="text"
            class="form-control"
            placeholder="Serach Your Categories "
          />
        </div>
        <div class="col-md-3">
          <span className="text">Depature Date</span>
          <input
            style={{ marginTop: "8px" }}
            type="text"
            class="form-control"
            placeholder="Serach Your Categories "
          />
        </div>
        {/* break */}
        <div class="col-md-3">
          <span className="text">Number of People</span>
          <input
            style={{ marginTop: "8px" }}
            type="text"
            class="form-control"
            placeholder="Serach Your Categories "
          />
        </div>
        <Button className="btn-wrap" variant="success">
          Find a Hotel
        </Button>{" "}
      </Container>
    </Navbar>
  );
};

export default Searchbar;
