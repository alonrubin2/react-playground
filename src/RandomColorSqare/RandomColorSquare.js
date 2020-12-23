import React, { Component } from 'react';
import CopyButton from './CopyButton/CopyButton';
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
        
        return (
            <div className="background">
                <div onClick={this.changeColor.bind(this)} className="square" style={{backgroundColor: this.state.backgroundColor}} >
                    
                </div>
                {this.state.backgroundColor}
                <button onClick={() => navigator.clipboard.writeText(this.state.backgroundColor)}>
                Copy Color
                </button>
            </div>
            

        );
    }
}

export default RandomColorSquare;
