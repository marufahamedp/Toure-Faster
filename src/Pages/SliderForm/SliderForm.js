import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hook/useAuth';
import useServices from '../../hook/useServices';
import SliderFormService from './SliderFormService';

const SliderForm = () => {
  const { user } = useAuth()
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  const { services } = useServices();

  return (
    <div>

      <div className=" p-3 rounded">
        <h3 className="fw-bold my-3">PLAN A TOUR NOW</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="">

            <input placeholder="Enter your name" className=" genaralInput p-2" defaultValue={user.displayName} type="name" {...register("name")} />
            <input placeholder="Enter your email" className="genaralInput p-2" defaultValue={user.email} type="email" {...register("email")} />
            <input className=" p-2 genaralInput" type="date" {...register("date")} />
            <select className="genaralInput p-2" {...register("selects")}>
              {
                services.map(service => <SliderFormService
                key={service._id}
                  service={service}
                ></SliderFormService>)
              }
            </select>

          </div>
          <div className="d-flex justify-content-center mt-3">
            <div><input type="submit" /></div>
          </div>
        </form>
      </div>

    </div>
  );
};

export default SliderForm;