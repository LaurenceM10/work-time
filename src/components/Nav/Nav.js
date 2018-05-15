import React, {Component} from 'react';
import Menu from '../Menu';
import UserInfo from '../UserInfo';
import './nav.css';

class Nav extends Component {
    constructor(...props) {
        super(...props);

        this.state = {
            user: {
                username: "Lauren Steven",
                age: 19,
                city: "Managua",
                occupation: "Hacker"
            }
        }
    }

    render() {
        return (
            <div className="nav">
                <UserInfo user={this.state.user}/>
                <Menu/>
            </div>
        );
    }
}

export default Nav;