import React from 'react';
import useAuth from '../../../hook/useAuth';
import useServices from '../../../hook/useServices';
import MyOrder from '../../MyOrder/MyOrder';

const Profile = () => {
    const { user } = useAuth();
    const {orders} = useServices();
    return (
        <div>
            <div className="cover">

            </div>
            <div className="container">
                <div className="profileImg d-flex justify-content-center my-2">
                    <img src={user.photoURL} alt="" />
                </div>
                <div className="a">

                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">About</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Running Services</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div className="my-4">
                            <p>Name : {user.displayName}</p>
                            <p>email : {user.email}</p>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                            s
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Profile;