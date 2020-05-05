import React from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Paginas
import { PersonalPage } from './pages/Profile'
import { Lead } from './pages/Lead'
import { Comment } from './pages/Comment'
import Directory from './pages/Directory'
import List from './pages/List'

export default () => {
    return (
        <Router>
            <Switch>
                <Route path="/profile/:id" component={PersonalPage} />
                <Route path="/lead/:id" component={Lead} />
                <Route path="/comments/:id" component={Comment} />
                <Route path="/directory" component={Directory} />
                <Route path="/list" component={List} />
                <Route path="/" component={Directory} />
            </Switch>
        </Router>
    )
}