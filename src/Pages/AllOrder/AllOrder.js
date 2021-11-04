import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import { useHistory, useLocation } from 'react-router';
import axios from 'axios';
const AllOrder = (props) => {

    const { user } = useAuth();
    const { _id, tourName, coverimageURL, thambleimgURL, OrderID, orderStatus, Price, email } = props.order;
    const location = useLocation();
  const history = useHistory();

//   handle approve btn


    const handelApprove = e => {
        const proceed = window.confirm('Are you sure, you want to Approve this order?')
        const url = `https://desolate-bastion-15635.herokuapp.com/orders/${_id}`;
        
          if(proceed){
            axios.put(url, {
                orderStatus: "Approved"
              })
             
          }
        
    }

    // handle delete button 
    
    const handelDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?')
        if(proceed){
         const url =`https://desolate-bastion-15635.herokuapp.com/orders/${id}`
         fetch(url, {
             method: 'DELETE',
         })
         .then(res => res.json())
         .then(data => {
             if(data.deletedCount > 0){
                 alert('Deleted successfully')

             }
         })
        }
    }

    return (
        <div>
            <div className="container">
                <div className="">
                    <div className="">
                        <div className="border border-3 border-warning p-3 mb-4">
                            <div className="row">
                                <div className="col-lg-8 d-flex align-items-center">
                                    <div className="img">
                                        <img className="" width="150" src={thambleimgURL} alt="" />
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center ms-3">
                                        <div className="a">
                                            <h2 className="m-0">{tourName}</h2>
                                            <p className="mt-2 mb-2 fs-5">{Price}/person</p>
                                            <p className="m-0">Order Status : <span className="text-danger">{orderStatus}</span></p>
                                            <Link to={`/services/${OrderID}`} className="my-2 btn btn-warning">View Tour</Link >
                                        </div>

                                    </div>
                                </div>

                                {/* buttons  */}



                                <div className="col-lg-4 d-flex align-items-center">
                                    <div className="ms-5 mt-4 mt-lg-0">
                                        <button onClick={handelApprove} className="btn btn-success ms-4">Approve Order</button>
                                        <button onClick={()=> handelDelete(_id)} className="btn btn-danger ms-4 mt-3"><i className="fas fa-trash"></i> Delete Order</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-4">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllOrder;