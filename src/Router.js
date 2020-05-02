import React from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Paginas
import {PersonalPage, LeadPage} from './pages/Profile'
import Directory from './pages/Directory'
import App from './App'

export default () => {
    return (
        <Router>
            <Switch>
                <Route path="/profile">
                    <PersonalPage />
                </Route>
                <Route path="/lead">
                    <LeadPage />
                </Route>
                <Route path="/directory" >
                    <Directory />
                </Route>
                <Route path="/">
                    <App />
                </Route>
            </Switch>
        </Router>
    )
}