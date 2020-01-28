import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

export class CustProductModal extends Component {  
    render() {        
        const id = this.props.modalProduct.id; //'-LynLz9jYS05Qm5pktMQ';                
        const modalOpen = this.props.onState;                        
        const { description, amount, imageUrl } = this.props.modalProduct;//.find((product) =>{ return product.id === id});
        // console.log(this.props.modalProduct)      
        
        if(!modalOpen){
            return null;
        }        
        else {
            return (
                <div className="cust-modal">
                    <div className="container">
                        <div className="row">
                            <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                <h5 className="txt-size--one">item added to the cart</h5>
                                <img src={imageUrl} className="img-fluid" alt="product"/>
                                <h5 className="txt-size--one">{description}</h5>
                                <h5 className="text-muted txt-size--one">price : {'₦'+numeral(amount / 100).format('0,0.00')}</h5>                                
                                <Link to="/" className="button button__custheader button--detail">
                                       <div onClick={() => this.props.closeModal}>
                                            continue shopping
                                       </div>                                    
                                </Link>
                                <Link to='/cart' className="button button__custheader button--cart">
                                    <div onClick={()=>{ this.props.closeModal }}>
                                        go to cart
                                    </div>
                                </Link>
                                
                            </div>
                        </div>                
                    </div>                                
                </div>
            );
        }
    }
}

const mapStateToProps = (state, props) => {    
    return {
        ecommerces: state.ecommerces
    }
}

export default connect(mapStateToProps)(CustProductModal); 