import React from 'react';
import { connect } from 'react-redux';
import AdminForm from './AdminForm';
import { addEcommerce } from '../actions/ecommerces';

export class AdminAddPage extends React.Component {
    onSubmit = (ecommerce) => {
        // console.log(ecommerce)
        // props.dispatch(addEcommerce(ecommerce));
        this.props.addEcommerce(ecommerce);
        this.props.history.push('/admin_dashboard');
    };
    render() {
        return (
            <div>
                <h1> Add Product</h1>
                <AdminForm
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    };
};

const mapDispatchToProps = (dispatch) => ({
    addEcommerce: (ecommerce) => dispatch(addEcommerce(ecommerce))
});

export default connect(undefined, mapDispatchToProps)(AdminAddPage);