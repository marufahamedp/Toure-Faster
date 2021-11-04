import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import riverImg from '../../Images/river.jpg'
import TourServicesSlider from '../TourServicesSlider/TourServicesSlider';

const OurTopReviews = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-lg-6">
                    <img className="w-100" src={riverImg} alt="" />
                </div>
                <div className="col-lg-6 d-flex align-items-center">
                    <div className="">
                        <h1 className="text-center fw-bold">
                            WHY CHOOSE US
                        </h1>
                        <small className="fw-bold text-secondary">
                            Whether you know exactly where you want to go, or you are looking for some ideas, TOUR FASTER has over 4,500 tours and activities around the world waiting for you to discover.
                            <br /> <br />
                            With new destinations continually added, TOUR FASTER will change your life one visit at a time, in fact, by simply re-arranging the letters, "TOUR FASTER" changes "TRAVEL". I loved it!!! Couldn't believe how great it was, for such a good price. I will definitely book other experiences with you all. Thank you!
                        </small>
                        <div className="mt-3">
                            <Link to="/about" className="button">Semore</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTopReviews;