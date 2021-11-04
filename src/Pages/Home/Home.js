import React, { useEffect, useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import useAuth from "../../hook/useAuth";
import ExoticPlace from "../ExoticPlace/ExoticPlace";
import HomePageTour from '../HomePageTour/HomePageTour';
import OurTopServices from "../OurTopReviews/OurTopReviews";
import Slider from "../Slider/Slider";
import TourServicesSlider from "../TourServicesSlider/TourServicesSlider";
import watchvideo from '../../Images/about.jpg';
import './Home.css'
import Destinations from "../Destinations/Destinations";
import { Link } from "react-router-dom";
import useServices from "../../hook/useServices";
const Home = () => {
  const { isLoading } = useAuth();
  const {services} = useServices();
  if (isLoading) {
    return <div className="text-center"><Spinner animation="grow" variant="danger" /></div>
  }
  return (
    <div>

          {/* hero section  */}

      <Slider></Slider>

      {/* Watch video section  */}

      <div className="a">
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-7 mb-3 mb-lg-0">
            <div className="imgs-container">
            <img src={watchvideo} alt="" className="w-100 rounded" />
          
            <div className="texts-container">
                 <div className="d-lg-none">
                 <h1>Watch Our Videos</h1>
                  <a href="#" className="d-flex align-items-center">
                    <i className="fas fa-play-circle"></i>
                    <span>Watch Now</span>
                    </a>
                 </div>
                  <div className="d-none d-lg-block">
                  <h2>Watch Our Video</h2>
                    <a href="#" className="d-flex align-items-center">
                    <i className="fas fa-play-circle"></i>
                    <span>Watch Now</span>
                    </a>
                  </div>
            </div>
            </div>
          </div>
          <div className="col-lg-5 d-flex align-items-center">
            
              <div> 
              <h1 className="fw-bold">A Simply Perfect Place To Get Lost</h1>
            <p className="my-3 fw-bold text-secondary">
              A Simply Perfect Place To Get Lost
              Treat yourself with a journey to your inner self. Visit a mystique Tibet and start your spiritual adventure. We promise, you’ll enjoy every step you make.
            </p>
            <button className="button my-4">See More</button>
              </div>
            
          </div>
        </div>
      </div>

      <div className="text-center mt-lg-5">
        <h1 className="text-center fw-bold">
          Last Minute Offers
        </h1>
        <div className="d-flex justify-content-center fw-bold text-secondary">
          <p className="">
            Book a memorable tour at great price! Grab our last minute offer and pack the things <br /> for the journey you dream about. See our recommendations.
          </p>
        </div>
      </div>


          {/* tour services sections  */}


      <Row xs={1} md={3} className="g-4 mx-lg-5 px-lg-5 mx-2 mt-2">
        {
          services.map(service => <HomePageTour
          key={service._id}
            service={service._id}
            service={service}
          ></HomePageTour>)
        }
      </Row>
      <div className="text-center my-5">
                <Link to="/tours" className="button button-link">See More</Link>
                </div>
      <TourServicesSlider></TourServicesSlider>
      <OurTopServices></OurTopServices>
      <ExoticPlace></ExoticPlace>
      <Destinations></Destinations>
    </div>
  );
};

export default Home;