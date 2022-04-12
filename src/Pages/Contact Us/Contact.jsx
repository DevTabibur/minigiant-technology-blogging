import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";
import { Col, Container, Row } from "react-bootstrap";
// import {Img1} from "../../Assets/Images/contact.png"

const Contact = () => {
  return (
    <div className="contact-page">
      <Container className="my-5">
        <div className="contact-img-div">
          <img
            src="https://atixscripts.info/demo/html/minimag/assets/images/contact.png"
            alt="img"
          />
        </div>
        <Row>
            <Col>
                <div className="title-section text-center mb-5">
                    <h2 className="main-title">Contact Us</h2>
                    
                    <p className="sub-title">These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted.</p>
                </div>
                <div className="contact-form-div">
                    <form></form>
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
