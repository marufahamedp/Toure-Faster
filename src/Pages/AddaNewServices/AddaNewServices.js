import axios from 'axios';
import React, { useRef } from 'react';
import { useForm } from "react-hook-form";
import './AddaNewServices.css';
const AddaNewServices = () => {
    const { register, handleSubmit, reset, formState: { errors }  } = useForm();
    const onSubmit = data => {
        axios.post('https://desolate-bastion-15635.herokuapp.com/services', data)
            .then(res => {
                if (data.tourName) {
                    alert('data inserted');
                    reset();
                }
            })
       
    };
    return (
        <div className="container">
            <div className="text-center my-4">
                <h1>ADD A NEW TOUR SERVICE</h1>
            </div>


            {/* add service form  */}

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row addtoursforms">
                    <div className="col-lg-8">
                        <div className="mb-4">
                        <label htmlFor="tourName" className="d-block fs-4  mb-1">Toure Name</label>
                        <input placeholder="Tour Name" className="fs-4 w-100 genaralInput" {...register("tourName", { required: true })} />
                        {errors.tourName && <span className="error">This field is required</span>}
                        </div>
                      <div className="mb-4">
                      <label htmlFor="" className="d-block fs-4 mb-1">Total Cost</label>
                        <input placeholder="Price" className="d-block w-100 genaralInput" type="number" {...register("Price", { required: true })} />
                        {errors.Price && <span className="error">This field is required</span>}
                      </div>
                        <div className="mb-4">
                        <label htmlFor="" className="d-block fs-4 mb-1">Short Description</label>
                        <textarea rows="5" placeholder="Short Description" className="d-block w-100 genaralInput" {...register("shortDescription", { required: true })} />
                        {errors.shortDescription && <span className="error">This field is required</span>}
                        </div>
                      <div className="mb-4">
                      <label htmlFor="" className="d-block fs-4 mb-1">Description Title</label>
                        <input placeholder="Description Title" className="d-block fs-5 w-100 genaralInput" {...register("descriptionTitle", { required: true })} />
                        {errors.descriptionTitle && <span className="error">This field is required</span>}
                      </div>
                      <div className="mb-3">
                      <label htmlFor="" className="d-block fs-4 mb-1">Toure Description</label>
                        <textarea rows="10" placeholder="Description" className="d-block w-100 genaralInput" {...register("description", { required: true })} />
                        {errors.description && <span className="error">This field is required</span>}
                      </div>
                      <div className="a">
                      <label htmlFor="" className="d-block fs-4 mb-1">Stay Time</label>
                        <input placeholder="Stay Time" className="d-block w-100 genaralInput" {...register("stayTime", { required: true })} />
                        {errors.stayTime && <span className="error">This field is required</span>}
                      </div>
                    </div>
                    <div className="col-lg-4">
                    <div className="mb-3">
                    <label htmlFor="" className="d-block fs-5 mb-1">Location</label>
                        <input placeholder="Location" className="d-block w-100 genaralInput" {...register("location", { required: true })} />
                        {errors.location && <span className="error">This field is required</span>}
                    </div>
                      <div className="mb-3">
                      <label htmlFor="" className="d-block fs-5 mb-1">Departure Time</label>
                        <input placeholder="Departure Time" className="d-block w-100 genaralInput" {...register("departureTime", { required: true })} />
                        {errors.departureTime && <span className="error">This field is required</span>}
                      </div>
                       <div className="mb-3">
                       <label htmlFor="" className="d-block fs-5 mb-1">Return Time</label>
                        <input placeholder="Return Time" className="d-block w-100 genaralInput" {...register("returnTime", { required: true })} />
                        {errors.returnTime && <span className="error">This field is required</span>}
                       </div>
                       <div className="mb-3">
                       <label htmlFor="" className="d-block fs-5 mb-1">Included</label>
                        <input placeholder="Included" className="d-block w-100 genaralInput" {...register("included", { required: true })} />
                        {errors.included && <span className="error">This field is required</span>}
                       </div>
                       <div className="mb-3">
                       <label htmlFor="" className="d-block fs-5 mb-1">Not Incluted</label>
                        <input placeholder="Not Incluted" className="d-block w-100 genaralInput" {...register("notIncluted")} />
                        {errors.notIncluted && <span className="error">This field is required</span>}
                       </div>
                       <div className="mb-3">
                       <label htmlFor="" className="d-block fs-5 mb-1">Thamble Image URL</label>
                        <input placeholder="imgURL" className="d-block w-100 genaralInput" {...register("thambleimgURL", { required: true })} />
                        {errors.thambleimgURL && <span className="error">This field is required</span>}
                       </div>
                       <div className="mb-3">
                       <label htmlFor="" className="d-block fs-5 mb-1">Cover Image URL</label>
                        <input placeholder="imgURL" className="d-block w-100 genaralInput" {...register("coverimgURL")} />
                        {errors.coverimgURL && <span className="error">This field is required</span>}
                       </div>
                       <div className="mb-3">
                       <label htmlFor="" className="d-block fs-5 mb-1">Gallery Image One</label>
                        <input placeholder="Gallery Image One" className="d-block w-100 genaralInput" {...register("galleryImage1")} />
                       </div>
                        <div className="mb-3">
                        <label htmlFor="" className="d-block fs-5 mb-1">Gallery Image Tow</label>
                        <input placeholder="Gallery Image Tow" className="d-block w-100 genaralInput" {...register("galleryImage2")} />
                        </div>
                        <div className="mb-3">
                        <label htmlFor="" className="d-block fs-5 mb-1">Gallery Image Three</label>
                        <input placeholder="Gallery Image Three" className="d-block w-100 genaralInput" {...register("galleryImage3")} />
                        </div>
                    </div>
                </div>


              <div className="my-3">
              <input type="submit" value="Add Service" />
              </div>
            </form>
        </div>
    );
};

export default AddaNewServices;