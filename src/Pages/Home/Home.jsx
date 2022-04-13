import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import { Container } from "react-bootstrap";
import SwiperBanner from "../Shared/Header/SwiperBanner/SwiperBanner";

// this project is should be followed by 
// https://atixscripts.info/demo/html/minimag/index-2.html
const Home = () => {
  return (
    <>
      {/* <SwiperBanner /> */}
      <Container>
        <h2>Home</h2>
      </Container>
    </>
  );
};

export default Home;
