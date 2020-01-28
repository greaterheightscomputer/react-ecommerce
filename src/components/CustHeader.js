import React from 'react';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';

const CustHeader = () => (
    <header className="admin-header">
        <div className="content-container">        
            <div className="admin-header__container">                
                <Link className="admin-header__title" to="/">
                    <h1>E-Market</h1>
                </Link>
                <div className="admin-header--cart">
                <Link to="/cart">
                    <button className="button__custheader button--link">
                    <span className="mr-2">
                    <i className="fas fa-cart-plus" />
                    </span>                    
                    my cart
                    </button>                            
                </Link>
                </div>
                <Link className="button button--link admin-header__sigin" to="/signin">SignIn</Link>
            </div>                        
        </div>        
    </header>
);

export default CustHeader;