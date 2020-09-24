import React, { useState } from 'react';
import {Navbar, Nav,NavDropdown, Form, FormControl, Button, CardDeck, Card} from 'react-bootstrap'
import logo from '../../Images/Logo.png'
import sajek from '../../Images/Image/Sajek.png'
import sree from '../../Images/Image/Sreemongol.png'
import sundor from '../../Images/Image/sundorbon.png'
import Sajek from '../Sajek/Sajek';
import TouristPlaces from '../TouristPlaces/TouristPlaces';
import ClickToExplore from '../ClickToExplore/ClickToExplore';
import './Heading.css'
import { Redirect } from 'react-router-dom';
import Navigationbar from '../Navigationbar/Navigationbar';


const Heading = () => {
    const [isAuth, setIsAuth] = useState(true)
    if(!isAuth){
        return <Redirect to="/existinguser"></Redirect>
    }
    
    return (
        <div>
            <Navigationbar></Navigationbar>
            <div>
                <form className="form">
                    <div className="container">
                        <h3>Create an account</h3>
                        <hr/>
                        <label for="first-name"><b>First Name</b></label>
                        <input type="text" placeholder="Enter First Name" name="first-name" id="first-name" required></input>
                        <label for="last-name"><b>Last Name</b></label>
                        <input type="text" placeholder="Enter Last Name" name="last-name" id="last-name" required></input>
                        <label for="email"><b>Username or Email</b></label>
                        <input type="text" placeholder="Enter Email" name="email" id="email" required></input>

                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" id="psw" required></input>

                        <label for="psw-repeat"><b>Confirm Password</b></label>
                        <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required></input>
                        
                        <button type="submit" class="registerbtn">Create an account</button>
                        <div class="container signin">
                            <p>Already have an account? <a href="#" onClick ={()=> setIsAuth(false)}>Log in</a>.</p>
                        </div><br/>
                        <p id="or"><span>Or</span></p>
                        
                        <div class="col">
                            <a href="#" class="fb btn">
                            <i class="fa fa-facebook fa-fw"></i> Login with Facebook
                            </a>
                            <a href="#" class="google btn">
                            <i class="fa fa-google fa-fw"></i> Login with Google
                            </a>
                        </div>

                    </div>

                    
                        
                </form>
            </div>
           

        </div>
    );
};

export default Heading;