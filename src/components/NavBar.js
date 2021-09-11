import React, { useState, Component } from 'react'
import './NavBar.css';
import './NavBar.scss';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined"
import HomeIcon from '@material-ui/icons/Home';
import { Avatar } from '@material-ui/core';
import *as ReactBootStrap from "react-bootstrap";
import { Link } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import $ from 'jquery';

import { Button, Modal, Navbar } from 'react-bootstrap';



function MyVerticallyCenteredModal(props) {
    var LoginModalController = {
        tabsElementName: ".logmod__tabs li",
        tabElementName: ".logmod__tab",
        inputElementsName: ".logmod__form .input",
        hidePasswordName: ".hide-password",

        inputElements: null,
        tabsElement: null,
        tabElement: null,
        hidePassword: null,

        activeTab: null,
        tabSelection: 0, // 0 - first, 1 - second

        findElements: function () {
            var base = this;

            base.tabsElement = $(base.tabsElementName);
            base.tabElement = $(base.tabElementName);
            base.inputElements = $(base.inputElementsName);
            base.hidePassword = $(base.hidePasswordName);

            return base;
        },

        setState: function (state) {
            var base = this,
                elem = null;

            if (!state) {
                state = 0;
            }

            if (base.tabsElement) {
                elem = $(base.tabsElement[state]);
                elem.addClass("current");
                $("." + elem.attr("data-tabtar")).addClass("show");
            }

            return base;
        },

        getActiveTab: function () {
            var base = this;

            base.tabsElement.each(function (i, el) {
                if ($(el).hasClass("current")) {
                    base.activeTab = $(el);
                }
            });

            return base;
        },

        addClickEvents: function () {
            var base = this;

            base.hidePassword.on("click", function (e) {
                var $this = $(this),
                    $pwInput = $this.prev("input");

                if ($pwInput.attr("type") == "password") {
                    $pwInput.attr("type", "text");
                    $this.text("Hide");
                } else {
                    $pwInput.attr("type", "password");
                    $this.text("Show");
                }
            });

            base.tabsElement.on("click", function (e) {
                var targetTab = $(this).attr("data-tabtar");

                e.preventDefault();
                base.activeTab.removeClass("current");
                base.activeTab = $(this);
                base.activeTab.addClass("current");

                base.tabElement.each(function (i, el) {
                    el = $(el);
                    el.removeClass("show");
                    if (el.hasClass(targetTab)) {
                        el.addClass("show");
                    }
                });
            });

            base.inputElements.find("label").on("click", function (e) {
                var $this = $(this),
                    $input = $this.next("input");

                $input.focus();
            });

            return base;
        },

        initialize: function () {
            var base = this;

            base.findElements().setState().getActiveTab().addClickEvents();
        }
    };

    $(document).ready(function () {
        LoginModalController.initialize();
    });
    const [modalShow, setModalShow] = React.useState(false);
    const handleClose = () => setModalShow(false);
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered

        >

            <div className="logmod">
                <div className="logmod__wrapper">
                    <span className="logmod__close">Close</span>
                    <div className="logmod__container">
                        <ul className="logmod__tabs">
                            <li data-tabtar="lgm-2"><a href="#">Login</a></li>
                            <li data-tabtar="lgm-1"><a href="#">Sign Up</a></li>
                        </ul>
                        <div className="logmod__tab-wrapper">
                            <div className="logmod__tab lgm-1">
                                <div className="logmod__heading">
                                    <span className="logmod__heading-subtitle">Enter your personal details <strong>to create an acount</strong></span>
                                </div>
                                <div className="logmod__form">
                                    <form accept-charset="utf-8" action="#" className="simform">
                                        <div className="sminputs">
                                            <div className="input full">
                                                <label className="string optional" for="user-name">Email*</label>
                                                <input className="string optional" maxlength="255" id="user-email" placeholder="Email" type="email" size="50" />
                                            </div>
                                        </div>
                                        <div className="sminputs">
                                            <div className="input string optional">
                                                <label className="string optional" for="user-pw">Password *</label>
                                                <input className="string optional" maxlength="255" id="user-pw" placeholder="Password" type="text" size="50" />
                                            </div>
                                            <div className="input string optional">
                                                <label className="string optional" for="user-pw-repeat">Repeat password *</label>
                                                <input className="string optional" maxlength="255" id="user-pw-repeat" placeholder="Repeat password" type="text" size="50" />
                                            </div>
                                        </div>
                                        <div className="simform__actions">
                                            <input className="sumbit" name="commit" type="sumbit" value="Create Account" />
                                            <span className="simform__actions-sidetext">By creating an account you agree to our <a className="special" href="#" target="_blank" role="link">Terms & Privacy</a></span>
                                        </div>
                                    </form>
                                </div>
                                <div className="logmod__alter">
                                    <div className="logmod__alter-container">
                                        <a href="#" className="connect facebook">
                                            <div className="connect__icon">
                                                <i className="fa fa-facebook"></i>
                                            </div>
                                            <div className="connect__context">
                                                <span>Create an account with <strong>Facebook</strong></span>
                                            </div>
                                        </a>

                                        <a href="#" className="connect googleplus">
                                            <div className="connect__icon">
                                                <i className="fa fa-google-plus"></i>
                                            </div>
                                            <div className="connect__context">
                                                <span>Create an account with <strong>Google+</strong></span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="logmod__tab lgm-2">
                                <div className="logmod__heading">
                                    <span className="logmod__heading-subtitle">Enter your email and password <strong>to sign in</strong></span>
                                </div>
                                <div className="logmod__form">
                                    <form accept-charset="utf-8" action="#" class="simform">
                                        <div className="sminputs">
                                            <div className="input full">
                                                <label className="string optional" for="user-name">Email*</label>
                                                <input className="string optional" maxlength="255" id="user-email" placeholder="Email" type="email" size="50" />
                                            </div>
                                        </div>
                                        <div className="sminputs">
                                            <div className="input full">
                                                <label className="string optional" for="user-pw">Password *</label>
                                                <input className="string optional" maxlength="255" id="user-pw" placeholder="Password" type="password" size="50" />
                                                <span className="hide-password">Show</span>
                                            </div>
                                        </div>
                                        <div className="simform__actions">
                                            <input className="sumbit" name="commit" type="sumbit" value="Log In" />
                                            <span className="simform__actions-sidetext"><a class="special" role="link" href="#">Forgot your password?<br />Click here</a></span>
                                        </div>
                                    </form>
                                </div>
                                <div className="logmod__alter">
                                    <div className="logmod__alter-container">
                                        <a href="#" className="connect facebook">
                                            <div className="connect__icon">
                                                <i className="fa fa-facebook"></i>
                                            </div>
                                            <div className="connect__context">
                                                <span>Sign in with <strong>Facebook</strong></span>
                                            </div>
                                        </a>
                                        <a href="#" className="connect googleplus">
                                            <div className="connect__icon">
                                                <i className="fa fa-google-plus"></i>
                                            </div>
                                            <div className="connect__context">
                                                <span>Sign in with <strong>Google+</strong></span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Modal>
    );
}


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
