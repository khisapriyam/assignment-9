import React, { useEffect, useState } from 'react';
import bgImage from '../../Images/Image/first.png';
import './Home.css';
import {Navbar, Nav,NavDropdown, Form, FormControl, Button, CardDeck, Card} from 'react-bootstrap'
import { Link, Router } from 'react-router-dom';
import logo from '../../Images/Logo.png'
import sajek from '../../Images/Image/Sajek.png'
import sree from '../../Images/Image/Sreemongol.png'
import sundor from '../../Images/Image/sundorbon.png'
import Sajek from '../Sajek/Sajek';
import TouristPlaces from '../TouristPlaces/TouristPlaces';
import ClickToExplore from '../ClickToExplore/ClickToExplore';
import Login from '../Login/Login';
import Heading from '../Heading/Heading';
import searchBtn from '../../../src/download.png'

const Home = () => {
    

    return (
        <div style={{ backgroundImage: ` linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${bgImage})`}} className="bg-image">
            {/* <Heading></Heading> */}
            <nav className="nav">
               
                <Navbar bg="" expand="lg">
                    <Navbar.Brand href="#home">
                        <img src={logo}/>
                    </Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Form inline>
                            <FormControl id="searchBtn" type="text" placeholder="Search Your Destination..." className="mr-sm-2" />
                        </Form>
                        <Nav className="mr-auto " >
                            
                            <Nav.Link id="heading1" href="/news">New</Nav.Link>
                            <Nav.Link id="heading2"  href="#destination">Destination</Nav.Link>
                            <Nav.Link id="heading3"  href="#blog">Blog</Nav.Link>
                            <Nav.Link id="heading4"  href="#contact">Contact</Nav.Link>
                        </Nav>
                        <Button variant="warning" id="login-btn">Log In</Button>{' '}
                    </Navbar.Collapse>
                </Navbar>
            </nav>
            {/* <ClickToExplore></ClickToExplore> */}
            
            {/* tourist place starts here */}
            <div className="cards">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                           <div className= "category">
                           <Nav.Link  href="/sajek">
                                <img src={sajek} />
                                <h2 className="placeName">Sajek</h2> 
                            </Nav.Link>
                           </div>
                        </div>
                        <div className="col-md-4">
                            <div className="category">
                                <nav>
                                    <a href="/sreemongol">
                                        <img  src={sree} />
                                    </a>
                                    <h2 className = "placeName">Sreemongol </h2>
                                </nav>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className= "category">
                                <nav>
                                    <a href="/sundorbon">
                                        <img src={sundor}/>
                                    </a>
                                    <h2 className = "placeName">Sundorbon</h2>
                                </nav>
                                
                            </div>
                        </div>  
                    </div>
                </div>
            </div> 
            <div className="button">
                <a href="#" className="previous round">&#8249;</a>""
                <a href="#" className="next round">&#8250;</a>
                <a href=""></a>
            </div>

            
        </div>
            
    );
    
};

export default Home;