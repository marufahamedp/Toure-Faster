import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ToureSliderProduct from "../ToureSliderProduct/ToureSliderProduct";
const TourServicesSlider = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
      fetch(`https://desolate-bastion-15635.herokuapp.com/services`)
      .then(res=>res.json())
      .then(data=>setServices(data));
    }, [])
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide:2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <div className="container d-flex justify-content-center align-items-center">
           <Carousel responsive={responsive}>
            {
                services.map(service=> <ToureSliderProduct
                key={service._id}
                service={service}
                ></ToureSliderProduct>)
            }
</Carousel>
        </div>
    );
};

export default TourServicesSlider;