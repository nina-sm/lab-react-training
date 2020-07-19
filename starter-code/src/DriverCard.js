import React, { Component } from 'react'; 
import Rating from './Rating'

const DriverCard = (props) => {
    return (
        <div className="driverCard"> 
        
        <img className="driverImg" src={props.img}/> 
        <div className="driverData">
        <h3 className="driverName">{props.name}</h3> 
        <Rating>{props.rating}</Rating>
        <p>{props.car.model} - {props.car.licensePlate}</p>
        </div>
        </div>
    );
};
 

export default DriverCard; 