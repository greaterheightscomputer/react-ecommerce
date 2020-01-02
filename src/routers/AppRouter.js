import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AdminDashboardPage from '../components/AdminDashboardPage';
import CustDashboardPage from '../components/CustDashboardPage';
import AdminAddPage from '../components/AdminAddPage';
import AdminEditPage from '../components/AdminEditPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import AdminHeader from '../components/AdminHeader';
import CustHeader from '../components/CustHeader';

const AppRouter = () => (
    <BrowserRouter>  
        <div>
           <AdminHeader/>
           <Switch>
                <Route path="/" component={CustDashboardPage} exact={true}/>                                      
                <Route path="/admin_dashboard" component={AdminDashboardPage} />    
                <Route path="/create" component={AdminAddPage}/>    
                <Route path="/edit/:id" component={AdminEditPage}/>    
                <Route path="/help" component={HelpPage}/>  
                <Route component={NotFoundPage}/>    
           </Switch>
        </div>        
    </BrowserRouter>
);
export default AppRouter;