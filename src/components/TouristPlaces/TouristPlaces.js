import React from 'react';
import './TouristPlaces.css'
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
                                    <h2 className="placeName1">Click to explore <br/><span>Sajek</span></h2>  
                                </Link>
                           </div>
                        </div>
                        <div className="col-md-4">
                            <div className="category">
                                <Link to="/sreemongol">
                                    <img src={sree} />
                                    <h2 className = "placeName2"> Click to explore <span>Sreemongol</span></h2>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className= "category">
                                <Link to="/sundorbon">
                                    <img src={sundor}/>
                                    <h2 className = "placeName3">Click to explore <span>Sundorbon</span></h2>
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