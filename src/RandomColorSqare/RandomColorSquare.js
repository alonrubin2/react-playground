import React, { Component } from 'react';

import './RandomColorSquare.css'

class RandomColorSquare extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: '#ffffff'
        }
    

    }
    
    changeColor() {
        this.setState ({
            backgroundColor :  '#' + Math.floor(Math.random()*16777215).toString(16)
        })
        
        
        
    }

    render() {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        return (
            <div onClick={this.changeColor.bind(this)} className="square" style={{backgroundColor: this.state.backgroundColor}} >
                {this.state.backgroundColor}
            </div>
        );
    }
}

export default RandomColorSquare;
