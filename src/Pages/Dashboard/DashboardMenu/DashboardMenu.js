import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';
import logo from '../../../Images/logo.png'
import ProfileMenu from '../../Shared/Header/ProfileMenu/ProfileMenu';
const DashboardMenu = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <div>

{/* Large Device Menu */}

{
    user.email && <Navbar className="d-none d-lg-block" bg="danger" variant="dark" >
        <Container>
            <Nav className="m-auto">
                <Nav.Link as={Link} to="/adddestinations">Add Destination</Nav.Link>
                <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                <Nav.Link as={Link} to="/addanewservices">Add New Service</Nav.Link>
                <Nav.Link as={Link} to="/manageallorders">Manage All Orders</Nav.Link>
                <Nav.Link as={Link} to="/manageservices">Manage All Services</Nav.Link>

            </Nav>
        </Container>
    </Navbar>

}



{/* Mobile Menu */}

<Navbar className="d-lg-none" bg="light" expand={false}>
    <Container fluid>
        <Navbar.Brand as={Link} to="/home">Toure-Faster</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
        >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">Mobile Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {
                    user.email && <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link as={Link} to="/adddestinations">Add Destination</Nav.Link>
                <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                <Nav.Link as={Link} to="/addanewservices">Add New Service</Nav.Link>
                <Nav.Link as={Link} to="/manageallorders">Manage All Orders</Nav.Link>
                <Nav.Link as={Link} to="/manageservices">Manage All Services</Nav.Link>

                    </Nav>
                }

                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Offcanvas.Body>
        </Navbar.Offcanvas>
    </Container>
</Navbar>

</div>
        </div>
    );
};

export default DashboardMenu;