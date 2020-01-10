import React from 'react';
import { connect } from 'react-redux';
import AdminForm from './AdminForm';
import { editEcommerce, startRemoveEcommerce } from '../actions/ecommerces';

export class AdminEditPage extends React.Component {
    onSubmit = (ecommerce) => {
        // console.log('updated', ecommerce);
        this.props.editEcommerce(this.props.ecommerce.id, ecommerce);
        this.props.history.push('/admin_dashboard');        
    };
    onRemove = () => {
        this.props.startRemoveEcommerce({ id: this.props.ecommerce.id });            
        this.props.history.push('/admin_dashboard');
    };
    render(){
        return(
            <div>
                <AdminForm 
                    ecommerce={this.props.ecommerce}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onRemove}>Remove</button>
            </div>
        );        
    };
};

const mapStateToProps = (state, props) => ({
    ecommerce: state.ecommerces.find((ecommerce) => ecommerce.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    editEcommerce: (id, ecommerce) => dispatch(editEcommerce(id, ecommerce)),
    startRemoveEcommerce: (data) => dispatch(startRemoveEcommerce(data)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminEditPage);