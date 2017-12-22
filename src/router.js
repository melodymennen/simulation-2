import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';


export default (
    // Simulation-2 42D
    <HashRouter>
        <div>
            {/* Simulation-2 42F, 42H */}
            <Route exact path = '/' component={Auth} />
            <Route path = '/dashboard' component={Dashboard} />
        </div>
    </HashRouter>
)