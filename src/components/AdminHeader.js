import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const AdminHeader = ({ startLogout }) => (
    <header>
        <h1>OyinMark</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Customer</NavLink>
        <NavLink to="/admin_dashboard" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Product</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit Product</NavLink>  
        <button onClick={startLogout}>Logout</button>          
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(AdminHeader);