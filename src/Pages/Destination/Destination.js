import React from 'react';
import { Link } from 'react-router-dom';
import './Destination.css'
const Destination = (props) => {
    const {destinationName, destinationProfileImgUrl, _id} =props.destination;
    return (
        <div>
           <Link to={`/destinations/${_id}`}> 
            <div className="destination-container">
            <div className="destination-img">
                <img src={destinationProfileImgUrl} alt="" />
                </div>
                <div className="destination-text">
                <h1>{destinationName}</h1>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default Destination;