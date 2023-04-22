import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import AireDAOImg from "../assets/img/contact-img.svg";

export const AireDAO = () => {
  return (
    <section className="contact" id="AireDAO">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={AireDAOImg} alt="Contact Us" />
          </Col>
          <Col>
            <h2>Aire DAO</h2>
            <p>
              Aire is a decentralized autonomous organization (DAO) built on
              blockchain technology that aims to democratize finance and provide
              access to financial tools and opportunities for everyone. Through
              democratic voting, Aire's members can propose new initiatives,
              vote on proposals, and participate in decision-making processes
              regarding the allocation of funds, investments, and
              community-driven projects. This ensures that the DAO is a truly
              democratic organization that reflects the values and priorities of
              its members. By leveraging the collective intelligence and
              expertise of its members, Aire is committed to creating a
              community-driven platform that empowers individuals to participate
              in the governance of financial activities.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
