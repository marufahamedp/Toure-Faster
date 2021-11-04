import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hook/useAuth';
import logo from '../../../../Images/logo.png';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import './PrimaryHeader.css'
const PrimaryHeader = () => {

    const { user, logOut } = useAuth();
    return (
        <div>

            {/* Large Device Menu */}

            {
                user.email && <Navbar className="d-none d-lg-block" bg="dark" variant="dark" >
                    <Container>
                        <Navbar.Brand as={Link} to="/home" >
                            <img src={logo} alt="" className="w-100" />
                        </Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>


                            <Nav.Link as={Link} to="/tours">Tours</Nav.Link>
                            <Nav.Link as={Link} to="/addanewservices">Add New Services</Nav.Link>
                            <Nav.Link as={Link} to="/manageallorders">Manage All Orders</Nav.Link>
                            <Nav.Link as={Link} to="/myorders">My Orders</Nav.Link>
                        </Nav>
                        <Nav className="me-auto">

                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <NavDropdown title={user.displayName} id="offcanvasNavbarDropdown">
                                    <ProfileMenu></ProfileMenu>
                                </NavDropdown>
                            </Nav>
                            <div className="userIconStyle">
                                <img className="userimg" src={user.photoURL} alt="" />
                            </div>
                        </Nav>
                    </Container>
                </Navbar>

            }
            {
                !user.email && <Navbar className="d-none d-lg-block" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand as={Link} to="/home">
                            <img src={logo} alt="" className="w-100" />
                        </Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>


                            <Nav.Link as={Link} to="/tours">Tours</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            }



            {/* Mobile Menu */}

            <Navbar className="d-lg-none" bg="dark" variant="dark" expand={false}>
                <Container fluid>
                    <Navbar.Brand as={Link} to="/home">
                        <img src={logo} alt="" className="w-100" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Tour-Faster</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            {
                                user.email && <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link className="text-dark" as={Link} to="/home">Home</Nav.Link>
                                    <Nav.Link className="text-dark" as={Link} to="/about">About</Nav.Link>
                                    <Nav.Link className="text-dark" as={Link} to="/contact">Contact</Nav.Link>
                                    <Nav.Link className="text-dark" as={Link} to="/tours">Tours</Nav.Link>
                                    <Nav.Link className="text-dark" as={Link} to="/addanewservices">Add New Services</Nav.Link>
                                    <Nav.Link className="text-dark" as={Link} to="/manageallorders">Manage All Orders</Nav.Link>
                                    <Nav.Link className="text-dark" as={Link} to="/myorders">My Orders</Nav.Link>
                                    <Nav.Link className="text-dark" as={Link} to="/login" onClick={logOut}>Log Out</Nav.Link>

                                </Nav>
                            }
                            {
                                !user.email && <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link className="text-dark" as={Link} to="/home">Home</Nav.Link>
                                    <Nav.Link className="text-dark" as={Link} to="/about">About</Nav.Link>
                                    <Nav.Link className="text-dark" as={Link} to="/contact">Contact</Nav.Link>


                                    <Nav.Link className="text-dark" as={Link} to="/tours">Tours</Nav.Link>
                                    <Nav.Link className="text-dark" as={Link} to="/login">Login</Nav.Link>
                                    <Nav.Link className="text-dark" as={Link} to="/register">Register</Nav.Link>
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
    );
};

export default PrimaryHeader;