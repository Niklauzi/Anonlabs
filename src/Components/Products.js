import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import meter1 from "../assets/img/Anon.png";
import meter2 from "../assets/img/Aireplugg.png";
import meter3 from "../assets/img/Allist1.png";
import colorSharp from "../assets/img/color-sharp.png";

export const Products = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="products" id="products">
      <Container>
        <Row>
          <Col>
            <div className="product-bx">
              <h2>Products</h2>
              <p>
                Shipping Out State Of The Art Solutions For Easier Life <br />
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="product-slider"
              >
                <div className="item">
                  <img src={meter1} alt="image" />
                  <h5>A-non</h5>
                </div>

                <div className="item">
                  <img src={meter3} alt="image" />
                  <h5>Allist</h5>
                </div>

                <div className="item">
                  <img src={meter2} alt="image" />
                  <h5>AirePlug</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  );
};
