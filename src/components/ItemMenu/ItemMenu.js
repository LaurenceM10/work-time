import React from 'react';
import './itemMenu.css';
import {BrowserRouter as Router, Link} from "react-router-dom";

// Stateless component
const ItemMenu = props => (
    <Router>
        <li className="menu__item"><Link to="/">Home</Link></li>
    </Router>
);

export default ItemMenu;