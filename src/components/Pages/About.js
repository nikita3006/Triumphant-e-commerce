import React from "react";
import Carousel from "react-bootstrap/Carousel";
import about1 from '../../asset/contact2.jpg';
import about2 from '../../asset/contact4.jpg';



const carouselStyle = {
  width: "100vw", 
  height: "90vh",
};


function AboutUs() {
  return (
    <>
      <div>
        <Carousel style={carouselStyle} data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={about1}
              alt="First slide"
              style={carouselStyle}
            />
            <Carousel.Caption>
              <h5>Who we are</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto in excepturi error, aperiam illo ipsam, itaque illum est, voluptatum minus id eius. A, at pariatur?
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={about2}
              alt="Second slide"
              style={carouselStyle}
            />
            <Carousel.Caption>
              <h5>Why we?</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem35
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis placeat harum veniam fugit repudiandae ex error possimus veritatis aut ipsum pariatur, libero nostrum autem dolorem.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

    
    </>
  );
}

export default AboutUs;

