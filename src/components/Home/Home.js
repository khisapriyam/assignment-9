import React from 'react';
import bgImage from '../../Images/Image/first.png';
import './Home.css';
import TouristPlaces from '../TouristPlaces/TouristPlaces';
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