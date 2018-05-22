import React, {Component} from 'react';
import './itemMenu.css';
import {Link} from "react-router-dom";

// Stateless component
class ItemMenu extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    // TODO: add class only to the currently selected element, delete class to the previously selected element
    handleClick(event) {
        if (event.target.className.toLowerCase() === 'menu__item') {
            event.target.classList.add("selected");
        }
    }


    render() {
        return (
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
        )
    }
}

export default ItemMenu;