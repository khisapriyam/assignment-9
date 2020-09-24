import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import './TouristPlaces.css'

import bgImage from '../../Images/Image/first.png';
import {Navbar, Nav,NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import { Link, Router } from 'react-router-dom';
import logo from '../../Images/Logo.png'
import sajek from '../../Images/Image/Sajek.png'
import sree from '../../Images/Image/Sreemongol.png'
import sundor from '../../Images/Image/sundorbon.png'
import Home from '../Home/Home';

const TouristPlaces = () => {
    
    return (
        <div >
            <div className="cards">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                           <div className= "category">
                                <Nav.Link  href="/sajek" >
                                    <img src={sajek} /> 
                                    <h2 className="placeName1">Sajek</h2>  
                                </Nav.Link>
                           </div>
                        </div>
                        <div className="col-md-4">
                            <div className="category">
                                <Nav.Link href="/sreemongol">
                                    <img  src={sree} />
                                    <h2 className = "placeName">Sreemongol </h2>
                                </Nav.Link>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className= "category">
                                <Nav.Link href="/sundorbon">
                                    <img src={sundor}/>
                                    <h2 className = "placeName">Sundorbon</h2>
                                </Nav.Link> 
                            </div>
                        </div>  
                    </div>
                </div>
            </div><br/>
            <div className="button">
                {/* slider button starts here */}
                <a href="#" className="previous round">&#8249;</a>""
                <a href="#" className="next round">&#8250;</a>
                <a href=""></a>
            </div>    
        </div>  
    );
};

export default TouristPlaces;