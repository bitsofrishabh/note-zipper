import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import "./LandingPage.css";
import Button from "react-bootstrap/esm/Button";
const LandingPage = () => {
  return (
    <main>
      <Container className="main">
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to Note Zipper</h1>
              <p className="subtitle">One Safe Place to all your notes</p>
            </div>
            <div className="buttonContainer">
              <Row>
                <a href="/login">
                  <Button size="lg" className="landingButton">
                    Login
                  </Button>
                </a>
                <a href="/register">
                  <Button
                    size="lg"
                    className="landingButton"
                    variant="outline-primary"
                  >
                    Sign Up
                  </Button>
                </a>
              </Row>
            </div>
          </div>
        </Row>
      </Container>
    </main>
  );
};

export default LandingPage;
