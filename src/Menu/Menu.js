

import { Component } from 'react';
import Menuitem from './Menuitem/Menuitem';
import './Menu.css';




class Menu extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <Menuitem>
                        <a className="link" href="/">
                            {this.props.children}
                        </a>
                   </Menuitem>
                   
                </ul>
            </nav>
        );
    }
}




export default Menu;