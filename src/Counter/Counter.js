import { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0
        };
    }
    increase() {
        this.setState({
            num: this.state.num + 1
        });
        
    }
    decrease() {
        this.setState({
            num: this.state.num -1
        });
    }


    render() {
        return (
            <div>
                {this.state.num}
                <button onClick={this.increase.bind(this)}>Increase</button>
                <button onClick={this.decrease.bind(this)}>Decrease</button>
            </div>
        );
    }
}

export default Counter;