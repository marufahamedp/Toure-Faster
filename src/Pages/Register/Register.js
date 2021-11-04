import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import logo from '../../Images/logo-dark.png';
const Register = () => {

    const { registration, error, user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        registration(data.email, data.password, data.name, data.number);
        if (!error.length === 0) {
            alert('succesfully login')
            reset()
        }
        else {
            reset()
        }
    };
    return (
        <div className="a">

            {/* Sow error message */}


            {
                error && <div className="errors d-flex justify-content-center mt-1 bg-danger">
                    <span className="fs-4 text-light">{error.slice(5)}</span>
                </div>
            }

            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-4">
                        <div className="shadow my-5 rounded">
                            <div className="p-3">
                                <div className="a">
                                    <img src={logo} alt="" />
                                </div>

                                {/* register form */}

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="text-input">
                                        <input type="name" placeholder="Enter your name" id="name" {...register("name", { required: true })} />
                                        <label htmlFor="name">Name</label>
                                    </div>
                                    <div className="text-input">
                                        <input type="email" placeholder="Enter your email" id="email" {...register("email", { required: true })} />
                                        <label htmlFor="email">Email</label>
                                    </div>

                                    <div className="text-input">
                                        <input type="password" id="password" placeholder="Enter your password" type="password" {...register("password", { required: true, min: 18, max: 99 })} />
                                        <label htmlFor="password">Password</label>
                                    </div>

                                    <div className="d-flex justify-content-center mt-3">
                                        <input type="submit" />
                                    </div>
                                    <div className="footer border my-4 mt-5">
                                        <div className="p-2 text-center">
                                            <span className="a">Already have an account? <Link to="/login">Log In</Link></span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;