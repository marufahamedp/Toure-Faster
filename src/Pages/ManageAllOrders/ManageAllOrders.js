import React, { useEffect, useState } from "react";
import AllOrder from "../AllOrder/AllOrder";

const ManageAllOrders = () => {
   const [orders, setOrders] = useState([])
    useEffect(()=>{
      fetch(`https://desolate-bastion-15635.herokuapp.com/orders`)
      .then(res=>res.json())
      .then(data=>setOrders(data));
    }, [orders])
    return (
        <div className="my-4">

            {
                orders.length == 0 ? <div>
                <div className="text-center p-5">
                    <div className="p-5 border shadow">
                        <h1>Your Order is empty</h1>
                        <span>Please book a ture</span>
                    </div>
                </div>
            </div> : <div>
            {
                orders.map(order=> <AllOrder
                key={order._id}
                orders={orders}
                order={order}
                ></AllOrder>
                )
            }
            </div>
            }
           
        </div>
    );
};
export default ManageAllOrders;