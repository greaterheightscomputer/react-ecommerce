import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminHeader = () => (
    <header>
        <h1>OyinMark</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Customer</NavLink>
        <NavLink to="/admin_dashboard" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Product</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit Product</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>        
    </header>
);

export default AdminHeader;