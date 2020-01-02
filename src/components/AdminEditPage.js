import React from 'react';
import { connect } from 'react-redux';
import AdminForm from './AdminForm';
import { editEcommerce, removeEcommerce } from '../actions/ecommerces';

export const AdminEditPage = (props) => {
    // console.log(props)
    return(
    <div>
        <AdminForm 
            ecommerce={props.ecommerce}
            onSubmit={(ecommerce) => {
                props.dispatch(editEcommerce(props.ecommerce.id, ecommerce));
                props.history.push('/admin_dashboard');
                // console.log('updated', ecommerce);
            }}
        />
        <button onClick={() => {
            props.dispatch(removeEcommerce({ id: props.ecommerce.id }));            
            props.history.push('/admin_dashboard');
        }}>Remove</button>
    </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        ecommerce: state.ecommerces.find((ecommerce) => ecommerce.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(AdminEditPage);