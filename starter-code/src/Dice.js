import React, { Component } from 'react'
import Random from './Random'


export default class Dice extends Component {

    state = { 
        img:'./img/dice3.png'
    }


    clickHandler = () => {
        this.setState({
            img: './img/dice-empty.png'
        });
        let randomNum = Math.floor(Math.random() * 6) +1;
        let img = `./img/dice${randomNum}.png`;

        setTimeout(() => {
            this.setState({
                img: img
            })
        }, 1000);
    }


    render() {
        let dice = './img/dice3.png';
       
        return(
            <div>
                <img className="diceImg" onClick={this.clickHandler} src={this.state.img} />
            </div>
        )
    }
    }