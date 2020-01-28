import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectEcommerce from '../selectors/ecommerces';
import selectEcommerceTotal from '../selectors/ecommerce-total'

export const AdminSummary = ({ ecommerceCount, ecommerceTotal }) => {
    const ecommerceWord = ecommerceCount === 1 ? 'product' : 'products';
    const formatedEcommerceTotal = '₦' + numeral(ecommerceTotal/100).format('0,0.00');

    return (
        <div className="page-admin-header">
            <div className="content-container">
                <h1 className="page-admin-header__title">Displaying <span>{ecommerceCount}</span> {ecommerceWord} totalling <span>{formatedEcommerceTotal}</span> </h1>
                <div className="page-admin-header__actions">
                    <Link className="button admin-header__title" to="/create">Add Product</Link>
                </div>
            </div>            
        </div>        
    );
};

const mapStateToProps = (state) => {
    const visibleEcommerces = selectEcommerce(state.ecommerces, state.filters);
    
    return {
        ecommerceCount: visibleEcommerces.length,
        ecommerceTotal: selectEcommerceTotal(visibleEcommerces)
    };
};

export default connect(mapStateToProps)(AdminSummary); 