import React from 'react';
import { useForm } from "react-hook-form"
import useAuth from '../../hook/useAuth';
import { useHistory, useLocation } from 'react-router';
import './Login.css';
import logo from '../../Images/logo-dark.png';
import { Link } from 'react-router-dom';
const Login = () => {
  const { singInUsingGoogle, user, singInwithEpass, error } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    singInwithEpass(data.email, data.password)
      .then(result => {

        if (error) {
          history.push(redirect_uri);
        }
      })
  };

  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || '/home'
  const handelGooglesingin = () => {
    singInUsingGoogle()
      .then(result => {
        history.push(redirect_uri);
      })
  }



  return (
    <div className="a">

      {/* handle error */}


      {
        error && <div className="errors d-flex justify-content-center mt-1 bg-danger">
          <span className="fs-4 text-light">{error.slice(5)}</span>
        </div>
      }
      <div className="container">

        <div className="row d-flex justify-content-center">
          <div className="col-lg-4">
            <div className="shadow my-5 p-4 rounded">
              <div className="dark-logo pt-3 d-flex justify-content-center">
                <img src={logo} alt="" className="" />
              </div>
              <div className="">

                {/* login form  */}

                <form className="form-design" onSubmit={handleSubmit(onSubmit)}>
                  <div className="text-input">
                    <input type="email" placeholder="Enter your email" id="email" {...register("email", { required: true })} />
                    <label htmlFor="email">Email</label>
                  </div>

                  <div className="text-input">
                    <input type="password" id="password" placeholder="Enter your password" type="password" {...register("password", { required: true, min: 18, max: 99 })} />
                    <label htmlFor="password">Password</label>
                  </div>

                  <div className="d-flex justify-content-center my-4">
                    <input type="submit" value="Log In" />
                  </div>
                  <div className="a">
                    <div className="text-center mt-4">
                      <p>-------------- OR --------------</p>
                    </div>

                    <div className="text-center loginwth-g border">
                      <button onClick={handelGooglesingin} className="btn fs-5 fw-bold"><i className="fab fa-google text-warning"></i> Log in with Google</button>
                    </div>
                    <div className="footer border my-4 mt-5">
                      <div className="p-2 text-center">
                        <span className="a">Don't have an account? <Link to="/register">Register</Link></span>
                      </div>
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

export default Login;