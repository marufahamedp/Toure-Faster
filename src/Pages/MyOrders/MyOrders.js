import React, { useEffect, useState } from 'react';
import useAuth from '../../hook/useAuth';
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(`https://desolate-bastion-15635.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [orders])

    const filterOrders = orders.filter(order => order.email == user?.email)

    return (
        <div className="my-4">
            {
                filterOrders.length == 0 ? <div>
                    <div className="text-center p-5">
                        <div className="p-5 border shadow">
                            <h1>Your Order is empty</h1>
                            <span>Please book a ture</span>
                        </div>
                    </div>
                </div> : <div>
                    {
                        filterOrders.map(order => <MyOrder
                            key={order._id}
                            order={order}
                        ></MyOrder>)
                    }
                </div>
            }


        </div>
    );
};

export default MyOrders;