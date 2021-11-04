import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomePageTour.css'
const HomePageTour = (props) => {
  const { _id, tourName, shortDescription, thambleimgURL, Price } = props.service;
  return (
    <div>
      <div>
        <Col className="">
          <div className="full-container">
            
            <img className="images w-100" src={thambleimgURL} alt="" />
           
            <div className="">
              <div className="text-container">
              <h3 className="text-title">{tourName}</h3>
              <p className="text-detail">{shortDescription.slice(0, 150)}</p>
              <Link to={`/services/${_id}`} className="btn btn-warning">Book This Tour</Link>
              </div>
              <h1 className="text-warning text-btn">${Price}</h1>
            </div>
            
          </div>
        </Col>
      </div>
    </div>
  );
};

export default HomePageTour;