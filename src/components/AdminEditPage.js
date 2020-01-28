import React from 'react';
import { connect } from 'react-redux';
import AdminForm from './AdminForm';
import { startEditEcommerce, startRemoveEcommerce } from '../actions/ecommerces';
// import ErrorBoundary from './ErrorBoundary';
// import AdminRemoveModal from './AdminRemoveModal';

export class AdminEditPage extends React.Component {
    // state = {
    //     selectedRemove: undefined,
    //     description: ''
    // };    
    onSubmit = (ecommerce) => {
        // console.log('updated', ecommerce);
        this.props.startEditEcommerce(this.props.ecommerce.id, ecommerce);                
        this.props.history.push('/admin_dashboard');                                     
    };    
    onRemove = () => {     
        // const removeProduct = this.props.ecommerce.id;           
        // this.setState({
        //     selectedRemove: removeProduct,
        //     description: this.props.ecommerce.description
        // });         
        this.props.startRemoveEcommerce({ id: this.props.ecommerce.id });        
        // console.log(removeProduct);
        this.props.history.push('/admin_dashboard');
    };
    // onRemove = () => {        
    //     const removeProduct = this.props.ecommerce.id;           
    //     const desc = this.props.ecommerce.description;
    //     this.setState({
    //         selectedRemove: removeProduct,
    //         description: desc
    //     });                             
    // };
    // onSelectedRemove = () => {
    //     this.props.startRemoveEcommerce({ id: this.props.ecommerce.id });
    //     this.setState(() => ({ selectedRemove: undefined }));
    //     this.props.history.push('/admin_dashboard');        
    // };    
    // onSelectedNotRemove = () => {    
    //     const id = this.props.ecommerce.id;
    //     const ecommerce = this.props.ecommerce;
    //     this.props.startEditEcommerce(id, ecommerce);     
    //     this.props.history.push(`/edit/${id}`);
    //     this.setState(() => ({ selectedRemove: undefined }));                                                     
    // };
    
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
        {/*<ErrorBoundary>
                        <AdminRemoveModal 
                            selectedRemove={this.state.selectedRemove}
                            // onSelectedRemove={this.onSelectedRemove}
                            onSelectedNotRemove={this.onSelectedNotRemove}
                            description={this.state.description}                        
                        />
        </ErrorBoundary>*/}
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