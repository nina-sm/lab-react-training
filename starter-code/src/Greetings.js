import React, { Component } from 'react';

const Greetings = (props) => {

    return (
        <div className="lang">
        <h2 lang={props.lang}>{props.greeting} {props.name}</h2>
        </div>
        
    );

};



export default Greetings;