import React from 'react';
import './content-container.css';
import Event from '../Event';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Task from "../Task";
import Home from "../Home";

const ContentContainer = () => (
    <Router>
        <div className="content-container">
            <Route path="/" component={Home} />
            <Route path="/tasks" component={Task}/>
            <Route path="/events" component={Event}/>
        </div>
    </Router>
);

export default ContentContainer;