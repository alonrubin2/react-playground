import { Component } from 'react';


class SpecialButton extends Component {
    render() {
        return (
            <div>
                <button onClick={() => console.log('clicked')}>Click Me!</button>
            </div>
        );
    }
}


export default SpecialButton;