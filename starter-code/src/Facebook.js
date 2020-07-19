import React, { Component } from 'react'; 
import profiles from './data/berlin.json'
import FacebookCard from './FacebookCard'

export default class Facebook extends Component {

   render() {
       console.log(profiles)
        return (
        <div>
        <p>Hello</p>

            <ul>
            { profiles.map((oneProfile,index) => 
              <FacebookCard key={index} firstName={oneProfile.firstName} lastName={oneProfile.lastName} country={oneProfile.country} img={oneProfile.img} type={oneProfile.isStudent}/>) 
            }
          </ul>
          </div>

        )


      

    }  
     
 
 } 