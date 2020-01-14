import React from 'react';
import { Route } from 'react-router-dom';
import CustHeader from '../components/CustHeader';

const PublicRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} component={(props) => (
        <div>
            <CustHeader/>
            <Component {...props} />     {/*it will rendering the real component */}            
        </div>                                     
    )} />
);


export default (PublicRoute);