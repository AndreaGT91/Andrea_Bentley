import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Styles from "../../styles";

function NavBar() {
  const navbarStyle = {
    backgroundColor: Styles.mainColor,
    fontFamily: Styles.serifFont
  };

  const brandStyle = {
    color: Styles.highlightColor,
    fontStyle: "italic"
  };

  const linkStyle = {
    color: Styles.linkColor,
  };

  return (
    <Navbar fixed="top" variant="dark" expand="sm" style={navbarStyle}>
      <Navbar.Brand href="/About" style={brandStyle}>Andrea C. Bentley</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item>
            <Nav.Link href="/About" style={linkStyle}>About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/Portfolio" style={linkStyle}>Portfolio</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/Contact" style={linkStyle}>Contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;