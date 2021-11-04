import React from 'react';
import useServices from '../../hook/useServices';
import ManageService from '../ManageService/ManageService';

const ManageServices = () => {
    const { services } = useServices();
    return (
        <div>
            <div className="container my-5">
                <div className="a">
                    <h1 className="text-center fw-bold mb-5">Total Services: {services.length}</h1>
                </div>
                {
                    services.map(service => <ManageService
                        service={service}
                    ></ManageService>)
                }
            </div>
        </div>
    );
};

export default ManageServices;