import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const AdminHeader = ({ startLogout }) => (
    <header className="admin-header">        
        <div className="content-container">
            <div className="admin-header__container">
                <Link className="admin-header__title " to="/admin_dashboard">
                    <h1>E-Market</h1>
                </Link>
                <button className="button button--link" onClick={startLogout}>Logout</button>          
            </div>            
        </div>        
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(AdminHeader);