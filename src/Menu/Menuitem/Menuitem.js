import { Component } from 'react';

class Menuitem extends Component {
    render() {
        return (
            <li>
                <a href={this.props.route}>

                </a>
                {this.props.children}
            </li>
        )
    }
}

export default Menuitem;