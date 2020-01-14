import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import AdminHeader from '../components/AdminHeader';

export const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <div>
                <AdminHeader/>
                <Component {...props} />   {/*it will rendering the real component */}            
            </div>            
        ) : (
            <Redirect to="/" />
            )
    )} />
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);