import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import AireDAOImg from "../assets/img/contact-img.svg";

export const About = () => {
  return (
    <section className="contact about" id="about">
      <Container>
        <Row className="align-items-center">
          <h2>About</h2>
          <p>
            Aire is a real-world community-driven DAO that aims to provide a
            platform for users to collaborate and govern financial activities in
            a decentralized manner. The name Aire was inspired by the Spanish
            word for "air" which symbolizes freedom, movement, and transparency
            - all values that are integral to the DAO's mission. At Aire,
            members will be able to participate in decision-making processes
            regarding the allocation of funds, investments, and community-driven
            projects. By utilizing blockchain technology, Aire ensures that all
            financial activities are transparent, secure, and decentralized. The
            community-driven aspect of Aire means that all members have a voice
            and a vote in the decision-making process. Members will be able to
            propose new initiatives, vote on proposals, and help shape the
            direction of the DAO. This ensures that Aire is a truly democratic
            organization that reflects the values and priorities of its members.
            In summary, Aire is a real-world community-driven DAO that empowers
            its members to govern financial activities in a decentralized and
            democratic manner.
          </p>
        </Row>
      </Container>
    </section>
  );
};
