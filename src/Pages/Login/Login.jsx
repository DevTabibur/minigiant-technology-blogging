import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Login.css";
import GoogleLogo from '../../Assets/Images/google.svg';

const Login = () => {
  return (
    <div className="login-page">
      <Container>
        <Row>
          <Col></Col>

          <Col xs={6} className="my-5">
            <div className="login-form-div">
              <h2 className="form-title py-3">Login</h2>

              <form>
                <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <div className="input-wrapper">
                    <input type="text" name="email" id="email" />
                  </div>
                </div>
                <div className="input-group">
                  <label htmlFor="password">Password</label>
                  <div className="input-wrapper">
                    <input type="text" name="password" id="password" />
                  </div>
                </div>
                <button className="auth-form-submit">LOGIN</button>
              </form>
              <p className="redirect">
                New to Tech MiniGiants? <span>Create New Account</span>
              </p>
              <div className="horizontal-divider">
                <div className="line-left" />
                <p>or</p>
                <div className="line-right" />
              </div>
              <div className="input-wrapper">
                <button className="google-auth">
                  <img src={GoogleLogo} alt="" />
                  <p> Continue with Google </p>
                </button>
              </div>
            </div>
          </Col>

          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
