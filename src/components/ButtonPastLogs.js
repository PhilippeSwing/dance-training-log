import React from 'react';
// Import Link of BrowserRouter from the react-router-dom package
import {
    BrowserRouter as Router, Link
} from 'react-router-dom';

class ButtonPastLogs extends React.Component {
    render() {
        return (
            <div>
                <Link className="home-button__past-logs button" to="/PastLogs">Past Logs</Link>
            </div>
        )
    }
}

export default ButtonPastLogs;