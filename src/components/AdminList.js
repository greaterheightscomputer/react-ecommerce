import React from 'react';
import { connect } from 'react-redux';
import AdminListItem from './AdminListItem';
import selectEcommerce from '../selectors/ecommerces';

export const AdminList = (props) => (
    <div>
        <h1>Admin List</h1>
        {
            props.ecommerces.length === 0 ? (
                <p> No Products </p>
            ) : (
                props.ecommerces.map((ecommerce) =>{
                    return <AdminListItem key={ecommerce.id} {...ecommerce} />
                })
            )
        }                
    </div>
);

const mapStateToProps = (state) => {
    return {
        ecommerces: selectEcommerce(state.ecommerces, state.filters)        
    };
}

export default connect(mapStateToProps)(AdminList);