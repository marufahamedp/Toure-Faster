import { useEffect, useState } from "react";
import { useParams } from "react-router";

const useSingleDesti = () => {
    const { destinationId } = useParams();
    const [singleDesti, setSingleDesti] = useState([]);
    useEffect(()=>{
      fetch(`https://desolate-bastion-15635.herokuapp.com/destinations/${destinationId}`)
      .then(res=>res.json())
      .then(data=>setSingleDesti(data));
    }, [])
    return {
        singleDesti,
        setSingleDesti
    }
};

export default useSingleDesti;