import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectEcommerce from '../selectors/ecommerces';
import selectEcommerceTotal from '../selectors/ecommerce-total'

export const EcommerceSummary = ({ ecommerceCount, ecommerceTotal }) => {
    const ecommerceWord = ecommerceCount === 1 ? 'product' : 'products';
    const formatedEcommerceTotal = '₦' + numeral(ecommerceTotal/100).format('0,0.00');
    return (
        <h1>Displaying {ecommerceCount} {ecommerceWord} totalling {formatedEcommerceTotal}</h1>
    );
};

const mapStateToProps = (state) => {
    const visibleEcommerces = selectEcommerce(state.ecommerces, state.filters);
    
    return {
        ecommerceCount: visibleEcommerces.length,
        ecommerceTotal: selectEcommerceTotal(visibleEcommerces)
    };
};

export default connect(mapStateToProps)(EcommerceSummary); 