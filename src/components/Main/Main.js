import React, {Component} from 'react';
import './main.css';
import Header from '../Header';
import Nav from './../Nav';
import ContentContainer from '../ContentContainer'

class Main extends Component {
    render() {
        return (
            <div className="main">
                <Nav/>
                <div class="main-column">
                    <Header/>
                    <ContentContainer/>
                </div>
            </div>
        )
    }
}

export default Main;