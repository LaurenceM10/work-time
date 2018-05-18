import React, {Component} from 'react';
import './main.css';
import Header from '../Header';
import Nav from './../Nav';
import ContentContainer from '../ContentContainer'

class Main extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="main">
                <Nav/>
                <Header/>
                <ContentContainer/>
            </div>
        )
    }
}

export default Main;