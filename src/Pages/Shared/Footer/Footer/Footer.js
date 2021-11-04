import React from 'react';
import FooterColumn1 from '../FooterColumn1/FooterColumn1';
import FooterColumn2 from '../FooterColumn2/FooterColumn2';
import FooterColumn3 from '../FooterColumn3/FooterColumn3';
import FooterColumn4 from '../FooterColumn4/FooterColumn4';

const Footer = () => {
    return (
        <div className="bg-dark pt-3">
            <div className="container pt-3">
                <div className="row">
                    <div className="col-lg-3">
                        <FooterColumn1></FooterColumn1>
                    </div>
                    <div className="col-lg-3">
                        <FooterColumn2></FooterColumn2>
                    </div>
                    <div className="col-lg-3">
                        <FooterColumn3></FooterColumn3>
                    </div>
                    <div className="col-lg-3">
                        <FooterColumn4></FooterColumn4>
                    </div>
                </div>
                <div className="text-center py-3 mt-3 border-top">
                    <span className="text-light">
                        © 2021 Tour Faster || All Rights Reserved
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Footer;