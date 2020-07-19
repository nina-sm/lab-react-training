import React, { Component } from 'react'


export default class ClickablePicture extends Component {

    state = {
        isClicked: false
    }


    clickHandler = () => {
        this.setState((state, props) => ({
            isClicked: !state.isClicked  
        }))
    }


    render() {
       
        return (
        <div>
        <img onClick={this.clickHandler} src={this.state.isClicked ? this.props.imgClicked : this.props.img } />
        </div>
        )
    }
}