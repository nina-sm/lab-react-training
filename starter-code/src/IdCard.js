import React, { Component } from 'react';

const IdCard = (props) => {
    return (

      <div className="idCard">
<div className="picture">
          <img src={props.picture}/></div>

 <div className="idText">
<p> <strong>Last Name: </strong> {props.lastName}</p>

<p><strong>First Name: </strong> {props.firstName}</p>


<p><strong>Gender:</strong>  {props.gender}</p>

<p><strong>Height: </strong> {props.height}m</p>


<p><strong>Birthday: </strong> {props.birdthday}</p>

</div>       


  </div> 
 

    );
};


export default IdCard;