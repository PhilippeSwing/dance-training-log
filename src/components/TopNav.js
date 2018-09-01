import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route, Link
} from 'react-router-dom';

// COMPONENTS
import Home from './Home';
import NewLogForm from './NewLogForm';
import PastLogs from './PastLogs';

class TopNav extends Component {
    render() {
        return (
            <Router>
                <div className="top-nav">
                    {/* <ul className="top-nav__list"> */}
                    {/* <li className="top-nav__list__item"><a href="#" class="top-nav__list__item__link">Home</a></li> */}
                    <Link to="./Home">Home</Link>
                    <Route path="./Home" component={Home} />
                    {/* <li className="top-nav__list__item"><a href="#" class="top-nav__list__item__link">Create Log</a></li> */}
                    <Link to="./NewLogForm">Create Log</Link>
                    <Route path="./NewLogForm" component={NewLogForm} />
                    {/* <li className="top-nav__list__item"><a href="#" class="top-nav__list__item__link">Past Logs</a></li> */}
                    <Link to="./PastLogs">Past Logs</Link>
                    <Route path="./PastLogs" component={PastLogs} />
                    {/* </ul> */}
                </div>
            </Router>
        )
    }
}

export default TopNav;