import React, { Component } from 'react';

const Random = (props) => {

    
    const randomize = () => {
       
        return Math.floor(Math.random() * (props.max - props.min)) + props.min; 
      
    }

    return ( 
        <div className="randomNumber">
       <h2>Random value between {props.min} and {props.max} => {randomize()} </h2>
       </div>
   );

};



export default Random;
