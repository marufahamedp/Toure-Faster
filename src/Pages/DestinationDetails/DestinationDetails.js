import React from 'react';
import useSingleDesti from '../../hook/useSingleDesti';

const DestinationDetails = () => {
    const {singleDesti} = useSingleDesti();
    const {destinationName, destinationProfileImgUrl, destinationDiscription, _id} = singleDesti;
    
    return (
        <div className="container">
            <h1 className="text-center fw-bold my-4">Destination</h1>
            <div className="d-flex justify-content-center">
                <div className="a">
                   <div className="text-center my-4">
                   <img src={destinationProfileImgUrl} alt="" />
                   <h3 className="fw-bold my-3 tour-text text-uppercase ">{destinationName}</h3>
                   </div>
                    <div className="a">
                        <p>
                            {destinationDiscription}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DestinationDetails;