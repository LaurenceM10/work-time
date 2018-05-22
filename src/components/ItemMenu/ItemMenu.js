import React from 'react';
import './itemMenu.css';
import {BrowserRouter as Router, Link} from "react-router-dom";

// Stateless component
class ItemMenu extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    // TODO: add class only to the currently selected element, delete class to the previously selected element
    handleClick(event) {
        if(event.target.className.toLowerCase() === 'menu__item'){
            event.target.classList.add("selected");
        }
    }


    render() {
        return (
            <Router>
                <ul>
                    <li className="menu__item" onClick={this.handleClick}>
                        <Link to="/" class="menu__link">Home</Link>
                    </li>
                    <li className="menu__item" onClick={this.handleClick}>
                        <Link to="/tasks" class="menu__link">Tasks</Link>
                    </li>
                    <li className="menu__item" onClick={this.handleClick}>
                        <Link to="/events" class="menu__link">Events</Link>
                    </li>
                </ul>
            </Router>
        )
    }
}

export default ItemMenu;