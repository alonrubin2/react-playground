import { Component } from 'react';

class Menuitem extends Component {
    render() {
        return (
            <li>
                <a href={this.props.route}>
                {this.props.children}
                </a>
                
            </li>
        )
    }
}

export default Menuitem;