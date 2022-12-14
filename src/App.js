import "./App.css";
// import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Navbar1 from "./Components/Navigation/Navbar1";
import Navbar2 from "./Components/Navigation/Navbar2";
import Hero from "./Components/Hero Section/Hero";
import Searchbar from "./Components/Hero Section/Searchbar";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar1 />
        <Navbar2 />
        <div className="hero-wrap">
          <Hero />

          <ourDestination />
        </div>
      </header>
    </div>
  );
}

export default App;
