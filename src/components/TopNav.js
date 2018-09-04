import React, { Component } from 'react';
// import microphone icon
import microphone from '../assets/images/microphone.png';
// Import Link of BrowserRouter from the react-router-dom package
import {
    BrowserRouter as Router, Link
} from 'react-router-dom';

class TopNav extends Component {
    render() {
        return (
            <div className="top-nav">
                <Link className="top-nav__link" to="/">Home</Link>

                <div className="icon-microphone-container">
                    <img className="icon-microphone" src={microphone} alt="Microphone icon" aria="hidden" />
                </div>

                <Link className="top-nav__link" to="/NewLogForm">Create Log</Link>

                <div className="icon-microphone-container">
                    <img className="icon-microphone" src={microphone} alt="Microphone icon" aria="hidden" />
                </div>

                <Link className="top-nav__link" to="/PastLogs">Past Logs</Link>
            </div>
        )
    }
}

export default TopNav;