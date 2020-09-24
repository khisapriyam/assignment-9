import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import bgImage from '../../Images/Image/first.png';
import Heading from '../Heading/Heading';
import Login from '../Login/Login';
import Navigationbar from '../Navigationbar/Navigationbar';
import './Sajek.css'

const Sajek = () => {
    const [isAuth, setIsAuth] =useState(true);
    if(!isAuth){
        return <Redirect to ="/heading"></Redirect>
    }
   
    return (
        <div  style={{ backgroundImage: ` linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${bgImage})`}} className="bg-image">
            <Navigationbar></Navigationbar>
            
            <div className="place-container">
                <div className="sajek-container">
                    <h1 id = "heading">Sajek</h1><br/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                {/* booking dates stars here */}
                <div className="booking-container">
                    <form className="container">
                        <div className="input-field">
                            <label>Origin</label><br/>
                            <input type="text" placeholder=" "/>
                        </div>
                        <div className="input-field">
                            <label>Destination</label><br/>
                            <input type="text" placeholder=" "/>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <label for="from">From:</label><br/>
                                        <input type="date" id="from" name="from"></input>
                                </div>
                                <div className= "col-md-6">
                                    <label for="destination">To:</label><br/>
                                        <input type="date" id="destination" name="destination"></input>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <nav>
                             <button onClick ={() => setIsAuth(false)}className="booking-btn" type="submit">Start Booking</button>      
                        </nav>
                    </form>  
                </div>  
            </div>
            
        </div>
    );
};

export default Sajek;