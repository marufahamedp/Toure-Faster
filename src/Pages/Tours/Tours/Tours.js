import React from 'react';
import { Row } from 'react-bootstrap';
import useDestinations from '../../../hook/useDestinations';
import useServices from '../../../hook/useServices';
import Destination from '../../Destination/Destination';
import HomePageTour from '../../HomePageTour/HomePageTour';

const Tours = () => {
    const {services} = useServices();
    const {destinations} = useDestinations();
    return (
        <div>
   <div className="a">
       <h1 className="text-center my-3 fw-bold">OUR TOP RATED TOURS</h1>
   <Row xs={1} md={3} className="g-4 mx-lg-5 px-lg-5 mx-2 mt-2">
        {
          services.map(service => <HomePageTour
            service={service._id}
            service={service}
          ></HomePageTour>)
        }
      </Row>
   </div>

      <div className="my-5 pt-5">
      <h1 className="text-center my-4 fw-bold">OUR TOP REGULAR TOURS</h1>
      <Row xs={1} md={4} className="g-4 mx-lg-5 px-lg-5 mx-2 mt-2">
        {
         destinations?.map(destination=> <Destination
            destination={destination}
         ></Destination>)
        }
        </Row>
      </div>
        </div>
    );
};

export default Tours;