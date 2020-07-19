import React, { Component } from 'react';


export default class NumberTable extends Component {

  

    createNumbers = () => {
        const numbers = Array.from(Array(this.props.limit), (_, i) => i + 1)
       
        const listNumbers = numbers.map((x) => <li style={x % 2 == 0 ? {backgroundColor:'red'} : {backgroundColor:'white'}} className="tableNumber" key={x.toString()}>{x}</li>)
   
        return listNumbers
    
    }

    render() {
 
    return (

        <div>
        <p>Hello</p> 
        <ul className="NumberTable">
           {this.createNumbers()}
       </ul>
      
        </div>
    )
} 
 } 