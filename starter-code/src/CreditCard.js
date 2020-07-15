import React, { Component } from 'react';

const CreditCard = (props) => {
    return (
        <div className="CreditCard" 
        
        style={{

            backgroundColor:`${props.bgColor}`,
            color: `${props.color}`
        }}
        >
{/* 
        <div className="CardLogo">
            <img src={props.logo} />

        </div> */}


    <p className="CardNumber" 
    
    >{props.number}</p> 
    <p>Expires: {props.expirationMonth}/{props.expirationYear} &nbsp;&nbsp;
    {props.bank}</p>
   
    <p>{props.owner}</p>
        </div>

    )
}

export default CreditCard;