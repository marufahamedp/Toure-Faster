import React from 'react';
import './FooterColumn1.css'
const FooterColumn1 = () => {
    return (
        <div>
            <div className="text-light">
                <h3 className="tour-text">About Us</h3>
                <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam urna lacus porta, augue eget sagittis.</p>
            </div>
            <h4 className="tour-text fw-bold mt-3">Get Social</h4>
            <div className="icons">
                <a className="tour-footer-icon fs-1 me-3" href="https://www.facebook.com/maruf.ahamed.pro/" target="_blank"><i className="fab fa-facebook-square"></i></a>
                <a className="tour-footer-icon fs-1 me-3" href="https://twitter.com/DeveloperMaruf1" target="_blank"><i className="fab fa-twitter-square"></i></a>
                <a className="tour-footer-icon fs-1 me-3" href="https://www.instagram.com/maruf.ahamed.pro/" target="_blank"><i className="fab fa-instagram-square"></i></a>
            </div>
        </div>
    );
};

export default FooterColumn1;