import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import styles, { layout } from "../style";

const Billing = () => (
  <>
    {/* Section 1: Carousel of Payment Plugins */}
    <div className="container-fluid"></div>
    <section id="product" className={`${layout.sectionReverse} py-5`}>
      <Container fluid>
        <Row className="align-items-center">
          {/* Carousel Column */}
          <Col md={6}>
      <h1 className="flex-1 font-bitter font-semibold ss:text-[24px] text-[30px] ss:leading-[100.8px] leading-[48px]">
              Available Payment Plugins
            </h1>
            <Carousel indicators={false} controls={true}>
              {/* Create multiple slides, each containing 6 placeholders */}
              {[...Array(3)].map((_, slideIndex) => (
                <Carousel.Item key={slideIndex}>
                  <Row className="justify-content-center">
                    {/* Render 6 small images in a row, each occupying col-2 */}
                    {[...Array(6)].map((_, imgIndex) => (
                      <Col key={imgIndex} className="col-2 d-flex justify-content-center align-items-center p-2">
                        <img
                          src="https://via.placeholder.com/100x100?text=Plugin"
                          alt={`Plugin ${slideIndex * 6 + imgIndex + 1}`}
                          style={{ width: '60px', height: '60px' }}
                          className="img-fluid"
                        />
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>

          {/* Map Column */}
          <Col md={6} className="text-center">
            <p className='text-dark text-muted font-bitter'
            
            >
              Available in Different Currencies
            </p>

            {/* Placeholder for Map of Africa */}
            <div className="mt-5">
              <img src="https://via.placeholder.com/600x400?text=Map+of+Africa" alt="Map of Africa" className="img-fluid mx-auto d-block" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </>
);

export default Billing;
