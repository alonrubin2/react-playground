import { Component } from 'react';


class SpecialButton extends Component {

    handleClick() {
            
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click Me!</button>
            </div>
        );
    }
}


export default SpecialButton;