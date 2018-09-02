import React, { Component } from 'react';
// Import Link of BrowserRouter from the react-router-dom package
import {
    BrowserRouter as Router, Link
} from 'react-router-dom';

class TopNav extends Component {
    render() {
        return (
            <div className="top-nav">
                <Link to="/">Home</Link>
                <Link to="/NewLogForm">Create Log</Link>
                <Link to="/PastLogs">Past Logs</Link>
            </div>
        )
    }
}

export default TopNav;