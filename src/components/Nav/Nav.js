import React, {Component} from 'react';
import Menu from '../Menu';
import './nav.css';

class Nav extends Component {
    constructor(...props){
        super(...props);
    }

    render() {
        return (
            <div className="nav">
                <Menu/>
            </div>
        );
    }
}

export default Nav;