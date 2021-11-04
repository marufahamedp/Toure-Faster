import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css'
const PageNotFound = () => {
    return (
        <div className="image-container">
            <div>
                <div className="pagenotfound ">
                </div>
                <div className="text-center">
                    <Link to="/home"><button className="btn-custom">Go Back</button></Link>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;