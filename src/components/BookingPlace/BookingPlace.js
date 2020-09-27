import React, { useState } from 'react';
import place from '../FakeData/FakeData';
import RoomProduct from '../RoomProduct/RoomProduct';
import './BookingPlace.css'
import map from '../../Images/Capture.PNG'

const BookingPlace = () => {
    const first3 = place;
    const [places, setPlaces] = useState(first3);
    return (
        <div className="booking-container">
            <div className="place-container">
                {
                    places.map(prd => <RoomProduct 
                        place = {prd}>    
                        </RoomProduct>)    
                }    
            </div>
            <div className = "map-container">
                <img src={map} alt=""/>
            </div>
        </div>
    );
};

export default BookingPlace;