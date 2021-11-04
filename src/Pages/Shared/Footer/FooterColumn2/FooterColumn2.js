import React from 'react';

const FooterColumn2 = () => {
    return (
        <div>
            <div className="text-light">
                <h3 className="tour-text fw-bold">Contact us</h3>
            </div>
            <ul className="list-group list-group-flush mt-3">
                <li className="list-group-item  bg-dark text-light"><i className="fas fa-location-arrow"></i> Jamgora, Svar, Dhaka</li>
                <li className="list-group-item  bg-dark text-light"><i className="fas fa-phone-alt"></i> +8801315560101</li>
                <li className="list-group-item  bg-dark text-light"><i className="fas fa-mobile-alt"></i> +8801976781492</li>
                <li className="list-group-item  bg-dark text-light mb-2"><i className="fas fa-envelope"></i> marufamdp@gmail.com</li>
            </ul>
        </div>
    );
};

export default FooterColumn2;