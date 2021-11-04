import React from 'react';
import { Link } from 'react-router-dom';


const FooterColumn3 = () => {

    return (
        <div>
            <div className="text-light">
                <h3 className="tour-text fw-bold" >Menu</h3>

                <Link className="d-block text-decoration-none text-light mb-3 mt-4" to="/home">Home</Link>
                <Link className="d-block text-decoration-none text-light mb-3" to="/tours">Tours</Link>
                <Link className="d-block text-decoration-none text-light mb-3" to="/about">About</Link>
                <Link className="d-block text-decoration-none text-light mb-3" to="/contact">Contact</Link>

            </div>
        </div>
    );
};

export default FooterColumn3;