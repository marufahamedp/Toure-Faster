import React from 'react';
import './About.css'
import aboutBoyImg from '../../Images/aboutus.jpg'
const About = () => {

    return (
        <div>
            <div className="coverbg-container">
                <div className="cover-bg"></div>
                <div className="cover-bg-text">
                    <h1 className="fw-bold">ABOUT US</h1>
                </div>
            </div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="a">
                            <small className="tour-text fw-bold mt-5" >Who We Are</small>
                            <h2 className="fw-bold">
                                WHY CHOOSE US
                            </h2>
                            <p className="mt-4">
                                Whether you know exactly where you want to go, or you are looking for some ideas, TOUR FASTER has over 4,500 tours and activities around the world waiting for you to discover. <br /> <br /> With new destinations continually added, TOUR FASTER will change your life one visit at a time, in fact, by simply re-arranging the letters, "TOUR FASTER" changes "TRAVEL".
                                I loved it!!! Couldn't believe how great it was, for such a good price. I will definitely book other experiences with you all. Thank you!
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <img className="w-100" src={aboutBoyImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;