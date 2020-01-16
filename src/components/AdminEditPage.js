import React from 'react';
import { connect } from 'react-redux';
import AdminForm from './AdminForm';
import { startEditEcommerce, startRemoveEcommerce } from '../actions/ecommerces';

export class AdminEditPage extends React.Component {
    onSubmit = (ecommerce) => {
        // console.log('updated', ecommerce);
        this.props.startEditEcommerce(this.props.ecommerce.id, ecommerce);
        this.props.history.push('/admin_dashboard');        
    };
    onRemove = () => {
        this.props.startRemoveEcommerce({ id: this.props.ecommerce.id });            
        this.props.history.push('/admin_dashboard');
    };
    render(){
        return(
            <div>
                <div className="page-admin-header">
                    <div className="content-container">
                        <h1 className="page-admin-header__title">Edit Product</h1>
                    </div>
                </div>
                <div className="content-container">
                    <AdminForm 
                    ecommerce={this.props.ecommerce}
                    onSubmit={this.onSubmit}
                    />
                    <button className="button button--secondary" onClick={this.onRemove}>Remove Product</button>
                </div>
            </div>
        );        
    };
};

const mapStateToProps = (state, props) => ({
    ecommerce: state.ecommerces.find((ecommerce) => ecommerce.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditEcommerce: (id, ecommerce) => dispatch(startEditEcommerce(id, ecommerce)),
    startRemoveEcommerce: (data) => dispatch(startRemoveEcommerce(data)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminEditPage);