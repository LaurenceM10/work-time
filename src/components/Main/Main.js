import React, {Component} from 'react';
import './main.css';
import Header from '../Header';
import Nav from './../Nav';
import ContentContainer from '../ContentContainer'
import {BrowserRouter as Router} from "react-router-dom";

class Main extends Component {
    render() {
        return (
            <Router>
                <div className="main">
                    <Nav/>
                    <div class="main-column">
                        <Header/>
                        <ContentContainer/>
                    </div>
                </div>
            </Router>
        )
    }
}

export default Main;