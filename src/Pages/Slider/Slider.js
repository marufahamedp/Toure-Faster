import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../Images/slider-1.jpg';
import slider2 from '../../Images/slider-2.jpg';
import slider3 from '../../Images/slider-3.jpg';
import './Slider.css';

import SliderForm from '../SliderForm/SliderForm';
const Slider = () => {

    return (
        <div>
           <Carousel>
  <Carousel.Item className="carousel-size">
    <img
      className="d-block w-100"
      src={slider1}
      alt="First slide"
    />
    <Carousel.Caption>
     <div className="d-lg-none">
       <h1 className="fw-bold">Welcome To <span className="tour-text">Toure Faster</span></h1>
       <span>Best toure booking site ever</span>
     </div>
     <div className="d-flex justify-content-end">
     <div className=" d-none d-lg-block">
     <SliderForm></SliderForm>
     </div>
     </div>
   
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="carousel-size">
    <img
      className="d-block w-100"
      src={slider2}
      alt="Second slide"
    />

    <Carousel.Caption>
    <div>
           <h1 className="tour-text fw-bold">Newsletter</h1>
           <p className="text-light">
               Sing up for our newsletter and get updated about our latest services.
           </p>
           <div className="a">
           <div className="text-input">
               <input type="email" placeholder="Enter your email" id="email" />
              <label htmlFor="email">Email</label>
           </div>
          <div className="mt-3 d-flex justify-content-center justify-content-lg-end">
          <input type="submit" value="Subscribe" />
          </div>
           </div>
        </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Slider;