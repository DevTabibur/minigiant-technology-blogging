import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { Link } from "react-router-dom";
import HeaderTop from "./Header Top/HeaderTop";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <HeaderTop />
      <div className="navbar-header">
        <Navbar collapseOnSelect expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <Link className="navbar-menu-link" to="/home">
                  HOME
                </Link>
                <Link className="navbar-menu-link" to="/posts">
                  POSTS
                </Link>
                <Link className="navbar-menu-link" to="/features">
                  FEATURES
                </Link>
                <Link className="navbar-menu-link" to="/archive">
                  ARCHIVE
                </Link>
                <Link className="navbar-menu-link" to="/about">
                  ABOUT US
                </Link>
                <Link className="navbar-menu-link" to="/contact">
                  CONTACT
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
