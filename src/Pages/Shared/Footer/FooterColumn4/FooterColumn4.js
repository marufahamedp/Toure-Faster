import React from 'react';

const FooterColumn4 = () => {
    return (
        <div>
            <h1 className="tour-text fw-bold">Newsletter</h1>
            <p className="text-light">
                Sing up for our newsletter and get updated about our latest services.
            </p>
            <div>
                <div className="text-input">
                    <input type="email" placeholder="Enter your email" id="email" />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="mt-3 d-flex justify-content-center">
                    <input type="submit" value="Subscribe" />
                </div>
            </div>
        </div>
    );
};

export default FooterColumn4;