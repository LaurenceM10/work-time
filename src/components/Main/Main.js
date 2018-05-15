import React, { Component } from 'react';
import './main.css';
import Nav from './../Nav';

class Main extends Component {
    constructor(){
        super();
    }

    render(){
        return (
            <div className="main">
                <Nav/>
            </div>
        )
    }
}

export default Main;