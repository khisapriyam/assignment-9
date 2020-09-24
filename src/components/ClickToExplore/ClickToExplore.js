import React from 'react';
import TouristPlaces from '../TouristPlaces/TouristPlaces';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Sajek from '../Sajek/Sajek';
import Sreemongol from '../Sreemongol/Sreemongol';
import Sundorbon from '../Sundorbon/Sundorbon';
import './ClickToExplore.css'
import Heading from '../Heading/Heading';


const ClickToExplore = () => {
    
    return (
        <div >
            <a href="/addPlace" className="clickBtn">Click to Explore</a>
            <Router>
                <Switch>
                    <Route path="/addPlace">
                        <TouristPlaces></TouristPlaces>
                    </Route>
                    <Route path="/sajek">
                        <Sajek></Sajek>
                    </Route>
                    <Route path="/sreemongol">
                        <Sreemongol></Sreemongol>
                    </Route>
                    <Route path="/sundorbon">
                        <Sundorbon></Sundorbon>
                    </Route>
                    <Route path="/book">
                        <Heading></Heading>
                    </Route>
                </Switch>
            </Router>
        </div>
        
    );
};

export default ClickToExplore;