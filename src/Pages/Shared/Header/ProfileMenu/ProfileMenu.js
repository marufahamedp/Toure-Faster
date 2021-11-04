import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react'
import { Container, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hook/useAuth';

import './ProfileMenu.css';

const ProfileMenu = () => {
    const { user, logOut } = useAuth();

    return (
        <div>
            <NavDropdown.Item as={Link} to="/profile"><i className="fas fa-user"></i> Profile</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/dashboard"><i className="fas fa-th-large"></i> Dashboard</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} className="button-link" onClick={logOut} to="/login"><i className="fas fa-sign-out-alt"></i> Log Out</NavDropdown.Item>
        </div>
    );
};

export default ProfileMenu;