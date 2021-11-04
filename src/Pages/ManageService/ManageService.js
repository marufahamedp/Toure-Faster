import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';

const ManageService = (props) => {
    const { user } = useAuth();
    const { tourName, Price, shortDescription, stayTime, _id, thambleimgURL } = props.service;



    const handelDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?')
        if (proceed) {
            if (user.email == 'marufledp.info@gmail.com') {
                const url = `https://desolate-bastion-15635.herokuapp.com/services/${id}`
                fetch(url, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            alert('Deleted successfully')
                        }
                    })
            }
            else {
                alert('Only Maruf Ahamed Can Delete Main Services')
            }
        }
    }


    return (
        <div className="tourShadow">
            <div className="border p-3 mb-5">
                <div className="row">
                    <div className="col-lg-10">
                        <div className="row">
                            <div className="col-lg-2 img">
                                <img src={thambleimgURL} className="w-100" alt="" />
                            </div>
                            <div className="col-lg-10">
                                <h4>{tourName}</h4>
                                <p className="a">{shortDescription.slice(0, 50)}....</p>
                                <p className="a">${Price}/Person</p>
                                <p className="a">{stayTime}</p>
                                <Link className="button my-3" to={`/services/${_id}`}>View More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 d-flex align-items-center">
                        <div className="">
                            <button onClick={() => handelDelete(_id)} className="button">Delete Service</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ManageService;