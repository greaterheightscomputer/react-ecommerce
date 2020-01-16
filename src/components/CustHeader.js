import React from 'react';
import { Link } from 'react-router-dom';
 
const CustHeader = () => (
    <header className="admin-header">
        <div className="content-container">
            <div className="admin-header__container">                
                <Link className="admin-header__title" to="/">
                    <h1>E-Market</h1>
                </Link>
                <Link className="button button--link" to="/signin">SignIn</Link> 
            </div>
        </div>
    </header>
);

export default CustHeader;