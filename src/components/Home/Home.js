import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/remi.png";
import Particle from "../Particle";
import Type from "./Type";

function Home() {
  return (
    <Container fluid className="home-section" id="home">
      <Particle />
      <Container className="home-content">
        <Row>
          <Col md={7} className="home-header">
            <h1 style={{ paddingBottom: 15 }} className="heading">
              Hi There!{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>
            <h1 className="heading-name">
              I'M
              <strong className="main-name"> Tonglu (Remi) Yang</strong>
            </h1>
            <div style={{ paddingLeft: 45 }}>
              <h3>
                A <span className="green">CS</span> Senior at UW-Madison
              </h3>
              <h4>
                Worked as <span className="green">Full Stack Developer</span>{" "}
                for <span className="green">1yr</span>
                <br />
                Experienced in{" "}
                <span className="green">Python, C, Java, and C#</span>
                <br />
                Seeking for{" "}
                <strong className="green">SWE Intern/Co-op/New Grad</strong>
              </h4>
            </div>
          </Col>

          <Col md={5} style={{ paddingBottom: 20 }}>
            <img
              src={homeLogo}
              alt="home pic"
              className="img-fluid"
              style={{
                maxHeight: "450px",
                maxWidth: "73%",
                marginLeft: "-10%",
                textAlign: "center",
              }}
            />
            <br />
            <br />
            <div style={{ display: "flex", alignItems: "center" }}>
              <Type />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home;
