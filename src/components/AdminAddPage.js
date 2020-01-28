import React from 'react';
import { connect } from 'react-redux';
import AdminForm from './AdminForm';
import { startAddEcommerce } from '../actions/ecommerces';

export class AdminAddPage extends React.Component {
    onSubmit = (ecommerce) => {
        // console.log(ecommerce)
        // props.dispatch(addEcommerce(ecommerce));
        this.props.startAddEcommerce(ecommerce);
        this.props.history.push('/admin_dashboard');
    };
    render() {
        return (
            <div className="list-body">
                <div className="page-admin-header">
                    <div className="content-container">
                        <h1 className="page-admin-header__title"> Add Product</h1>
                    </div>
                </div>                
                <div className="content-container">
                    <AdminForm
                        onSubmit={this.onSubmit}
                    />
                </div>
            </div>
        );
    };
};

const mapDispatchToProps = (dispatch) => ({
    startAddEcommerce: (ecommerce) => dispatch(startAddEcommerce(ecommerce))
});

export default connect(undefined, mapDispatchToProps)(AdminAddPage);