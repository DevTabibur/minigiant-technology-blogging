import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import { Container } from "react-bootstrap";
import SwiperBanner from "../Shared/Header/SwiperBanner/SwiperBanner";

const Home = () => {
  return (
    <>
      <SwiperBanner />
      <Container>
        <h2>Home</h2>
      </Container>
    </>
  );
};

export default Home;
