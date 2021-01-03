import React, { Component } from 'react';
import './GradiantButton.css'

class GradiantButton extends Component {
    constructor(props) {
        super(props);
   
    }
    
    
    
    render() {
        return (
            <div className="gradiant-box" color1={this.props.color1} color2={this.props.color2} height={this.props.height} 
            style={{background: `linear-gradient(to right, ${this.props.color1}, ${this.props.color2}`, height: this.props.height+'px', width: this.props.height*3.2+'px', display: "inline-block", boxShadow: '10px 10px #888888'}}>
                
            </div>
        );
    }
}

export default GradiantButton;
