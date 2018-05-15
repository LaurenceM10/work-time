import React, { Component } from 'react';
import './main.css';
import Header from '../Header';
import Nav from './../Nav';

class Main extends Component {
    constructor(){
        super();
    }

    render(){
        return (
            <div className="main">
                <Nav/>
                <Header />
            </div>
        )
    }
}

export default Main;