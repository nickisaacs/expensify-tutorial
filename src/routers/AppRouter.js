import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';

import NotFoundPage from '../components/NotFoundPage';
import EditExpensePage from '../components/EditExpensePage';
import AddExpensePage from '../components/AddExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import LoginPage from '../components/LoginPage';
import createHisotry from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';

export const history = createHisotry();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" exact={true} component={LoginPage} />
                <PrivateRoute path="/dashboard" exact={true} component={ExpenseDashboardPage} />
                <PrivateRoute path="/create" exact={true} component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" exact={true} component={EditExpensePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;