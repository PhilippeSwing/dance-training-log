import React, { Component } from 'react';
// Import Link of BrowserRouter from the react-router-dom package
import {
    BrowserRouter as Router, Link
} from 'react-router-dom';

class TopNav extends Component {
    render() {
        return (
            <div className="top-nav">
                <Link className="top-nav__link" to="/">Home</Link>
                <Link className="top-nav__link" to="/NewLogForm">Create Log</Link>
                <Link className="top-nav__link" to="/PastLogs">Past Logs</Link>
            </div>
        )
    }
}

export default TopNav;