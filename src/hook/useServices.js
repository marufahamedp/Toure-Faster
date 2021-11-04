import { useEffect, useState } from "react";

const useServices = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
      fetch(`https://desolate-bastion-15635.herokuapp.com/services`)
      .then(res=>res.json())
      .then(data=>setServices(data));
    }, [services])
    return {
        services,
        setServices
    }
};

export default useServices;