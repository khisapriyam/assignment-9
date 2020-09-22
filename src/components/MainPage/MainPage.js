import React, { useEffect, useState } from 'react';
import { place } from '../FakeData/FakeData';
import Sajek from '../Sajek/Sajek';
import TouristPlaces from '../TouristPlaces/TouristPlaces';

import bgImage from '../../Images/Image/first.png';
//import header from '../../Images/Image/header.png'
// import './Home.css';
import {Navbar, Nav,NavDropdown, Form, FormControl, Button, CardDeck, Card} from 'react-bootstrap'
import { Link, Router } from 'react-router-dom';
import logo from '../../Images/Logo.png'
import sajek from '../../Images/Image/Sajek.png'
import sree from '../../Images/Image/Sreemongol.png'
import sundor from '../../Images/Image/sundorbon.png'
import Sundorbon from '../Sundorbon/Sundorbon';


const MainPage = () => {
    const [places, setPlaces] = useState(place);
    const handleAddPlace =()=>{
        console.log('place added')
        
        
    }
    
    return (
        
        <div>
            <div>
                {/* {
                    places.map(pl =><TouristPlaces 
                        place ={pl}
                        handleAddPlace = {handleAddPlace}
                        ></TouristPlaces>)
                } */}
               { 
               <TouristPlaces>
                   handleAddPlace = {handleAddPlace}

                </TouristPlaces>
                }
            </div>
            
        </div>
          
        
    );
};

export default MainPage;