
import React from 'react';

const FacebookCard = ({ firstName, lastName, country, img, isStudent }) => {
  return (
    <div className="FacebookCard"> 
      <img src={img}/>
      <div>
       <p><strong>First name: </strong>{firstName}</p>
      <p><strong>Last name: </strong>{lastName} </p>
      <p><strong>Country:  </strong>{country}</p> 
 
  {
  isStudent ?   <p><strong>Type:  </strong> Student</p>  :  <p><strong>Type:  </strong> Teacher</p> } 


      </div>
    </div>
  )
};

export default FacebookCard;
