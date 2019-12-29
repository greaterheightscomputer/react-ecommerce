import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EcommerceDashboardPage from '../components/EcommerceDashboardPage';
import AddEcommercePage from '../components/AddEcommercePage';
import EditEcommercePage from '../components/EditEcommercePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>  
        <div>
           <Header/>
           <Switch>
                <Route path="/" component={EcommerceDashboardPage} exact={true}/>    
                <Route path="/create" component={AddEcommercePage}/>    
                <Route path="/edit/:id" component={EditEcommercePage}/>    
                <Route path="/help" component={HelpPage}/>  
                <Route component={NotFoundPage}/>    
           </Switch>
        </div>        
    </BrowserRouter>
);
export default AppRouter;