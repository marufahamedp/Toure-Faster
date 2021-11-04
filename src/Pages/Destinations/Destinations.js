import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useDestinations from '../../hook/useDestinations';
import Destination from '../Destination/Destination';

const Destinations = () => {
    const {destinations} = useDestinations();
   
    return (
        <div>
            <div className="container">
            <h1 className=" my-3 fw-bold">Destinations</h1>
            </div>
            <div className="a">
           
            <Row xs={1} md={4} className="g-4 mx-lg-5 px-lg-5 mx-2 mt-2">
        {
         destinations?.map(destination=> <Destination
         key={destination}
            destination={destination}
         ></Destination>)
        }
        </Row>

                <div className="text-center my-5">
                <Link to="/tours" className="button button-link">See More</Link>
                </div>
               
            </div>
        </div>
    );
};

export default Destinations;