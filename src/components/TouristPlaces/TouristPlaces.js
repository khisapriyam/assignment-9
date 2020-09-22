import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import './TouristPlaces.css'

import bgImage from '../../Images/Image/first.png';
//import header from '../../Images/Image/header.png'
// import './Home.css';
import {Navbar, Nav,NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import { Link, Router } from 'react-router-dom';
import logo from '../../Images/Logo.png'
import sajek from '../../Images/Image/Sajek.png'
import sree from '../../Images/Image/Sreemongol.png'
import sundor from '../../Images/Image/sundorbon.png'

const TouristPlaces = (props) => {
    //console.log(props)
    //const {title, image} = props.place;
    return (
        <div style={{ backgroundImage: ` linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${bgImage})`}} className="bg-image">
            <nav className="nav">
               
                <Navbar bg="" expand="lg">
                <Navbar.Brand href="#home">
                <img className="logo" src={logo}/>
                </Navbar.Brand>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Form inline>
                    <FormControl type="text" placeholder="Search Your Destination..." className="mr-sm-2" />
                </Form>
                <Nav className="mr-auto " >
                    
                    <Nav.Link id="heading1" href="#news">New</Nav.Link>
                    <Nav.Link id="heading2"  href="#destination">Destination</Nav.Link>
                    <Nav.Link id="heading3"  href="#blog">Blog</Nav.Link>
                    <Nav.Link id="heading4"  href="#contact">Contact</Nav.Link>
                </Nav>
                <Button variant="warning" id="login-btn">Log In</Button>{' '}

                </Navbar.Collapse>
            </Navbar>
            </nav>
            {/* tourist place starts here */}
            <div className="cards">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                           <div className= "cat">
                                <img src={sajek} />
                                <h2 className = "placeName">Sajek <br/><button onClick={() =>props.handleAddPlace(props.place)}>Book Now</button></h2>    
                           </div>
                        </div>
                        <div className="col-md-4">
                            <div className="cat">
                                <img  src={sree} />
                                <h2 className = "placeName">Sreemongol <br/><button onClick={() =>props.handleAddPlace(props.place)}>Book Now</button></h2>
                                </div>
                            </div>
                        <div className="col-md-4">
                            <div className= "cat">
                                <img  src={sundor} />
                                <h2 className = "placeName">Sundorbon <br/><button onClick={() =>props.handleAddPlace(props.place)}>Book Now</button></h2>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
            <div>
                {/* slider button starts here */}
                <br/>
                <a href="#" className="previous round">&#8249;</a>""
                <a href="#" className="next round">&#8250;</a>
            </div>
        {/* // <div style={{ backgroundImage: ` linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${bgImage})`}} className="bg-image">
            
            
        //     <div className="tourist-place">
        //         <div>
        //             <h4>{title}</h4>
        //         </div>
        //         <div>
        //             <img src={image} alt=""/>
        //         </div>
               
                
        //     </div> */}
        </div>

    
        
    );
};

export default TouristPlaces;