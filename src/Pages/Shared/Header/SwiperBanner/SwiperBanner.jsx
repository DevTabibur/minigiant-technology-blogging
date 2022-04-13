import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./SwiperBanner.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slideImg1 from "../../../../Assets/Images/mm-slide-2-1.jpg";
import slideImg2 from "../../../../Assets/Images/mm-slide-2-2.jpg";
import slideImg3 from "../../../../Assets/Images/mm-slide-2-3.jpg";

// Import Swiper styles
import "swiper/css";

const SwiperBanner = () => {
  return (
    <div className="swiper-banner-compo py-5">
      <Container className="">
        <Row>
          <Col>
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <img src={slideImg1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="d-block" src={slideImg2} alt="" />
              </SwiperSlide>

              <SwiperSlide>
                <img className="d-block" src={slideImg3} alt="" />
              </SwiperSlide>
            </Swiper>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SwiperBanner;
