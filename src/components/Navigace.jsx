import React from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navigace() {
  return (
    <Navbar
      expand="lg"
      className="justify-content-between align-items-center"
      style={{ margin: "0" }}
    >
      <Container>
        <img
          src={require("../images/ecobat-horizontalni-logo.png")}
          alt="logo"
          style={{ width: "auto", height: "30px" }}
        ></img>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Link to="/">
              <img
                src={require("../images/home.png")}
                alt="domeček"
                style={{ width: "20px", height: "20px" }}
              />
            </Link>
            <NavDropdown
              title={
                <img
                  src={require("../images/menu.png")}
                  alt="Logo"
                  style={{ width: "20px", height: "20px" }}
                />
              }
              id="basic-nav-dropdown"
              align="end"
            >
              <NavDropdown.Item href="#action/3.1">
                <Link to="/seznam">Seznam míst</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <Link to="/sber">Co se sbírá</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                <Link to="/kontakt">Kontakt</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigace;
