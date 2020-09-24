import React from 'react';
import './Sreemongol.css'

const Sreemongol = () => {
    return (
        <div >
            <div className="place-container">
                <div className="sreemongol-container">
                    <h1 id = "heading">Sreemongol</h1><br/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                {/* booking dates stars here */}
                <div className="booking-container">
                    <form className="container">
                        <div className="input-field">
                            <label>Origin</label><br/>
                            <input type="text" placeholder=""/>
                        </div>
                        <div className="input-field">
                            <label>Destination</label><br/>
                            <input type="text" placeholder=""/>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <label for="birthday">From:</label><br/>
                                        <input type="date" id="birthday" name="birthday"></input>
                                </div>
                                <div className= "col-md-6">
                                    <label for="birthday">To:</label><br/>
                                        <input type="date" id="birthday" name="birthday"></input>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <button className="booking-btn" type="submit">Start Booking</button>
                    </form>  
                </div>  
            </div>
        </div>
    );
};

export default Sreemongol;