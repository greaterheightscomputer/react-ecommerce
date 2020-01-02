import React from 'react';
import { connect } from 'react-redux';
import CustListItem from './CustListItem';
import selectEcommerce from '../selectors/ecommerces';

const CustList = (props) => (
    <div>
        <h1>Customer List</h1>
        {props.ecommerces.map((ecommerce) =>{
            return <CustListItem key={ecommerce.id} {...ecommerce} />                             
        })}      
       
    </div>
);

const mapStateToProps = (state) => {
    return {
        ecommerces: selectEcommerce(state.ecommerces, state.filters)        
    };
}

export default connect(mapStateToProps)(CustList);