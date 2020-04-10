import React from 'react';
import { connect } from 'react-redux';
import AdminForm from './AdminForm';
import { startAddEcommerce } from '../actions/ecommerces';
import { addTrackEmployee } from '../actions/auth';

export class AdminAddPage extends React.Component {
      
    onSubmit = (ecommerce) => {
        // console.log(ecommerce)
        // props.dispatch(addEcommerce(ecommerce));
        const { auth } = this.props;
        // console.log(auth);
        const email="";
        const operation= `Insertion of ${ecommerce.description} Product`;
        
        this.props.startAddEcommerce(ecommerce);
        this.props.addTrackEmployee(auth, email, operation);    
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

const mapStateToProps = (state) => {
    return {        
        auth: state.auth.uid      
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddEcommerce: (ecommerce) => dispatch(startAddEcommerce(ecommerce)),
    addTrackEmployee: (userId, email, operation) => dispatch(addTrackEmployee(userId, email, operation))
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminAddPage);