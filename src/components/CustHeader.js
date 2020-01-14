import React from 'react';
import { NavLink } from 'react-router-dom';
 
const CustHeader = () => (
    <header>
        <h1>OyinMark</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Products</NavLink>
        <NavLink to="/signin" activeClassName="is-active">SignIn</NavLink> 
    </header>
);

export default CustHeader;