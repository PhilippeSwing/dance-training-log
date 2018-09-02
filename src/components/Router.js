import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import Home from './Home';
import NewLogForm from './NewLogForm';
import PastLogs from './PastLogs';
import NotFound from './NotFound';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/Home" component={Home} />
                <Route exact path="/NewLogForm" component={NewLogForm} />
                <Route exact path="/PastLogs" component={PastLogs} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;