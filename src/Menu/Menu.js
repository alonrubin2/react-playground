

import { Component } from 'react';
import Menuitem from './Menuitem/Menuitem';
import './Menu.css';




class Menu extends Component {
    render() {
        return (
            <nav>
                <ul>
                   <a className="link" href="/">
                       {this.props.children}
                   </a>
                   
                   
                </ul>
            </nav>
        );
    }
}




export default Menu;