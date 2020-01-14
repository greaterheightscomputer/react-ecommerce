import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import AdminDashboardPage from '../components/AdminDashboardPage';
import CustDashboardPage from '../components/CustDashboardPage';
import AdminAddPage from '../components/AdminAddPage';
import AdminEditPage from '../components/AdminEditPage';
import NotFoundPage from '../components/NotFoundPage';
import CustHeader from '../components/CustHeader';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>  
        <div>   
            <Switch>
                <PublicRoute path="/" component={CustDashboardPage} exact={true} />  
                <PublicRoute path="/signin" component={SignIn} />                                           
                <PrivateRoute path="/admin_dashboard" component={AdminDashboardPage} />    
                <PrivateRoute path="/signup" component={SignUp} />    
                <PrivateRoute path="/create" component={AdminAddPage}/>    
                <PrivateRoute path="/edit/:id" component={AdminEditPage}/>                    
                <Route component={NotFoundPage}/>    
           </Switch>
        </div>        
    </Router>
);
export default AppRouter;