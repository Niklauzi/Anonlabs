import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div>
              <h1>
                {"Bringing DeFi To Your Everyday Life"}{" "}
                <span className="wrap"></span>
              </h1>
              <p>Bringing DeFi To Your Everyday Life</p>
              <button onClick={() => console.log("Connect")}>
                Let's connect <ArrowRightCircle size={25} />
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
