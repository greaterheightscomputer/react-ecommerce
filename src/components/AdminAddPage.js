import React from 'react';
import { connect } from 'react-redux';
import AdminForm from './AdminForm';
import { addEcommerce } from '../actions/ecommerces';

const AdminAddPage = (props) => (
    <div>
        <h1> Add Product</h1>
        <AdminForm
            onSubmit={(ecommerce) => {
                // console.log(ecommerce)
                props.dispatch(addEcommerce(ecommerce));
                props.history.push('/admin_dashboard');
            }}
        />
    </div>
);

export default connect()(AdminAddPage);