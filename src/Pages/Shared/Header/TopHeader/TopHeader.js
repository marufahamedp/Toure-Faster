import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hook/useAuth';
import './TopHeader.css';

const TopHeader = () => {
    const { user, logOut } = useAuth();

    return (
        <div className="top-background">
            <div className="d-none d-lg-block container">

                <div className="row">

                    {/* contact section  */}

                    <div className="col-6 d-flex align-items-center">
                        <a className="me-2 topIcon" href="https://www.facebook.com/maruf.ahamed.pro/" target="_blank"><i className="fab fa-facebook-square"></i></a>
                        <a className="me-2 topIcon" href="https://twitter.com/DeveloperMaruf1"><i className="fab fa-twitter-square" target="_blank"></i></a>
                        <a className="me-2 topIcon" href="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin"></i></a>

                        <span className="me-2 fw-bold ms-4 d-flex align-items-center"><i className="fas fa-phone-alt fs-5"></i> </span>
                        <span className="me-2 ">+8801315560101</span>
                        <span className="me-2 fw-bold d-flex align-items-center"><i className="fas fa-envelope fs-5"></i></span>
                        <span className="me-2">marufledp.info@gmail.com</span>
                    </div>

                    <div className="col-6 d-flex align-items-center justify-content-end">
                        {
                            !user.email && <div className="d-flex">
                                <Link data-text="Log in" className="button my-1 button-link" to="/login"><span>Log in</span></Link>
                                <Link data-text="Register" className="button my-1 button-link ms-3" to="/register"><span>Register</span></Link>
                            </div>
                        }
                        {
                            user.email && <div className="d-flex align-items-center">
                                <Link data-text="Log Out" className=" button-link" onClick={logOut} to="/login"><button className="button"><span>Log Out</span></button></Link>
                            </div>
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TopHeader;