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
import Navigationbar from '../Navigationbar/Navigationbar';

const Home = () => {
    

    return (
        <div style={{ backgroundImage: ` linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${bgImage})`}} className="bg-image">
           <Navigationbar></Navigationbar>
           <TouristPlaces></TouristPlaces>
           
        </div>
            
    );
    
};

export default Home;