import React from 'react';
import './content-container.css';
import Event from '../Event';
import {Route} from "react-router-dom";
import Task from "../Task";
import Home from "../Home";

const ContentContainer = () => (
    <div className="content-container">
        <Route exact path="/" component={Home}/>
        <Route path="/tasks" component={Task}/>
        <Route path="/events" component={Event}/>
    </div>
);

export default ContentContainer;