import React, { Component } from 'react'; 
import Rating from './Rating'

const DriverCard = (props) => {
    return (
        <div class="driverCard"> 
        
        <img class="driverImg" src={props.img}/> 
        <div class="driverData">
        <h3 class="driverName">{props.name}</h3> 
        <Rating>{props.rating}</Rating>
        <p>{props.car.model} - {props.car.licensePlate}</p>
        </div>
        </div>
    );
};
 

export default DriverCard; 