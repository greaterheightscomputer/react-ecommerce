import React from 'react';
import { connect } from 'react-redux';
import CustListItem from './CustListItem';
import selectEcommerce from '../selectors/ecommerces';

export const CustList = (props) => (
    <div className="list-body">        
        {
            props.ecommerces.length === 0 ? (
                <div className="list-item list-item--message">
                        <span>No Products</span>
                    </div>
            ) : 
                (
                props.ecommerces.map((ecommerce) =>{
                    return <CustListItem key={ecommerce.id} {...ecommerce} />                             
            }))
        }      
    </div>
);

const mapStateToProps = (state) => {
    return {
        ecommerces: selectEcommerce(state.ecommerces, state.filters)        
    };
}


export default connect(mapStateToProps)(CustList);