import React, { Component } from 'react';

class CopyButton extends Component {
    render() {
        return (
            <div>
            <button onClick={() => navigator.clipboard.writeText(this.state.backgroundColor)}>
              Copy Color
            </button>
            </div>
        );
    }
}

export default CopyButton;
