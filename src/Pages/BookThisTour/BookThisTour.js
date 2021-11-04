import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hook/useAuth';
import './BookThisTour.css'
const BookThisTour = (props) => {

    const { tourName, Price, coverimgURL, _id ,thambleimgURL } = props.services;

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();

    const [defaultValue, setDefaultValue] = useState({});


    const onSubmit = data => {
        fetch('https://desolate-bastion-15635.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Tour Booked');
                    reset();
                }
              
            })
            
    };

    useEffect(() => {
        setDefaultValue({ orderStatus: 'Pending', OrderID: `${_id}`, Price: `${Price}`, tourName: `${tourName}`, coverimgURL: `${coverimgURL}`, thambleimgURL: `${thambleimgURL}` })
    }, []);
    useEffect(() => {
        reset(defaultValue)
    }, [defaultValue]);




    return (
        <div>


                {/* book this tour  */}

            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="mt-3 text-center fw-bold">Book This Toure</h3>
                    {props.id}
                <input className="w-100 mb-2" defaultValue={user.displayName} {...register("name", { required: true })} />
                {errors.name && <span className="error">This field is required</span>}
                <input className="w-100 mb-2" defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                <input className="w-100 mb-2" placeholder="Address"  {...register("address", { required: true })} />
                {errors.address && <span className="error">This field is required</span>}
                <input className="w-100 mb-2" placeholder="City"  {...register("city", { required: true })} />
                {errors.city && <span className="error">This field is required</span>}
                <input className="w-100 mb-2" placeholder="phone number"  {...register("phone", { required: true })} />
                {errors.phone && <span className="error">This field is required</span>}

               <div className="d-flex justify-content-center">
               <input type="submit" />
               </div>
            </form>
        </div>
    );
};

export default BookThisTour;