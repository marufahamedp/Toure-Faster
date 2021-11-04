import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
const AddDestinations = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/destinations', data)
        .then(res => {
            if (data.destinationName) {
                alert('data inserted');
                reset();
            }
        })
   
    };

    return (
        <div>
             <div className="container  my-4">



                {/* add destination  */}


             <form onSubmit={handleSubmit(onSubmit)}>
                 <div className="row">
                     <div className="col-lg-8">
                    <label htmlFor="">Destination Name</label>
                     <input placeholder="Destination Name" className="genaralInput" {...register("destinationName")} />
                     <label htmlFor="">Destination Descriptions</label>
                     <textarea placeholder="Destination Descriptions" rows="10" className="genaralInput"  {...register("destinationDiscription")} />
                     </div>
                     <div className="col-lg-4">
                     <label htmlFor="">Destination Profile Image URL</label>
                     <input placeholder="Profile Image URL" className="genaralInput" {...register("destinationProfileImgUrl", { required: true })} />
                     <div className="d-flex justify-content-center mt-5">
                     <input type="submit" value="Add Destination" />
                     </div>
                     </div>
                 </div>
 
  </form>
             </div>
        </div>
    );
};

export default AddDestinations;