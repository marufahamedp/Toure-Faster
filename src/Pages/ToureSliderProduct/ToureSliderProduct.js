import React from 'react';
import './ToureSliderProduct.css'
const ToureSliderProduct = (props) => {
    const {tourName, thambleimgURL} = props.service;
    return (
        <div>
           <div className="a">
               <div className="p-5">
                   <img className="w-100" src={thambleimgURL} alt="" />
               </div>
           <h3 className="product-text p-5">{tourName}</h3>
           </div>
        </div>
    );
};

export default ToureSliderProduct;