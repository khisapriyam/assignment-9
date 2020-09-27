import React from 'react';
import './RoomProduct.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const RoomProduct = (props) => {
    const {title,description,wifi,cancellation,price, image} = props.place;
    return (
       
        <div className = "products">
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{wifi}</p>
                <p>{cancellation}</p>
                <p><FontAwesomeIcon icon={faStar} /> {price}</p>
                <img src={image} alt=""/>
                
            </div>
        </div>
            
    
    );
};

export default RoomProduct;