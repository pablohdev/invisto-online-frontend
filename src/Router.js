import React from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Paginas
import { PersonalPage, LeadPage, CommentsPage } from './pages/Profile'
import Directory from './pages/Directory'
import List from './pages/List'

export default () => {
    return (
        <Router>
            <Switch>
                <Route path="/profile/:id" component={PersonalPage} />
                <Route path="/lead" component={LeadPage} />
                <Route path="/comments" component={CommentsPage} />
                <Route path="/directory" component={Directory} />
                <Route path="/list" component={List} />
                <Route path="/" component={Directory} />
            </Switch>
        </Router>
    )
}