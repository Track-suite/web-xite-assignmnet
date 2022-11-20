import React from "react";
import { Container, Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import hero from "../../images/Hero.png";
import Searchbar from "./Searchbar";

const Hero = () => {
  return (
    <div>
      <Container>
        <Image
          src={hero}
          width="1300"
          height="620"
          style={{ marginTop: "24px" }}
        />
      </Container>
      <Searchbar />
      <destination />
    </div>
  );
};

export default Hero;
