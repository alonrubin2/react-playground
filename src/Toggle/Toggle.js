import React, { Component } from 'react';

class Toggle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShown: false
        }
    }

    toggle() {
        this.setState ({
            isShown: !this.state.isShown
        });

        
    }


    render() {
        return (
            <div>
                { this.state.isShown && <div>text text text text text text text text text text text </div>}
                <button onClick={this.toggle.bind(this)}>Toggle</button>
            </div>
        );
    }
}

export default Toggle;
