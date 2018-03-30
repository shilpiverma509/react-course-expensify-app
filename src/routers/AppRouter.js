import React from 'react';
import {Router,Route,Switch, Link,NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import Header from './../components/Header';
import ExpenseDashboardPage from './../components/ExpenseDashboardPage';
import AddExpensePage from './../components/AddExpensePage';
import EditExpensePage from './../components/EditExpensePage';
import HelpExpensePage from './../components/HelpExpensePage';
import NotFoundPage from './../components/NotFoundPage';
//importing the connected default LoginPage
import LoginPage from '../components/LoginPage';

//createing your own history 
export const history = createHistory();
//<BrowserRouter> use the browser history by default
//switch from <BrowserRouter> to <Router> 
//<Router allows you to have our own history prop

const AppRouter= ()=>(
    //<BrowserRouter>
    <Router history={history}>
        <div>
            <Header /> 
            <Switch>
                <Route path="/" component={LoginPage} exact={true} />
                <Route path="/dashboard" component={ExpenseDashboardPage} />
                <Route path="/create" component={AddExpensePage} />
                <Route  path="/edit/:id" component={EditExpensePage}/>
                <Route path="/help" component={HelpExpensePage}/>
                <Route component={NotFoundPage} />
            </Switch>
        </div>    
    </Router>
);

export default AppRouter;
