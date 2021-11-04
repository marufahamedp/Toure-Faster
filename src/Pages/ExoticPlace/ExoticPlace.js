import React from 'react';

const ExoticPlace = () => {
    return (
        <div className="container my-5">
            <div className="my-5 pt-4">
            <h1 className="text-center my-3 fw-bold">
            Go Exotic Places
            </h1>
            <p className="text-center my-3 fw-bold text-secondary">
            When it comes to exploring exotic places, the choices are numerous. <br /> Whether you like peaceful destinations or vibrant landscapes, we have offers for you.
            </p>
            </div>
            <div className="b">
                <div className="row g-4">
                    <div className="col-8">
                        <img className="w-100" src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/03/destination-3-1100x550.jpg" alt="" />
                        <div className="row g-4 mt-1">
                            <div className="col-6">
                                <img className="w-100" src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/02/destination-1.jpg" alt="" />
                            </div>
                            <div className="col-6">
                                <img className="w-100" src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/03/destination-3-1.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <img className="w-100" src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/03/destination-2-550x1100.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExoticPlace;