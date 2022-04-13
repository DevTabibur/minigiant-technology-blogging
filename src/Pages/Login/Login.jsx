import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Login.css";
import GoogleLogo from "../../Assets/Images/google.svg";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import auth from "../../Firebase/Firebase.init.js";
import { useNavigate } from "react-router-dom";

const provider = new GoogleAuthProvider();

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const GoogleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorMessage);
      });
  };
  // const logOut = (e) =>{
  //   signOut(auth).then(() => {
  //     // Sign-out successful.
  //   }).catch((error) => {
  //     // An error happened.
  //   });
  // }

  const emailBlur = (e) => {
    setEmail(e.target.value);
  };

  const passwordBlur = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/");

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="login-page">
      <Container>
        <Row>
          <Col></Col>

          <Col xs={6} className="my-5">
            <div className="login-form-div">
              <h2 className="form-title py-3">Login</h2>

              <form onSubmit={handleFormSubmit}>
                <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <div className="input-wrapper">
                    <input
                      onBlur={emailBlur}
                      type="text"
                      name="email"
                      id="email"
                    />
                  </div>
                </div>
                <div className="input-group">
                  <label htmlFor="password">Password</label>
                  <div className="input-wrapper">
                    <input
                      onBlur={passwordBlur}
                      type="password"
                      name="password"
                      id="password"
                    />
                  </div>
                </div>
                <button type="submit" className="auth-form-submit">
                  LOGIN
                </button>
              </form>
              <p className="redirect">
                New to MiniGiants Blog? <span>Create New Account</span>
              </p>
              <div className="horizontal-divider">
                <div className="line-left" />
                <p>or</p>
                <div className="line-right" />
              </div>
              <div className="input-wrapper">
                <button onClick={GoogleAuth} className="google-auth">
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
