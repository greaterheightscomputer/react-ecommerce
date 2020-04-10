import React from 'react';
import { connect } from 'react-redux';
import AdminForm from './AdminForm';
import { startEditEcommerce, startRemoveEcommerce } from '../actions/ecommerces';
import { addTrackEmployee } from '../actions/auth';

export class AdminEditPage extends React.Component {
    
    onSubmit = (ecommerce) => {
        // console.log('updated', ecommerce);
        const { auth } = this.props;
        // console.log(auth);
        const email="";
        const operation= `Edition of ${ecommerce.description} Product`;
        
        this.props.startEditEcommerce(this.props.ecommerce.id, ecommerce);                
        this.props.addTrackEmployee(auth, email, operation);
        this.props.history.push('/admin_dashboard');                                     
    };    
    onRemove = () => {     
        const {ecommerce} = this.props;
        // const removeProduct = this.props.ecommerce.id;           
            
        const { auth } = this.props;
        // console.log(auth);
        const email="";
        const operation= `Removal of ${ecommerce.description} Product`;

        this.props.startRemoveEcommerce({ id: this.props.ecommerce.id });        
        // console.log(removeProduct);
        this.props.addTrackEmployee(auth, email, operation);
        this.props.history.push('/admin_dashboard');
    };
        
    render(){
        return(
            <div className="list-body">
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
    ecommerce: state.ecommerces.find((ecommerce) => ecommerce.id === props.match.params.id),
    auth: state.auth.uid
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditEcommerce: (id, ecommerce) => dispatch(startEditEcommerce(id, ecommerce)),
    startRemoveEcommerce: (data) => dispatch(startRemoveEcommerce(data)),
    addTrackEmployee: (userId, email, operation) => dispatch(addTrackEmployee(userId, email, operation))    
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminEditPage);