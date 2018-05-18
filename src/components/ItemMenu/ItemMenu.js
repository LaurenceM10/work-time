import React from 'react';
import './itemMenu.css';
import {BrowserRouter as Router, Link} from "react-router-dom";

// Stateless component
const ItemMenu = props => (
    <Router>
        <ul>
            <li className="menu__item"><Link to="/">Home</Link></li>
            <li className="menu__item"><Link to="/tasks">Home</Link></li>
            <li className="menu__item"><Link to="/events">Home</Link></li>
        </ul>
    </Router>
);

export default ItemMenu;