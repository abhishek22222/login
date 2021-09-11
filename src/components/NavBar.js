import React, { useState, Component } from 'react'
import './NavBar.css';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined"
import HomeIcon from '@material-ui/icons/Home';
import { Avatar } from '@material-ui/core';
import *as ReactBootStrap from "react-bootstrap";
import { Link } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import MyVerticallyCenteredModal from './Pages/Login/Login';

import { Button, Modal, Navbar } from 'react-bootstrap';


function NavBar() {

    const [modalShow, setModalShow] = React.useState(false);


    return (

        <>

            <div className="Header">
                <Navbar sticky="top" collapseOnSelect expand="lg" className="Head">
                    <ReactBootStrap.Container>
                        <ReactBootStrap.Navbar.Brand to="/home" className="logo">Sona_Space</ReactBootStrap.Navbar.Brand>
                        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                            <ReactBootStrap.Nav className="me-auto">
                                <ReactBootStrap.Nav defaultActiveKey="/home">
                                    <ReactBootStrap.Nav.Link as={Link} to="/home" className="comp" eventKey="/home" ><HomeIcon fontSize="small" />Home</ReactBootStrap.Nav.Link>
                                    <ReactBootStrap.Nav.Link as={Link} to="/companies" className="comp" eventKey="link-2">Companies</ReactBootStrap.Nav.Link>
                                    <ReactBootStrap.Nav.Link as={Link} to="/companies" className="comp" eventKey="link-3">Archives</ReactBootStrap.Nav.Link>


                                    <ReactBootStrap.Nav.Link as={Link} to="/ans" className="icon" eventKey="link-4"><AssignmentTurnedInOutlinedIcon /></ReactBootStrap.Nav.Link>
                                    <ReactBootStrap.Nav.Link as={Link} to="/notifications" className="icon" eventKey="link-5"><NotificationsOutlinedIcon /></ReactBootStrap.Nav.Link>
                                    <ReactBootStrap.Nav.Link as={Link} to="/search" className="searchBar">
                                        <ReactBootStrap.InputGroup className="mb-1">
                                            <ReactBootStrap.InputGroup.Text><SearchIcon /></ReactBootStrap.InputGroup.Text>
                                            <ReactBootStrap.FormControl id="inlineFormInputGroup" placeholder="Search" />
                                        </ReactBootStrap.InputGroup>
                                    </ReactBootStrap.Nav.Link>
                                </ReactBootStrap.Nav>
                            </ReactBootStrap.Nav>
                            <ReactBootStrap.Nav>
                                <ReactBootStrap.Nav.Link as={Link} to="/Question"><button className="addQuestion">Add Question</button></ReactBootStrap.Nav.Link>
                                <ReactBootStrap.Nav.Link onClick={() => setModalShow(true)} className="login" >Login</ReactBootStrap.Nav.Link>
                                <MyVerticallyCenteredModal
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}

                                />
                                <ReactBootStrap.Nav.Link as={Link} to="/profile"><Avatar /></ReactBootStrap.Nav.Link>


                            </ReactBootStrap.Nav>
                        </ReactBootStrap.Navbar.Collapse>
                    </ReactBootStrap.Container>
                </Navbar>
            </div>







        </>
    );
}

export default NavBar;
