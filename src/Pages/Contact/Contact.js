import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hook/useAuth';
import moment from 'moment';
import Moment from 'react-moment';
const Contact = () => {
    const currentDateTime = moment()
    const {user} = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        if(data.message){
            alert('Message recived successfully')
            reset()
        }
    };

    return (
        <div className="container">
            <h1 className="text-center fw-bold my-5 border-bottom pb-2">CONTACT US</h1>
           
            <div className="row">
                <div className="col-lg-8">
                    <div className="mt-lg-5">
                        <h2 className="fw-bold text-center my-lg-5">Our Office Location</h2>
                    <ul className="list-group list-group-flush mt-3">
                <li className="list-group-item"><i className="fas fa-location-arrow"></i> Jamgora, Svar, Dhaka</li>
                <li className="list-group-item"><i className="fas fa-phone-alt"></i> +8801315560101</li>
                <li className="list-group-item"><i className="fas fa-mobile-alt"></i> +8801976781492</li>
                <li className="list-group-item mb-2"><i className="fas fa-envelope"></i> marufamdp@gmail.com</li>
            </ul>
            <div className="text-center fw-bold mt-lg-5">
            <Moment>{currentDateTime}</Moment>
            </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-5">
                    <div>
                   <div>


                        {/* contact us form  */}


                   <form className="shadow rounded p-4" onSubmit={handleSubmit(onSubmit)}>
                       <label className="fs-5" htmlFor="">Name : </label>
                    <input placeholder="Enter Your Name" className="genaralInput" defaultValue={user.displayName} {...register("name", { required: true })} />
                    {errors.name && <span className="error">This field is required <br /></span>}
                    
                    <label className="fs-5" htmlFor="">Email : </label>
                    <input defaultValue={user.email} placeholder="Enter Your Email Address" className="genaralInput"  {...register("email", { required: true })} />
                    {errors.email && <span className="error">This field is required <br /></span>}
                    <label className="fs-5" htmlFor="">Message : </label>
                    <textarea placeholder="Write Your Message Here..." rows="5" className="genaralInput" {...register("message", { required: true })} />
                    {errors.message && <span className="error">This field is required</span>}
                    

                 <div className="d-flex justify-content-center my-3">
                 <input type="submit" />
                 </div>
                </form>
                   </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;