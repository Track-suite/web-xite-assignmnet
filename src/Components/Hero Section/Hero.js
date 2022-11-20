import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import hero from "../../images/Hero.png";

const Hero = () => {
  return (
    <Container>
      <img src={hero} width="1300" height="620" style={{ marginTop: "24px" }} />
    </Container>
  );
};

export default Hero;
