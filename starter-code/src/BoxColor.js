import React, { Component } from 'react';

const BoxColor = (props) => {
   
   
    return (

        <div style={{

            backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
            width:'500px',
            height:'200px',
            border:'solid black 1px',
            margin:'3%',
        }}>
            <p style={{
                textAlign:"center",
                color:"white", 
                fontWeight:"600"

            }}> rgb({props.r},{props.g},{props.b}) </p>
        </div>
 
    );
};

export default BoxColor;