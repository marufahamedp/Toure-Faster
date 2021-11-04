import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useParams } from 'react-router';
import BookThisTour from "../BookThisTour/BookThisTour";
import './TourServicesDetails.css'
const TourServicesDetails = () => {
    const { serviceId } = useParams();
    const [services, setServices] = useState([])
    useEffect(() => {
        const url = `https://desolate-bastion-15635.herokuapp.com/services/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
   

    const { tourName, Price, shortDescription, descriptionTitle, description, stayTime, location, departureTime, returnTime, included, notIncluted, coverimgURL, galleryImage1, galleryImage2, galleryImage3, _id } = services;


    return (
        <div>
            <div className="top-slider text-center" style={{
                backgroundImage: `url(${coverimgURL})`,
                backgroundPosition: "center",
                backgroundSize: "auto",
                backgroundRepeat: "no-repeat"
            }}>
                <div className="text-area p-5 d-flex justify-content-center align-items-center">
                    <div className="a">
                        <h1>{tourName}</h1>
                        <p>{description?.slice(0, 200)}</p>
                    </div>
                </div>
            </div>
            <div className="container my-3">
                <div className="row">
                    <div className="col-lg-8">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true"><i className="fas fa-info-circle"></i> Information</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"><i className="fab fa-think-peaks"></i> Tour Plan</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Review</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">

                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="d-flex justify-content-between mt-4">
                                    <h1 className="fw-bold">{tourName}</h1>
                                    <p><span className="fs-3 fw-bold">${Price}</span><span>/per person</span></p>
                                </div>
                                <div className="d-flex">
                                    <span className="me-2 fw-bold"><i className="fas fa-clock"></i> {stayTime}</span>
                                    <span className="me-2 fw-bold"><i className="fas fa-map-marker-alt"></i> {location}</span>
                                </div>
                                <div className="my-4">
                                    <h4>{descriptionTitle}</h4>
                                    <p className="mt-4">{description}</p>
                                </div>
                                <div className="my-5">
                                    <table className="table table-striped table-hover">
                                        <tbody className="">

                                            <tr>
                                                <th scope="row">Location</th>

                                                <td className="text-end">{location}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Departure Time</th>

                                                <td className="text-end">{departureTime}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Return Time</th>

                                                <td className="text-end">{returnTime}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Included</th>

                                                <td className="text-end">{included}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Not Included</th>

                                                <td className="text-end">{notIncluted}</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                                <div className="a">
                                    <h1 className="fw-bold">
                                        From our gallery
                                    </h1>
                                    <p className="my-4">{shortDescription}</p>

                                    <div className="row">
                                        <div className="col-lg-4 d-flex align-items-center justify-content-center">
                                            <div className="img ">
                                                <img className="w-100" src={galleryImage1} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 d-flex align-items-center justify-content-center">
                                            <div className="img ">
                                                <img className="w-100" src={galleryImage2} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 d-flex align-items-center justify-content-center">
                                            <div className="img ">
                                                <img className="w-100" src={galleryImage3} alt="" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>


                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <div className="mt-4">
                                    <h1>Tour Plan</h1>
                                    <div className="d-flex align-items-center">
                                        <div className="circle d-flex align-items-center justify-content-center"><span className="fw-bold fs-2">1</span></div>
                                        <span className="fw-bold fs-5 ms-3">Departure</span>
                                    </div>
                                    <div className="d-flex align-items-center mt-3">
                                        <div className="circle d-flex align-items-center justify-content-center"><span className="fw-bold fs-2">2</span></div>
                                        <span className="fw-bold fs-5 ms-3">Adventure Beggins</span>
                                    </div>
                                    <div className="d-flex align-items-center mt-3">
                                        <div className="circle d-flex align-items-center justify-content-center"><span className="fw-bold fs-2">3</span></div>
                                        <span className="fw-bold fs-5 ms-3">Historical Tour</span>
                                    </div>
                                    <div className="d-flex align-items-center mt-3">
                                        <div className="circle d-flex align-items-center justify-content-center"><span className="fw-bold fs-2">4</span></div>
                                        <span className="fw-bold fs-5 ms-3">Historical Tour</span>
                                    </div>
                                    <div className="d-flex align-items-center mt-3">
                                        <div className="circle d-flex align-items-center justify-content-center"><span className="fw-bold fs-2">5</span></div>
                                        <span className="fw-bold fs-5 ms-3">Return</span>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">

                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4">

                        <BookThisTour
                            key={_id}
                            services={services}
                        ></BookThisTour>
                      
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TourServicesDetails;