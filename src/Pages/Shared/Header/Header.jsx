// @ts-nocheck
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { Link } from "react-router-dom";
import HeaderTop from "./Header Top/HeaderTop";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { onAuthStateChanged, signOut } from "firebase/auth";
import auth from "../../../Firebase/Firebase.init";

const Header = () => {
  const [currentUser, setCurrentUser] = useState({});
  console.log(currentUser);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser({});
      }
    });
  }, []);

  const logOut = (e) => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

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

                <Link className="navbar-menu-link" to="/about">
                  ABOUT US
                </Link>
                <Link className="navbar-menu-link" to="/contact">
                  CONTACT
                </Link>
                {currentUser?.email ? (
                  <button className="navbar-menu-link" onClick={logOut}>LOGOUT</button>
                  
                ) : (
                  <Link className="navbar-menu-link" to="/login">
                    LOGIN
                  </Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
