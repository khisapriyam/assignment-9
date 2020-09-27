import React from 'react';
import './TouristPlaces.css'
import {Navbar, Nav,NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import sajek from '../../Images/Image/Sajek.png'
import sree from '../../Images/Image/Sreemongol.png'
import sundor from '../../Images/Image/sundorbon.png'
import { Link } from 'react-router-dom';


const TouristPlaces = () => {
    
    return (
        <div >
            <div className="cards">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                           <div className= "category">
                                <Link to="/sajek" > 
                                    <img src={sajek} /> 
                                    <h2 className="placeName1">Sajek</h2>  
                                </Link>
                           </div>
                        </div>
                        <div className="col-md-4">
                            <div className="category">
                                <Link to="/sreemongol">
                                    <img src={sree} />
                                    <h2 className = "placeName">Sreemongol </h2>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className= "category">
                                <Link to="/sundorbon">
                                    <img src={sundor}/>
                                    <h2 className = "placeName">Sundorbon</h2>
                                </Link> 
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>  
    );
};

export default TouristPlaces;