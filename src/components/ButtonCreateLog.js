import React, { Component } from 'react';
// Import Link of BrowserRouter from the react-router-dom package
import {
    BrowserRouter as Router, Link
} from 'react-router-dom';

class ButtonCreateLog extends React.Component {
    render() {
        return (
            <div className="button-container">
                <Link className="home-button__create-log button" to="/NewLogForm">Create Log</Link>
            </div>
        )
    }
}

export default ButtonCreateLog;